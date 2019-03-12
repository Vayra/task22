function fluffsOfDeath(){
    this.kitties = new Array();

    this.addKitty = function(kittyName, kittyAge, kittyDescription, img){
        this.kitties.push({
            name : kittyName,
            age  : kittyAge,
            description : kittyDescription,
            image : img
        })
    }
}

/* data = {
    kitties: [
        {
            name : "Murder Mittens",
            age : "ancient beyond reckoning",
            description : "This bad kitty has tormented the living since time immemorial. Knocks cups off tables for fun. ",
            image : "http://localhost:8080/static/murdermittens.jpg"
        },
        {
            name : "Carnage Caracal",
            age : 5,
            description : "DOOM of crows. Scourge of mice. Herald of clawed death. This little wind of death kills for pleasure, will not spare even the smallest of prey. ",
            image : "http://localhost:8080/static/carnagecaracal.jpg"
    }]
} */

data = new fluffsOfDeath();
data.addKitty(
    "Murder Mittens", 
    "ancient beyond reckoning", 
    "This bad kitty has tormented the living since time immemorial. Knocks cups off tables for fun. ",
    "http://localhost:8080/static/murdermittens.jpg")
data.addKitty(
    "Carnage Caracal",
    5,
    "DOOM of crows. Scourge of mice. Herald of clawed death. This little wind of death kills for pleasure, will not spare even the smallest of prey. ",
    "http://localhost:8080/static/carnagecaracal.jpg")

const express = require('express');

var app = express();

app.use('/static', express.static('img'));
app.use('/static', express.static('css'));

var path = require('path');

app.get('/', (req, res) =>{
    res.sendFile(path.join(__dirname + '/hello.html'))
});

app.get('/info', (req, res) =>{
    res.sendFile(path.join(__dirname + '/info.html'))
})

app.get('/pictures', (req, res) =>{
    res.sendFile(path.join(__dirname + '/pics.html'))
})

app.get('/data', (req, res) =>{
    res.json(data)
})

app.listen(process.env.PORT || 8080);