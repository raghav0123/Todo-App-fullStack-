const userModel = require('../model/user')
const userDto = require('../dtos/userDto')
const getUserById = (req, res) => {
    try {
        const id = req.params.id
        const user = userModel.findOne({_id: id});
        return res.status(200).json({
            success: true,
            message: "all users fetched.",
            data: new userDto(user)
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        })       
    }
}
module.exports = getUserById