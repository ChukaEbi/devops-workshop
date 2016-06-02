var express = require('express');
var bodyParser = require('body-parser');


var app = express();
app.use(bodyParser.json({ type: 'application/json' }));
app.use(bodyParser.urlencoded());

app.get('/', function(req,res){
  res.json({ greeting: "Hello Workshoppers"});
});

app.listen(5000);
