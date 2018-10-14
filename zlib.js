const fs = require('fs');
const crypto = require('crypto');
const zlib = require('zlib');
const { Transform } = require('stream');

const progress = new Transform({
  transform(chunk, encoding, cb) {
    process.stdout.write('.');
    cb(null, chunk);
  }
});
const file = process.argv[2];
fs.createReadStream(file)
  .pipe(zlib.createGzip()) // transform stream
  .pipe(crypto.createCipher('aes192','a_secret'))
  .pipe(progress)
  //.on('data',()=>process.stdout.write('.'))
  .pipe(fs.createWriteStream(file + '.zz'))
  .on('finish', ()=> console.log('Done'));