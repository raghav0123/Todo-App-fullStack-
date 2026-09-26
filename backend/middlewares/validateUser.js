// middleware/validate.js
const validateUser = (schema) => (req, res, next) => {
    try {
        schema.parse(req.body); // Parses according to the passed schema
        next();
    } catch (error) {
        return res.status(400).json({
            success: false,
            message: 'Validation failed',
            errors: error.issues.map((err) => err.message),
        });
    }
};

module.exports = validateUser;