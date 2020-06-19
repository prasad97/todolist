const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine','ejs');

app.get('/', function(req,res){
    // res.send("Hello");
    var today = new Date();
    var currentDay = today.getDay();
    var day = '';

    if(currentDay===6 || currentDay===0){
        // res.send('<h1>Yay its a weekend!</h1>');
        day = 'Weekend';
    } else{
        // res.send('Boo I have to work today');
        // res.sendFile(__dirname + '/index.html');
        day = 'Weekday';
    }
    res.render('list',{kindOfDay:day});
});

app.listen(3000, function(){
    console.log("Server started on port 3000");
});