const User = require('../models').User;
const { SECRET } = require('./config');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;


module.exports = function(passport){
	var opts = {};
	opts.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme('Bearer');
	opts.secretOrKey = SECRET;

	passport.use( new JwtStrategy(opts,(jwt_payload,done)=>{
		User.findOne({where:{email:jwt_payload.data}})
			.then((user)=>{
				if(user){
					let response = {...user.dataValues}
					delete response['password'];
					return done(null,response);
				}
				else
					return done(null,false);
			})
			.catch(err=>{
				if(err)
					return done(err,false);
			})
		}) 
	)
}