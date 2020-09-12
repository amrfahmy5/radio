var passport = require('passport');
var FacebookStrategy = require('passport-facebook').Strategy;
var LocalStrategy = require('passport-local').Strategy;

var User = require('../app/models/User')

var configAuth = require('./auth');


passport.serializeUser(function (id, done) {
    //"req.session.passport.user"
	done(null, id);
});

passport.deserializeUser(function (id, done) {
    //"req.user"
    User.userSession(id, function (err, user) {
        done(err,user[0])
    })
});



passport.use('local-signup', new LocalStrategy({
	usernameField: 'email',
	passwordField: 'password',
	passReqToCallback: true
},
function(req, email, password, done){
	process.nextTick(function(){
		User.singnup(req.body, (err, result) => {
			if (err)
				return done(err);
			return done(null, result.insertId);
		})

	});
}));

passport.use('local-login', new LocalStrategy({
		usernameField: 'email',
		passwordField: 'password',
		passReqToCallback: true
	},
	function(req, email, password, done){
		process.nextTick(function () {
			let userObj = {
                "email": email,
				"password": password				
			}
			User.login(userObj, function (err, user) {
				if (user.length==1)
					return done(null, user[0].id);
				else if(err)
					return done(err);
				else
					return done(null,false)
			});
		});
	}
));


passport.use(new FacebookStrategy({
	clientID: configAuth.facebookAuth.clientID,
	clientSecret: configAuth.facebookAuth.clientSecret,
    callbackURL: configAuth.facebookAuth.callbackURL,
    profileFields: ['id', 'emails', 'name'] 
},
	function (accessToken, refreshToken, profile, done) {
        process.nextTick(function () {
			let userObj = {
                "id": profile.id ,
                "email": profile.emails[0].value,
                "name": profile.name.givenName + ' ' + profile.name.familyName,
				"password": accessToken				
			}
			User.fbLogin(userObj.id, function (err, user) {
				if (err)
                    return done(err);
				if (user.length==1)
					return done(null, user[0].id);
				else {
					User.fbSingnup(userObj, (err, result) => {
						if (err)
							throw err;
						return done(null, result.insertId);
                    })
				}
			});
		});
	}
));


module.exports = passport
