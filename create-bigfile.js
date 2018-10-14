const fs = require('fs');
const writer = fs.createWriteStream('./bigfile.txt');

for(let i=0; i <=1e3; i++) {
  writer.write('Hello, I am trying to create big file to test stream feature. Since stream loads data into memory in chunk therefore assumption is it will load big file without throwing out of memory exception');
  writer.write('Hello, I am trying to create big file to test stream feature. Since stream loads data into memory in chunk therefore assumption is it will load big file without throwing out of memory exception');
  writer.write('Hello, I am trying to create big file to test stream feature. Since stream loads data into memory in chunk therefore assumption is it will load big file without throwing out of memory exception');
  writer.write('Hello, I am trying to create big file to test stream feature. Since stream loads data into memory in chunk therefore assumption is it will load big file without throwing out of memory exception');
}
writer.end();