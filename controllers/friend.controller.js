const Request = require('../models').Request;
const Friend = require('../models').Friend;
const User = require('../models').User;

const friendRequest = async (req,res)=>{
	try{

		let userId = req.user.id;
		let requestId = req.body.requestId;

		let request = {
			userId:userId,
			requestId:requestId
		}

		// CHECK REQUEST ALREADY MADE
		let requestMade = await Request.findOne({where :{userId:request.userId,requestId:request.requestId}})
		if(requestMade)
			throw new Error('Friend Request already sent');

		let result = await Request.create(request);
		return res.status(201).json({
			error:false,
			data:result	
		})

	}catch(err){
		return res.status(500).json({
			error:true,
			message:err.message
		});
	}
}


const friendRequestList = async(req,res)=>{
	try{
		let requestId = req.user.id;

		let list = await Request.findAll({
			attributes:['id','userId'],
			where:{
				requestId:requestId
			}
		})

		return res.status(200).json({
			error:false,
			requests:list
		})

	}catch(err){
		return res.json({
			error:true,
			message:err.message
		})
	}
}

const friendRequestAccept = async(req,res)=>{
	try{
		let userId = req.user.id;
		let friendId = req.body.friendId;

		let friend = {
			userId:userId,
			friendId:friendId
		}

		let reverseFriend = {
			userId:friendId,
			friendId:userId
		}

		// CHECK IF THE REQUEST EXISTS
		let isRequestExists = await Request.findOne({where:{requestId:userId,userId:friendId}})
		if(isRequestExists == null)
			throw new Error('no friend request found')

		// DELETE THE FRIEND REQUEST
		let rowDeleted = await Request.destroy({
			where:{requestId:userId}
		})

		if(rowDeleted != 1)
			throw new Error('something went wrong friend not added');

		// SAVE NEW FRIEND 
		let saveFriend = await Friend.create(friend);
		let reverseSaveFriend = await Friend.create(reverseFriend);

		return res.status(201).json({
			error:false,
			result:saveFriend
		})

	}catch(err){
		return res.status(500).json({
			error:true,
			message:err.message
		})
	}
}


const friendList = async (req,res)=>{
	try{

		let userId = req.user.id;

		let list = await Friend.findAll({
			attributes:['friendId'],
			where:{
				userId:userId
			}
		})

		return res.status(200).json({
			error:false,
			friends : list
		})

	}catch(err){
		return res.json({
			error:true,
			message:err.message
		})
	}
}


const mutualFriends = async (req,res)=>{
	try{
		let userId = req.user.id;

		let visitingId = req.params.id;

		let userFriends = await Friend.findAll({
			attributes:['friendId'],
			where:{userId:userId}
		});
		
		let visitingFriends = await Friend.findAll({
			attributes:['friendId'],
			where:{userId:visitingId}
		});

		// console.log(userFriends);
		// console.log(visitingFriends);

		
		let mutual = userFriends.filter(friend=>{
			for(fr of visitingFriends){
				if(fr.dataValues.friendId == friend.dataValues.friendId)
					return friend
			}
		})

		return res.status(200).json({
			error:false,
			mutual : mutual
		})

	}catch(err){
		console.log(err);
		return res.json({
			error:true,
			message:err.message
		})
	}
}


module.exports = {
	request:friendRequest,
	list : friendRequestList,
	accept: friendRequestAccept,
	friends : friendList,
	mutual:mutualFriends
}