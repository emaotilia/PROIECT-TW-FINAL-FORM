let express = require('express')
let bodyParser = require('body-parser');
let formidable = require('formidable');
let session = require('express-session');
let crypto = require('crypto');
let app = express();
let port = 3000;

//Librarie necesara pentru a prelucra fisiere JSON
const fs = require('fs');

// exemple de pe pagina http://www.irinaciocan.ro/tehnici_web/lab12.php

// Citire BD
let rawdata = fs.readFileSync('data/database_login.json'); 
let userBD = JSON.parse(rawdata);

// Use this code as is. 
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, access-control-allow-origin")
    next();
  });

app.use(session({
    secret: 'Yamaha',//folosit de express session pentru criptarea id-ului de sesiune
    resave: true,
    saveUninitialized: false
    }
));

app.set('view engine', 'ejs');

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
  

// What you get if you go on the default route of the server. It's good to keep something here whether you use it or not.
app.get('/', function (req, res) {
    res.sendFile('login.html', {root: __dirname});
});

app.get('/MD5', function(req, res) {
    res.sendFile('MD5.js', {root: __dirname});
});

app.post('/', function(req, res) {
    // res.send(req.body);
    // console.log(req.body, userBD, userBD.length, userBD[0]);
    
    let cifru = crypto.createCipher('aes-128-cbc', 'HarleyDavidson');

    console.log(req.body.password)

    let encrpassword= cifru.update(req.body.password, 'utf8', 'hex');

    encrpassword+=cifru.final('hex');
    console.log(encrpassword);
        
    userFound = {}
    for( let i = 0; i <userBD.length; i++){
        if(userBD[i].username === req.body.username && userBD[i].password === encrpassword){
            userFound = userBD[i];
        }
        if(userFound.username){
            req.session.username=userBD[i];//setez userul ca proprietate a sesiunii
        }
    }
    
    res.render('profile',{user: req.session.username});
})

app.get('/profile', function(req, res) {
    console.log('profile', req.session.username);
    res.render('profile',{user: req.session.username});
})



app.post('/logout', function(req, res) {
    req.session.destroy();
// 
    res.send();
})

app.get('/something', function(req, res){
    res.send(req.session.username);
})

// In caz ca intrii pe o pagina care nu exista!
app.use(function(req,res){
    // res.status(404).send({error: 'Not found'});
    res.status(404).sendFile('404.html', { root: __dirname });
});

// Start the server
app.listen(port, () => {
    console.log(`Express.JS Server is running on http://localhost:${port}`)
});