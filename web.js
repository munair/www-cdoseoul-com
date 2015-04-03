var express = require('express');
var fs = require('fs');

var app = express();

app.use("/css", express.static(__dirname + '/css'));
app.use("/fonts", express.static(__dirname + '/fonts'));
app.use("/img", express.static(__dirname + '/img'));
app.use("/js", express.static(__dirname + '/js'));

app.get('/', function(request, response) { var htmlBuffer = fs.readFileSync('index.html', 'utf-8'); response.send(htmlBuffer); });
app.get('/news', function(request, response) { var htmlBuffer = fs.readFileSync('news.html', 'utf-8'); response.send(htmlBuffer); });
app.get('/blog', function(request, response) { var htmlBuffer = fs.readFileSync('blog.html', 'utf-8'); response.send(htmlBuffer); });

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
