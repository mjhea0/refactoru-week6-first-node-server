// Load the http module to create an http server.
var http = require('http');
var fs = require('fs');
 
// Configure our HTTP server to respond with Hello World to all requests.
var server = http.createServer(function (request, response) {
  // response.writeHead(200, {"Content-Type": "text/plain"});
  response.writeHead(200, {"Content-Type": "text/html"});
  // response.end("<h1>Hello, Matt Null.</h1>\n");
  var data = fs.readFileSync('data.txt','utf8');
  console.log(data)
  response.end(data)
});
 
// Listen on port 8000, IP defaults to 127.0.0.1
server.listen(8000);
 
// Put a friendly message on the terminal
console.log("Server running at http://127.0.0.1:8000/");