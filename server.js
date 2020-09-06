// node.js backend: server.js and backend folder
// console.log('Hello');

const http = require('http');
const app = require('./backend/app');

const port = process.env.PORT || 3000;

app.set('port', port);
const server = http.createServer(app);
// const server = http.createServer((req, res) => {
//   // might be parsing the request.-> Express helps.
//   res.end('This is my first response');
// });

// hosting provider's given port number.
server.listen(port);


