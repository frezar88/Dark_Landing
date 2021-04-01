const http = require('http');
const static = require('node-static'),
    file = new static.Server('public');

const port = '3000';
const host = '127.0.0.1'

http.createServer((req, res) => {

    req.addListener('end', () => {
        file.serve(req, res)
    }).resume();


}).listen(port, host, () => {
    console.log('ServerUP')
});
