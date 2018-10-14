const { Transform } = require('stream');

const upperCaseTr = new Transform({
  transform(chnk, encoding, cb) {
    this.push(chnk.toString().toUpperCase());
    cb();
  }
});

process.stdin.pipe(upperCaseTr).pipe(process.stdout)