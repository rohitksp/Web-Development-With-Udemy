var exp = require('express')
var app = exp()

app.get('/', function(req, res) {
    res.send('Hi there!')
})
app.listen(process.env.PORT, process.env.IP, function() {
    console.log('Server has been started')
})