var express = require('express');
var fs = require('fs');

var app = express();

app.use("/css", express.static(__dirname + '/css'));
app.use("/fonts", express.static(__dirname + '/fonts'));
app.use("/img", express.static(__dirname + '/img'));
app.use("/js", express.static(__dirname + '/js'));

app.get('/', function(request, response) { var htmlBuffer = fs.readFileSync('index.html', 'utf-8'); response.send(htmlBuffer); });
app.get('/videos', function(request, response) { var htmlBuffer = fs.readFileSync('index.html', 'utf-8'); response.send(htmlBuffer); });
app.get('/news', function(request, response) { var htmlBuffer = fs.readFileSync('index.html', 'utf-8'); response.send(htmlBuffer); });
app.get('/blog', function(request, response) { var htmlBuffer = fs.readFileSync('index.html', 'utf-8'); response.send(htmlBuffer); });
app.get('/register', function(request, response) { var htmlBuffer = fs.readFileSync('index.html', 'utf-8'); response.send(htmlBuffer); });
app.get('/contact', function(request, response) { var htmlBuffer = fs.readFileSync('index.html', 'utf-8'); response.send(htmlBuffer); });
app.get('/getsmarter', function(request, response) { var htmlBuffer = fs.readFileSync('index.html', 'utf-8'); response.send(htmlBuffer); });
app.get('/expatsintegrate', function(request, response) { var htmlBuffer = fs.readFileSync('index.html', 'utf-8'); response.send(htmlBuffer); });
app.get('/classpreparation', function(request, response) { var htmlBuffer = fs.readFileSync('index.html', 'utf-8'); response.send(htmlBuffer); });

app.get('/inc_.html', function(request, response) { var htmlBuffer = fs.readFileSync('inc_.html', 'utf-8'); response.send(htmlBuffer); });
app.get('/inc_videos.html', function(request, response) { var htmlBuffer = fs.readFileSync('inc_videos.html', 'utf-8'); response.send(htmlBuffer); });
app.get('/inc_news.html', function(request, response) { var htmlBuffer = fs.readFileSync('inc_news.html', 'utf-8'); response.send(htmlBuffer); });
app.get('/inc_blog.html', function(request, response) { var htmlBuffer = fs.readFileSync('inc_blog.html', 'utf-8'); response.send(htmlBuffer); });
app.get('/inc_register.html', function(request, response) { var htmlBuffer = fs.readFileSync('inc_register.html', 'utf-8'); response.send(htmlBuffer); });
app.get('/inc_contact.html', function(request, response) { var htmlBuffer = fs.readFileSync('inc_contact.html', 'utf-8'); response.send(htmlBuffer); });
app.get('/inc_getsmarter.html', function(request, response) { var htmlBuffer = fs.readFileSync('inc_getsmarter.html', 'utf-8'); response.send(htmlBuffer); });
app.get('/inc_expatsintegrate.html', function(request, response) { var htmlBuffer = fs.readFileSync('inc_expatsintegrate.html', 'utf-8'); response.send(htmlBuffer); });
app.get('/inc_classpreparation.html', function(request, response) { var htmlBuffer = fs.readFileSync('inc_classpreparation.html', 'utf-8'); response.send(htmlBuffer); });

app.get('/inc_email.html', function(request, response) { var htmlBuffer = fs.readFileSync('inc_email.html', 'utf-8'); response.send(htmlBuffer); });

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
