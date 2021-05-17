const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({extended:true}));
//app.get("/about",function(req, res){
//   res.send("<h1>Hello world</h1>");
//});
app.get("/",function(req, res){
    res.sendFile(__dirname+"/index.html");
    //console.log(__dirname);
});



app.post("/", function(req, res){
    //console.log(req.body);
    //console.log(req.body.num1);
    var n1=Number(req.body.num1);
    var n2=Number(req.body.num2);
    var result = n1+n2;
    res.send("The result is:" + result);
});
app.listen(3000, function(){
    console.log("server is started....")
});