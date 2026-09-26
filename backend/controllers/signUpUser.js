const userModel = require('../model/user')
const generateToken = require('../utils/generateToken')
const signUpUser = async (req,res) => {
try {
    const {name,email,password} = req.body
   
    if (!name || !email || !password) {
        return res.status(400).json({
            success:false,
            message: "Data fields missing!"
        })
    }
    const exist = await userModel.findOne({email})
    if (exist) {
        return res.status(409).json({
            success:false,
            message: 'User with this email already exists!'
        })
    }
    const newUser = await userModel.create({name,email,password})
    return res.status(201).json({
        success:true,
        message: 'new user created!',
        data: {
    _id: newUser._id,
    name: newUser.name,
    email: newUser.email,
    token: generateToken(newUser._id)
  }
    })
} catch (error) {
    return res.status(500).json({
        success: false,
        error: error.message
    })
    
}
}

module.exports = signUpUser