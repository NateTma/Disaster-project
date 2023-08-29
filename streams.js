const fs = require('fs')

const readStream = fs.createReadStream('./docs/blog2.txt');
const writeStream = fs.createWriteStream('./docs/blog3.txt');

//readStream.on('data', (chunk) => {
//    console.log('-----Newchunk-----');
//    console.log(chunk.toString());
//    writeStream.write('New Chunk \n');
//    writeStream.write(chunk);
//});

//piping

readStream.pipe(writeStream);