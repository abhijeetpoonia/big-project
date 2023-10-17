const http = require('http');
const url = require('url');
const mysql = require('mysql2');

const port = 5000;

// Database connection configuration
const db = mysql.createConnection({
  host: '13.208.213.103',
  user: 'admin',
  password: 'mypassword',
  database: 'webappdb',
});

db.connect((err) => {
  if (err) {
    console.error('Database connection error: ' + err.stack);
    return;
  }
  console.log('Connected to the database');
});

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  if (parsedUrl.pathname === '/transaction') {
    // Retrieve data from the "entries" table
    const selectQuery = 'SELECT * FROM entries';

    db.query(selectQuery, (err, results) => {
      if (err) {
        console.error('Error retrieving data: ' + err);
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Internal Server Error');
      } else {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(results));
      }
    });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

