const passport =require("passport")
const GoogleStrategy = require('passport-google-oauth2').Strategy;

passport.serializeUser(function(user, done) {
    done(null, user);
});

passport.deserializeUser(function(user, done) {
        done(null, user);
});

passport.use(new GoogleStrategy({
        clientID:"788625912844-jaim775vfgd820jv8g7jb58n4mqrn4se.apps.googleusercontent.com",
        clientSecret:"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",
        callbackURL: "http://localhost:5000/google/callback",
        passReqToCallback   : true
    },
    function(request, accessToken, refreshToken, profile, done) {
            return done(null, profile);
    }
));