const express = require('express');

// express app
const app = express();

//register view engine
app.set('view engine', 'ejs'); 

//listen for requests
app.listen(3000);//creates a server on port 300

app.get('/', (req, res) => {  
    res.render('index', {title: 'Home'});//this is a relative path
});

app.get('/about', (req, res) => {
    res.render('about', {title: 'About'});
});

app.get('/blogs/create', (req, res) => {
    res.render('create', {title: '404'});
});

//404, this must always be at the bottom
app.use((req, res) => {
    res.status(404).render('404', {title: '404'});
});