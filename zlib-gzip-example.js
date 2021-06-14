// const http = require('http');
const fs = require('fs');
const zlib = require('zlib');

const file = fs.readFileSync('./data/dummy.txt');
console.log(file.byteLength);
const zipped = zlib.gzipSync(file);
console.log(zipped.byteLength);


// const requestListener = function (req, res) {
//   res.writeHead(200);
//   res.end('Hello, World!');
// }

// const server = http.createServer(requestListener);
// server.listen(8085);