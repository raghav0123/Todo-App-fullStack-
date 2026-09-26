const userModel = require('../model/user')
const generateToken = require('../utils/generateToken')
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await userModel.findOne({ email });

    // Verify email and password
    if (user && (await user.matchPassword(password))) {
      return res.status(200).json({
        success: true,
        message: 'Logged in successfully',
        data: {
          _id: user._id,
          firstName: user.firstName,
          email: user.email,
          token: generateToken(user._id),
        },
      });
    }

    return res.status(401).json({
      success: false,
      message: 'Invalid email or password',
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};
module.exports = loginUser