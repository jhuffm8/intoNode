const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;



// creating a server

const server = http.createServer((req, res) => {
    const url = req.url;
    if(url === '/about'){
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.write('<h1 style="color: red">About</h1>');
        res.end()
        return;
    }
    console.log(url)
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.write('<h1 style="color: red">Hello World!</h1>');
    res.write('<p>What am I...?</p>');
    res.write(`<a href="http://${hostname}:${port}/about">About</a>`)
    res.end();
});
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);

});
