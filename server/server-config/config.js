function configureDependencies(app,path,express,passport) {
    // Define configurations
    console.log("starting initializing server configuration "+__dirname);
    app.set('views', __dirname);
    app.use(express.logger());
    app.use(express.static('public'));
    app.use(express.cookieParser());
    app.use(express.bodyParser());
    app.use(express.session({ secret: 'keyboard cat' }));
    app.use(app.router);
    console.log("FINISH initializing server configuration");
}

module.exports.configureDependencies = configureDependencies;