const express = require('express');
const app = express();
const port = process.env.PORT;
const ip = process.env.IP;



//CREATE SOME ROUTES

app.get('/',function(req,res){
    res.send("Hi there, welcome to my assignment");
});

app.get('/speak/:animal', function (req, res) {
    var animal = req.params.animal.toLowerCase();
    var sounds = {
        pig: 'oink',
        dog: 'woof woof',
        cat: 'meow',
        cow: 'moo',
        goldfish: 'i hate Stan Smith'
    }
    var sound = sounds[animal];
    res.send("The " + animal + " says '" + sound + "'");
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