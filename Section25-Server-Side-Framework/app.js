var exp = require('express')
var app = exp()

app.get('/', function(req, res) {
    res.send('Hello World!')
})

app.get('/memes', function(req, res) {
    res.send('You search memes!')
})

app.get('/dogs', function(req, res) {
    res.send('You search dogs')
})
app.get('/r/:PublicFreakout', function(req, res){
    var public = req.params.publicfreakout;
    res.send('hello man ' + public + 'how are you.')
})

app.get('/r/:PublicFreakout/:comment/:id/:title/', function(req, res){
    res.send('Welcome to comment session')
})

app.get('*', function(req, res) {
    res.send('YOU CHOOSED A WRONG KEY')
})

app.listen(5555, function(req, res) {
    console.log('Server has started')
})