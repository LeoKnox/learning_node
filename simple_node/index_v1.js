let http = require('http')
let fs = require('fs')
let index = fs.readFileSync('index.html')

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'})
    res.end(index)
}).listen(3000)