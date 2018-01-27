var express = require('express');
var bp = require('body-parser');
var path = require('path');
var ejs = require('ejs');

//instantiate express instance
var app = express();

//if the port is an env var, take it, else default
const port = process.env.port || 3012;
const backup_port = process.env.port || 3011;

// ******** SET THIS UP LATER *************
// //set up even listeners on database get
// var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'Mongoose: Connection Error:'));
// db.once('open', function () {
//     console.log('Mongoose: Connection successful');
// });

// //connect to the database
// var db_status = mongoose.connect(config.getDbConnectionString(), {
//     useMongoClient: true
// });

//set view engine to ejs but parse plain html  
app.engine('html', ejs.renderFile);
app.set('view engine', 'html');

//static asset requests to public
//app.use('/assets', express.static(path.join(__dirname, 'public')));

//use middleware 
app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));

app.get('/',function(req,res,err) { 
    res.render('index'); 
})

//start server 
app.listen(port); 