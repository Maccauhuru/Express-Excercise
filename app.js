const express = require('express');
const app = express();
const port = process.env.PORT;
const ip = process.env.IP;



//CREATE SOME ROUTES

app.get('/',function(req,res){
    res.send("Hi there, welcome to my assignment");
});

app.get('/speak/:pagenames',function(req,res){
    var pagename = req.params.pagenames;
    if(pagename==='pig'){
        res.send("the pig goes oink");
    }else if(pagename ==='cow'){
        res.send("the cow goes moo");
    }else if(pagename ==='dog'){
        res.send("dog goes woof woof!");
    }else if(pagename==='cat'){
        res.send("the cat goes meow");
    }else if(pagename==='horse'){
        res.send("the horse goes bojack");
    }
    else{
        res.send("Sorry, page not found..what are you doing with your life?");
    }
   });
   
app.get('/repeat/:words/:nums',function(req,res){
    var word = req.params.words;
    var num =Number(req.params.nums);
    var newword='';
    for(var i=0;i<num;i++){
    newword = newword+' '+ word;
    }
     res.send(newword); 
});

app.get('*',function(req,res){
    res.send("Sorry, page not found..what are you doing with your life?")
});


//check the port we ar listening to
app.listen(port,ip,function(){
    console.log('Server running on port :'+ port +' and ip address: '+ ip);
});