const userModel = require('../model/user')
const generateToken = require('../utils/generateToken')
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await userModel.findOne({ email });
    const result = await user.matchPassword(password)
    console.log("this is matcher function", result)
    // Verify email and password
    if (user && (await user.matchPassword(password))) {
      return res.status(200).json({
        success: true,
        message: 'Logged in successfully',
        data: {
          _id: user._id,
          name: user.name,
          email: user.email,
          token: generateToken(user._id),
        },
      });
    }

    return res.status(401).json({
      success: false,
      message: 'User does not exist!',
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};
module.exports = loginUser