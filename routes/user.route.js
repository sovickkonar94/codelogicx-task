const passport = require('passport');
const router = require('express').Router();
const controller = require('../controllers/user.controller');


router.post('/register',controller.register);
router.post('/login',controller.login);
router.get('/list',passport.authenticate('jwt',{session:false}),controller.list);
router.post('/search',passport.authenticate('jwt',{session:false}),controller.search);



module.exports = router;