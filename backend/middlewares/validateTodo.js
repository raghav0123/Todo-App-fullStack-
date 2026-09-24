

const validateTodo = (req,res,next) => {
    
    const data = req.body
    
    if (!data.name) {
        return res.status(400).json({
            success: false,
            message: "Name is required!"
        })
    }
     else if (!data.description) {
        return res.status(400).json({
            success: false,
            message: "Description is required!"
        })
    }
    
    next();
     

}
module.exports = validateTodo