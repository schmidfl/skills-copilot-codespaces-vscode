// Create web server that can handle requests for comments and return them as JSON
// 1. Create a web server
// 2. Create a route for /comments
// 3. Return comments as JSON

const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    const path = req.url.toLowerCase();
    const method = req.method;

    if (path === '/comments' && method === 'get') {
        fs.readFile('comments.json', 'utf-8', (err, data) => {
            if (err) throw err;
            res.setHeader('Content-Type', 'application/json');
            res.end(data);
        });
    } else {
        res.statusCode = 404;
        res.end('Not found');
    }
});

server.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});