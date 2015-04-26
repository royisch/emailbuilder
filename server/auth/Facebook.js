module.exports = {

    connectToFacebook: function (app, express, passport) {

        console.log("facebook module");

        var FacebookStrategy = require('passport-facebook').Strategy,
            // a node module for using the facebook graph API
            graph = require('fbgraph'),
            FACEBOOK_APP_ID = "418022898344372",
            FACEBOOK_APP_SECRET = "2b8ce4cc41fad0050c5fde897b0ab4a6",
            user, accToken;

// Passport session setup.
//   To support persistent login sessions, Passport needs to be able to
//   serialize users into and deserialize users out of the session.  Typically,
//   this will be as simple as storing the user ID when serializing, and finding
//   the user by ID when deserializing.  However, since this example does not
//   have a database of user records, the complete Facebook profile is serialized
//   and deserialized.
        passport.serializeUser(function (user, done) {
            done(null, user);
        });

        passport.deserializeUser(function (obj, done) {
            done(null, obj);
        });


// Use the FacebookStrategy within Passport.
//   Strategies in Passport require a `verify` function, which accept
//   credentials (in this case, an accessToken, refreshToken, and Facebook
//   profile), and invoke a callback with a user object.
        passport.use(new FacebookStrategy({
                clientID: FACEBOOK_APP_ID,
                clientSecret: FACEBOOK_APP_SECRET,
                callbackURL: "http://localhost:1337/auth/facebook/callback"
            },
            function(accessToken, refreshToken, profile, done) {
                user = profile;
                accToken = accessToken;
                graph.extendAccessToken({
                    "access_token":    accessToken,
                    "client_id":      FACEBOOK_APP_ID,
                    "client_secret":  FACEBOOK_APP_SECRET
                }, function (err, facebookRes) {
                    accToken = facebookRes.access_token;
                    graph.setAccessToken(accToken);
                    //pass along to the next requests the object - it will be on req.myVar
                    //only after calling done function, the authentication continues ands facebook
                    //calls the /auth/facebook/callback function to continue the flow
                    //why do we want to do it? lets say we want to do all sorts of things before
                    //we return to the client, like extend the token , before rendering the new page
                    //we can do some manipulation
                    done(null,{token: accToken, profile: profile});
                });
            }
        ));


        // GET /auth/facebook
        //   Use passport.authenticate() as route middleware to authenticate the
        //   request.  The first step in Facebook authentication will involve
        //   redirecting the user to facebook.com.  After authorization, Facebook will
        //   redirect the user back to this application at /auth/facebook/callback
        app.get('/auth/facebook', passport.authenticate('facebook', {scope: "user_photos"}));

        // GET /auth/facebook/callback
        //   Use passport.authenticate() as route middleware to authenticate the
        //   request.  If authentication fails, the user will be redirected back to the
        //   login page.  Otherwise, the primary route function function will be called,
        //   which, in this example, will redirect the user to the home page.
        app.get('/auth/facebook/callback', passport.authenticate('facebook', { successRedirect: '#/inside',
            failureRedirect: '/' }));

        app.get('/getPic',
            function (req, res) {
                graph.get("/" + user.id + "/albums?fields=photos", {access_token: req.user.token}, function (err, response) {
                    res.send(JSON.stringify({data:response}));
                });
            }
        );
    }

};