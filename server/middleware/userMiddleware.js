const User = require('../models/User.js');

//Query user name
const getUserName = async (req, res, next) => {
    try {
        let query = { userName: req.body.userName };
        let result = await User.find( query ); //find() return array
    }
    catch(err){
        return res.status(500).json({ message: err.message})
    }
    next();
}


const getUser = async (req, res, next) => {
    try{
        let currentUser = { userName: req.body.userName, password: req.body.password};
        result = await User.find( currentUser);

    }
    catch(err) {
        return res.status(500).json({ message: err.message});
    }
    res.result = result;
    next();
}


module.exports = getUserName
module.exports = getUser
