const express = require('express')
const app = express()
const SERVER_PORT = process.env.PORT || 3000;
app.use(express.static("./views"));

// http://localhost:3000/
app.get('/C0866872', function (req, res) {
  res.send('<h1>Hello  -  C0866872 -  Georgevir Singh</h1> ')
})

// http://localhost:3000/hello
app.get('/hello', function (req, res) {
    res.send('<h1>Hello Login</h1>')
  })

// http://localhost:3000/name
app.get('/name', function (req, res) {
  res.send('<h1>Hello - C0866872 -  Georgevir Singh</h1> ')
})

app.listen(SERVER_PORT ,() => {
	console.log(`Server Running at http://localhost:${SERVER_PORT}/`)	
}) 