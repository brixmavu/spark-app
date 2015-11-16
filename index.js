var express = require('express'),
    exphbs = require('express-handlears'),
    mysql = require('mysql'),
    myConnection = require('express-myconnection'),
    bodyParser = require('body-parser');


var app = express();

var dbOptions = {
    host: 'localhost',
    user: 'root',
    password: 'brix2015',
    database: 'school_management'
};


app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

app.use(express.static(__dirname + '/public'));

//setup middleware
app.use(myConnection(mysql, dbOptions, 'single'));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
        extended: false
    }));
    // parse application/json
app.use(bodyParser.json());

function errorHandler(err, req, res, next) {
    res.status(500);
    res.render('error', {
        error: err
    });
}

// setup handlers
app.get('/', );

app.use(errorHandler);

//configure the port number using and environment number
var portNumber = process.env.CRUD_PORT_NR || 3000;

//start everything up
app.listen(portNumber, function() {
    console.log('Create, Read, Update, and Delete (CRUD) example server listening on:', portNumber);
});
