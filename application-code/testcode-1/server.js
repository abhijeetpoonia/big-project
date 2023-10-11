const http = require('http');

const port = 3000;
const message = 'This is first code';

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end(message);
});

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

