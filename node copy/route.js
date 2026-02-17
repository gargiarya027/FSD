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



else if (req.url === '/homepage') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(`
        <!DOCTYPE html>
        <html>
        <head>
            <style>
                * { margin: 0; padding: 0; box-sizing: border-box; }
                body { font-family: Arial, sans-serif; }
                nav { background: #333; padding: 15px; display: flex; gap: 30px; }
                nav a { color: white; text-decoration: none; font-size: 16px; }
                nav a:hover { color: #0066cc; }
                .container { display: flex; align-items: center; gap: 40px; padding: 50px; }
                .container img { width: 300px; height: 300px; object-fit: cover; border-radius: 8px; }
                .content h2 { font-size: 28px; margin-bottom: 15px; }
                .content p { font-size: 16px; line-height: 1.6; color: #555; }
            </style>
        </head>
        <body>
            <nav>
                <a href="/homepage">Logo</a>
                <a href="/homepage">Home</a>
                <a href="/work">Work</a>
            </nav>
            <div class="container">
                <img src="/image/myphoto.png" alt="College">
                <div class="content">
                    <h2>ABES Engineering College</h2>
                    <p>We are students of ABES Engineering College pursuing B.Tech in various disciplines.</p>
                </div>
            </div>
        </body>
        </html>
    `);
}

else if (req.url === '/work') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(`
        <!DOCTYPE html>
        <html>
        <head>
            <style>
                * { margin: 0; padding: 0; box-sizing: border-box; }
                body { font-family: Arial, sans-serif; }
                nav { background: #333; padding: 15px; display: flex; gap: 30px; }
                nav a { color: white; text-decoration: none; font-size: 16px; }
                nav a:hover { color: #0066cc; }
                .container { padding: 50px; }
                h2 { font-size: 28px; margin-bottom: 20px; }
            </style>
        </head>
        <body>
            <nav>
                <a href="/homepage">Logo</a>
                <a href="/homepage">Home</a>
                <a href="/work">Work</a>
            </nav>
            <div class="container">
                <h2>Our Work</h2>
                <p>Projects and achievements of our students...</p>
            </div>
        </body>
        </html>
    `);
}