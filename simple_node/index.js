var express = require('express')
var app = express()
app.set('view engine', 'ejs')

app.get('/', function(req, res) {
    res.render("index")
})

app.post('/send', function(req, res) {
    console.log('hello ')
})

app.listen(3000)