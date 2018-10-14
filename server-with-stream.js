const http = require('http');
const fs = require('fs');
const server = http.createServer();
console.time('Server started at port 8181');
server.on('request', (req, res) => {
  console.time('reading file')
  const reader = fs.createReadStream('./bigfile.txt');
  reader.pipe(res);
});
server.listen(8181);
console.timeEnd('Server started at port 8181')