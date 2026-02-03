const http = require('http');
const fs = require('fs');
const path = require('path');

const myserver = http.createServer((req, res) => {

    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('<h1>Welcome to ABES Engineering College</h1>');
    }

    else if (req.url === '/about') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(`
            <h1>About Us</h1>
            <p>We are students of ABES Engineering College pursuing B.Tech</p>
            <img src="/image/myphoto.png" width="400" />
        `);
    }

    else if (req.url === '/image/myphoto.png') {
        const imgPath = path.join(__dirname, 'image', 'myphoto.png');

        fs.readFile(imgPath, (err, data) => {
            if (err) {
                res.writeHead(404);
                res.end('Image not found');
            } else {
                res.writeHead(200, { 'Content-Type': 'image/png' });
                res.end(data);
            }
        });
    }

    else if (req.url === '/contact') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('Contact us at abes@ac.in');
    }

    else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end('404 page not found');
    }
});

myserver.listen(8000, () => {
    console.log('Server is running on port 8000');
});