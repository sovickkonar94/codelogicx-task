const router = require('express').Router();
const userRoute = require('./user.route');
const requestRouter = require('./request.route');

router.get('/',(req,res)=>{
	res.status(200).json({
		message:'server is up and running'
	})
})



router.use('/user',userRoute);
router.use('/friend',requestRouter);

module.exports = router