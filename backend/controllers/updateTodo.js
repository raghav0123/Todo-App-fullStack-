const todoModel = require('../model/todo');

const updateTodo = async (req, res) => {
    try {
        const { id } = req.params;

        // 1. Find and update document in MongoDB
        const updatedTodo = await todoModel.findByIdAndUpdate(
            id,
            req.body,
            { 
                new: true,          // Returns the modified document rather than the original
                runValidators: true // Enforces Mongoose schema validation rules during update
            }
        );

        // 2. Check if the document existed
        if (!updatedTodo) {
            return res.status(404).json({
                success: false,
                message: "Todo not found!"
            });
        }

        // 3. Return success response with updated document
        return res.status(200).json({
            success: true,
            message: "Todo updated successfully!",
            data: updatedTodo
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

module.exports = updateTodo;