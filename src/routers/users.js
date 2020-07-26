const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/users');
const auth = require('../middleware/auth');

const router = express.Router();

//register
router.post('/reg', async (req,res) => {
    //hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password,salt);

    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword
    });
    try{
        await user.save();
        res.send(user);
    }catch(e){
        res.status(400).send(e);
    }
})

//login
router.post('/login', async (req, res) => {
    const user = await User.findOne({email: req.body.email});
    if(!user){
        return res.status(404).send('No such user exists');
    }
    const validPassword = await bcrypt.compare(req.body.password,user.password);
    if(!validPassword){
        return res.status(400).send('Invalid credentials');
    }

    //create token
    const token = jwt.sign({_id:user._id},process.env.JWT_SECRET);
    res.header('auth-token',token).send(token);
});

//how to use
router.get('/', (req,res) => {
    res.send('<p>Refer to <a href="https://documenter.getpostman.com/view/12162568/T1DqfbzQ">Docs</a> on how to use.</p>');
});

router.get('/user/me', auth, async (req,res) => {
    try{
        const user = await User.findOne({_id: req.user._id});
        res.send(user);
    }catch(e){
        res.send(400);
    }
});

//update
router.patch('/user/me',auth,async (req,res) => {
    try{
        const user = await User.findOneAndUpdate({_id: req.user._id},req.body,{new: true});
        res.send(user);
    }catch(e){
        res.send(400);
    }
})

//delete
router.delete('/user/me', auth, async (req,res) => {
    try{
        const user = await User.findOneAndDelete({_id: req.user._id});
        res.send(user);
    }catch(e){
        res.send(500);
    }
});

module.exports=router;