const express = require('express');
const router = express.Router();
const User = require('../models/User.js');
const getUserName = require('../middleware/userMiddleware');
const getUser = require('../middleware/userMiddleware');

//Creating one user
router.post('/', (req, res) => {
    //console.log(req.body);
    const {userName, email, password} = req.body;

    const newUser = new User({
        userName,
        email,
        password
    })

    try {
        const saveUser = newUser.save()
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

//Getting all users
router.get('/', async (req, res) => {
    try {
        const allUsers = await User.find()
        res.json(allUsers)
    } catch(err) {
        res.status(500).json({ message: err.message})
    }

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

module.exports = router;