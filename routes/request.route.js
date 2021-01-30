const router = require('express').Router();
const passport = require('passport');
const controller = require('../controllers/friend.controller');


router.post('/request',passport.authenticate('jwt',{session:false}),controller.request);

router.get('/requestreceived',passport.authenticate('jwt',{session:false}),controller.list);

router.post('/accept',passport.authenticate('jwt',{session:false}),controller.accept);

router.get('/list',passport.authenticate('jwt',{session:false}),controller.friends);

router.get('/mutual/:id',passport.authenticate('jwt',{session:false}),controller.mutual);


module.exports = router;