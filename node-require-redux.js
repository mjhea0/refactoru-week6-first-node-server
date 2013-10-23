// Load the http module to create an http server.
var http = require('http');
var fs = require('fs');
 
// Configure our HTTP server to respond with Hello World to all requests.
var server = http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "text/html"});
	fs.readFile('data.txt', function read(err, data) {
    if (err) {
        throw err;
    }
    content = data;
    response.end(content)
	});
});
 
// Listen on port 8000, IP defaults to 127.0.0.1
server.listen(8000);
 
// Put a friendly message on the terminal
console.log("Server running at http://127.0.0.1:8000/");




