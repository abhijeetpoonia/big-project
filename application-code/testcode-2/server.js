const http = require('http');
const url = require('url');

const port = 4000;
const message = 'This is second code';

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  if (parsedUrl.pathname === '/app') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(message);
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

