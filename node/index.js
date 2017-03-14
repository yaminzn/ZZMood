var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var channels = require('./routes/channels');

var port = process.env.PORT || 3000;

var app = express();


app.use(express.static(path.join(__dirname, 'public')));

//Body parser middleware
app.use(bodyParser.json());

//routes

//remove this if not testing on localhost
/*
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:7100');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});
*/
app.use('/api', channels);

app.get('/', (req, res) => {
    res.send('Nothing to see here');
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.listen(port, function(){
    console.log('Server started on port '+port);
});