var express = require("express");

var app = express();

app.use(express.static(__dirname));


var messages=[
  {coloumn:'Full Name',help:'In this coloumn Please enter your name'},
  {coloumn:'Roll No',help:'Here please enter the roll no provided by your College'}
]
app.get('/help',(req,res)=>{
  res.send(messages)
  //res.send('Hi I am the helper Nia')
})
var server = app.listen(3000, () => {
  console.log("The address of server is :", server.address().port);
});
// app.listen(3000);

