var express = require('express')
var bodyParser = require('body-parser')
var app = express()
var port = process.env.PORT || 3000

app.use(bodyParser.json())
app.use( 
  bodyParser.urlencoded({
    extended: false
  })
)

var Users = require('./routes/Users')
var Tasks = require('./routes/Tasks')

app.use('/users', Users)
app.use('/api', Tasks)

app.listen(port, function() {
  console.log('Server is running on port: ' + port)
})