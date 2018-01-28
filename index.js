// Hack@Brown 2018 WebAR project -- Network Code 
// Jarod Boone, Catherine Habgood, Duncan McManus 

// Modules 
var bp = require('body-parser');
var path = require('path');
var ejs = require('ejs');
var http = require('http'); 
var fs = require('fs'); // file system io 

var a = require('./httpServer'); 

//if the port is an env var, take it, else default
const port = process.env.port || 8080;
const backup_port = process.env.port || 3011;

var requestHandler = function (req,res,err) { 

    console.log('recieved client...'); 

    fs.readFile('views/b.html', function(err,page) {
        if (err) { 
            console.log('error readin html'); 
            res.writeHeader(500, {'Content-Type': 'text/html '}); 
            res.end('html error');
            throw(err); 
        } else {
            res.writeHeader(200, {'Content-Type': 'text/html'}); 
            res.write(page); 
            res.end(); 
        }
    })
}
var app = http.createServer(requestHandler); 

app.listen(port, (err) => { 
    if (err) { 
        console.log('something happened lol'); 
    }

    console.log('server listening...');
    
});
