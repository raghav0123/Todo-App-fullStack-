const todoModel = require('../model/todo')
const postTodo = async (req, res) => {
    try {
        const data = req.body
       
        const todo = await todoModel.create(data)
        res.status(201).json({
            success: true,
            message:"user created successfully",
            data: todo
        })
        
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }


}
module.exports = postTodo