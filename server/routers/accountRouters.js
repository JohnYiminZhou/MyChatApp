const express = require('express');
const router = express.Router();
const User = require('../models/User.js');
const getUserName = require('../middleware/userMiddleware');
const getUser = require('../middleware/userMiddleware');

var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
var config = require('../config/config');

/*
    Todo list:
    CRUD
*/

//Create a user, then generate a token.
router.post('/Create', (req, res) =>{
    const {userName, password} = req.body;
    const newUser = new User({
        userName,
        password: bcrypt.hashSync(password, 8)
    })

    try {
        const saveUser = newUser.save();
        const token = jwt.sign({ id: saveUser._id }, config.secret, {
            expiresIn: 86400
        });
        res.status(200).json({ auth: true, token: token});
    } catch(err) {
        res.status(400).json({ message: err.message})
    }

})
//Assume all users have unique name
//Login a user and generate a token
router.post('/Login', async (req, res) =>{
    let user = await User.findOne({'userName': req.body.userName});
    if(!user)
        res.status(400).json({ message: "User Not Exist"});
    
    const isMatch = await bcrypt.compare(req.body.password, user.password);
    if (!isMatch)
        res.status(400).json({message: "Incorrect Password !"});
    else{
        const token = jwt.sign({ id: user._id}, config.secret, {
        expiresIn: 86400
        });
        res.status(200).json({ message: "OK", auth: true, token: token});
    }

})

//Getting all users
router.get('/', async (req, res) => {
    try {
        const allUsers = await User.find()
        res.json(allUsers)
    } catch(err) {
        res.status(500).json({ message: err.message})
    }

})

/*
//Creating a user
router.post('/', (req, res) => {
    //console.log(req.body);
    const {userName, email, password} = req.body;

    const newUser = new User({
        userName,
        email,
        password: bcrypt.hashSync(password, 8)
    })

    try {
        const saveUser = newUser.save();
        const token = jwt.sign({ id: user._id }, config.secret, {
            expiresIn: 86400
        });
        res.status(201).json(req.body);
    } catch(err) {
        res.status(400).json({ message: err.message})
    }

})

//Update an user information
router.put('/update', async (req, res) => {
    let query = req.query.name;
    let newValues = {email: req.body.email};
    await User.updateOne( {userName: query}, newValues);
    
})



//Query user name
router.get('/find', async (req, res) => {
    //console.log(req.query.name);
    let query = req.query.name;
    try {
        const result = await User.find({userName: query});
        res.json(result);

    } catch(err){
        res.status(500).json({message: err.message})
    }

})

//Delete an user by its name
router.delete('/delete', async (req, res) => {
    try {
        //console.log(result[0])
        await User.deleteOne( { userName: req.query.name} );
        res.json( { message: 'Delete.'})
    } catch(err) {
        res.status(500).json({ message: err.message})
    }
})

//Login
router.get('/login', getUser, (req, res) => {
    if(result.length == 0)
        res.status(404).json({ message: 'User does not exist.'});
    else
        res.status(500).json({ message: 'Welcome back.'});
})

//Home page
router.get('/me', (req, res) => {
    const token = req.headers['x-access-token'];
    if (!token) return res.status(401).send({ auth: false, message: 'No token provided.'});

    jwt.verify(token, config.secret, (err, decoded) => {
        if(err) return res.status(500).send({auth: false, message:  'Failed to authenticate token.'});
        res.status(200).send(decoded);
    })
})
*/

module.exports = router;