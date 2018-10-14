const { Readable } = require('stream');

// const readStream = new Readable();
//
// readStream.push('Hello')
// readStream.push(null); // no more data

const readStream = new Readable({
  read(size) {
    setTimeout(() => {
      if (this.currentCharCode > 90) {
        this.push(null);
      } else {
        this.push(String.fromCharCode(this.currentCharCode++))
      }
    }, 100)
  }
})

readStream.currentCharCode = 65;


readStream.pipe(process.stdout)

process.on('exit', ()=>{
  console.log('\n\n current char code is ', readStream.currentCharCode)
})

process.stdout.on('error', process.exit)