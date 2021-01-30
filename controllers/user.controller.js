const { Op } = require('sequelize');

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { SECRET } = require('../commons/config');
const User = require('../models').User;


const register = async (req,res)=>{
	try{

		// HASH PASSWORD

		let hashedPassword = await bcrypt.hash(req.body.password,10);
		let userdob = req.body.dob.split('/')
		
		// CREATE USER OBJECT

		let user = {
			name:req.body.name,
			email:req.body.email,
			password:hashedPassword,
			dob: new Date(parseInt(userdob[2]),parseInt(userdob[1])-1,parseInt(userdob[0])+1)
		}


		//CHECK USER EXISTING

		let isExisting = await User.findOne({where:{email:user.email}});
		if(isExisting){
			throw new Error('user email already exists')
		}

		// CREATE NEW RECORD

		let response = await User.create(user);

		return res.status(201).json({
			error:false,
			user:response
		})


	}catch(err){
		return res.status(500).json({
			error:true,
			message:err.message
		})
	}
}



/* LOGIN CONTROLLER*/
const login = async (req,res)=>{
	try{

		let userCreds = await User.findOne({where:{email:req.body.email}})

		if(userCreds == null )
			throw new Error('user email does not exist')

		let isCorrect = await bcrypt.compare(req.body.password,userCreds.password)

		if(!isCorrect)
			throw new Error('user password does not match')

		else{
			let token = jwt.sign({data:userCreds.email},SECRET,{expiresIn :'2h' })
			return res.status(200).json({
				error:false,
				token:`Bearer ${token}`,
				email:userCreds.email
			})
		}

	}catch(err){
		return res.status(500).json({
			error:true,
			message:err.message
		})
	}
}

// LIST OF ALL REGISTERED USERS
const list = async (req,res)=>{
	try{

		let userMail = req.user.email;
		let users = await User.findAll();

		let updatedUses = users.filter(user=>{
			if(user.email != userMail)
				return user
		})
		
		return res.status(200).json({
			error:false,
			users:updatedUses
		})

	}catch(err){
		return res.json({
			error:true,
			message:err.message
		})
	}
}



// SEARCH USERS
const searchUser = async(req,res)=>{
	try{

		let name = req.body.name;

		let users = await User.findAll({
			where:{
				name:{
					[Op.startsWith]:name
				}
				
			}
		})

		return res.status(200).json({
			error:false,
			users:users
		})

	}catch(err){
		return res.status(500).json({
			error:true,
			message:err.message
		})
	}
}


module.exports = {
	register,
	login,
	list,
	search:searchUser
}