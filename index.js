const express = require('express')
const http = require('http')

var exphbs  = require('express-handlebars');

const path = require('path')
const app = express()
const port = 3000

//app.engine('handlebars', exphbs());
app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');



 



app.use(express.static(path.join(__dirname,"static")))

// app.get('/', (req, res) => {
//   res.sendFile('Hello World!')
// })

app.use('/',require(path.join(__dirname,'routes/blog.js')))

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})