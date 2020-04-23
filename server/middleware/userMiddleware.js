const User = require('../models/User.js');

//Find user by ...
const getUserName = async (req, res, next) => {
    try {

        let query = req.query.name;

        result = await User.find( { userName: query } ); //find() return array
        
        if (result.length == 0)
            return res.status(404).json({ message: 'User does not exist.'})
        
    }
    catch(err){
        return res.status(500).json({ message: err.message})
    }
    res.result = result;
    next();
}

module.exports = getUserName
