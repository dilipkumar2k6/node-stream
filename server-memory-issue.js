const http = require('http');
const fs = require('fs');
const server = http.createServer();
console.time('Server started at port 8181');
server.on('request', (req, res)=>{
  console.time('reading file')
  fs.readFile('./bigfile.txt', (err, data)=>{
    if(err) {
      throw err;
    }
    console.timeEnd('reading file');
    res.end(data);
  })
});
server.listen(8181);
console.timeEnd('Server started at port 8181')