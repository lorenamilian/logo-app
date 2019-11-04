const express = require('express')

const app = express()
 
//setting view engine
app.set('view engine', 'ejs')

//middleware
app.use(express.static('./public'));

//ROUTES
 
//get
app.get('/', function (req, res) {
  res.render('firstPage.ejs');
})
 
app.listen(3001, function(){
  console.log("my server is running better")
})