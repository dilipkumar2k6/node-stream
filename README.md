# Streams
- Streams are `nodejs`'s best and most misunderstood idea.
- Lot of `npm` modules are developed to make easier to work with `streams`
- Streams gives power of composiblity of code.
- Readable and writable are two main category for streams
- Many of builtin modules in `node` has implemented `streams`
- All streams are instance of EventEmitter
- They all emits events so that we can either read/write data.

# How to define Streams?
Streams are collection of data that might not be available all at once and don't have to fit in memory

- It makes stream very powerful to deal with large amount of data.
- Also, it makes stream powerful to deal with data coming from external source one chunk at a time.

## Readable Streams
- HTTP Response, on the client
- HTTP Request, on the server
- fs read stream
- zlib stream
- crypto stream
- TCP sockets
- child process stdout and stderr
- process.stdin

## Writable Stream
- HTTP request, on client
- HTTP response, on the server
- fs write stream
- zlib stream
- crypto stream
- TCP sockets
- child process stdin
- process.stdout, process.stderr

# Example to demonstrate stream
## HTTP Server to read big file without stream
```
const http = require('http');
const fs = require('fs');
const server = http.createServer();
server.on('request', (req, res)=>{
  fs.readFile('./bigfile.txt', (err, data)=>{
    console.timeEnd('reading file');
    res.end(data);
  })
});
server.listen(8181);
```
- node process memory consumption for 700mb file was 720mb

## HTTP Server to read big file with stream
```
const http = require('http');
const fs = require('fs');
const server = http.createServer();
server.on('request', (req, res) => {
  const reader = fs.createReadStream('./bigfile.txt');
  reader.pipe(res);
});
server.listen(8181);
```
- node process memory consumption for 700mb file was 40mb :-)

# Types of stream?
- Readable
- Writable
- Duplex
- Transform

# How to consume streams?
Use `pipe`
```
src.pipe(dst)
```
- Here, pipe the output of readable stream `src`  as the input of writable stream `dst`
- `src` has to be readable stream
- Destination has to be writable stream
- They both can be a duplex stream as well.
- In case of duplex stream, we can chain `pipe`
```
a.pipe(b).pipe(c).pipe(d)
```
- Either user `pipe` or `events` don't mix them.

# Nodejs readable `Streams`
It uses `require('streams`) module.

Following are readable streams events
- data
- end
- error
- close
- readable

Following are readable streams functions
- pipe()
- unpipe()
- read()
- unshift()
- resume()
- pause()
- isPaused()
- setEncoding()

It has following two modes
- Paused, also known as pull mode. It uses `streams.read()`.
- Flowing, also known as push mode. It uses `EventEmitter`. If no consumer to listen then data can be lost.

`stream.resume()` is used to switch from `paused` to `flowing` mode and `stream.pause` to switch back to `Paused` mode.

All readable streams starts with `pause` mode. However it can be easily switch between `pause` vs `flowing` mode.

# Nodejs writable `Streams`
It uses either `pipe` or `events`.

Following are writable streams events
- drain
- finish
- error
- close
- pipe
- unpipe

Following are writable stream functions
- write()
- end()
- cork()
- uncork()
- setDefaultEncoding()








