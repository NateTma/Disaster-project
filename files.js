const fs = require('fs');

// reading files
fs.readFile('./docs/blog.txt', (err, data) => {
    if (err){
        console.log(err);
    }
    console.log(data.toString());
});

console.log('last line of code');

//writing files
fs.writeFile('./docs/blog.txt', 'hello, berlin', () => {
    console.log('file was written');
});

fs.writeFile('./docs/blog1.txt', 'hello, rio', () => {
    console.log('file created');
});


// directories
if (!fs.existsSync('./assets')){
    fs.mkdir('./assets', (err) => {
        if (err){
            console.log(err);
        }
        console.log('folder created');
    });
} else{
    fs.rmdir('./assets', (err) => {
        if (err){
            console.log(err);
        }
        console.log('folder removed');
    });
}

//deleting files
if (fs.existsSync('./demo_fs.js')) {
    fs.unlink('./demo_fs.js', (err) => {
        if(err){
            console.log(err);
        }
        console.log('file deleted');
    });
}