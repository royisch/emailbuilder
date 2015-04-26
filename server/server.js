var fs = require("fs"),
	express = require("express"),
	https = require("https"),
	path=require('path'),
    //config hold the host + port to be configured in a file for convenience
	config = JSON.parse(fs.readFileSync("server/server-config/config.json")),
	host=config.host,
	port = config.port;
    //initializing express
	app = express();

    //defining root folders so the application ( with express) will know his root folders and will supply the required
    //pages when we want them
    app.use(express.static(path.join(__dirname,'../app')));
    app.use(express.static(path.join(__dirname,'../')));

    //initialize modules - a node module to keep server.js more orginized
    require('./server-config/config.js').configureDependencies(app, path ,express);

app.use(function(err, req, res, next){
  console.error(err.stack);
  res.send(500, 'Something broke!');
});

console.log('starting server on '+host+':'+port);
//runs the server with host and port
app.listen(port,host);


var request = require("request");



app.get('/getWeather',
    function (req, res) {
        request({
            uri: "http://api.openweathermap.org/data/2.5/find/city?bbox=12,32,15,37,10&cluster=yes",
            method: "GET"
        },
            function(error, response, body) {
               console.log(body);
                res.send(JSON.stringify({data:body}));
            }
        );

        //http://api.openweathermap.org/data/2.5/find/city?bbox=12,32,15,37,10&cluster=yes
    }
);