const {Duplex} = require('stream');

const duplex = new Duplex({
  read(size){
  if(this.currentCharCode > 90) {
    this.push(null);
    return;
  }
  this.push(String.fromCharCode(this.currentCharCode++));
  },
  write(chunk, encoding, cb){
    console.log(chunk.toString());
    cb();
  }
});

duplex.currentCharCode =65;

process.stdin.pipe(duplex).pipe(process.stdout)