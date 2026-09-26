const userModel = require('../model/user')
const getAllUser = async (req, res) => {
    try {
        const allUsers = await userModel.find();
        return res.status(200).json({
            success: true,
            message: "all users fetched.",
            data: allUsers
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error
        })       
    }
}
module.exports = getAllUser