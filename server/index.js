let express = require('express');
var app = express();
var http = require('http').createServer(app);
var port = process.env.port || 3000;
var mongoose = require('mongoose');
var cors = require('cors');
var bodyParser = require('body-parser');


mongoose.Promise=global.Promise;
mongoose.connect('mongodb+srv://admin:admin@clustervoile-98qyi.mongodb.net/test?retryWrites=true&w=majority',
{useNewUrlParser:true,useUnifiedTopology:true,useFindAndModify:false},() =>{
    console.log("Connected to db!");
    http.listen(port, () => console.log("Server Up and running"));
});

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cors());

let request_routes = require('./api/routes/UsersRoutes');
request_routes(app);

