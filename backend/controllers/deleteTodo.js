const todoModel = require('../model/todo');

const deleteTodo = async (req, res) => {
    try {
        const { id } = req.params;

        // 1. Delete the document from MongoDB
        const deletedTodo = await todoModel.findByIdAndDelete(id);

        // 2. Check if the document existed
        if (!deletedTodo) {
            return res.status(404).json({
                success: false,
                message: "Todo not found!"
            });
        }

        // 3. Return success response with deleted item data (or empty data)
        return res.status(200).json({
            success: true,
            message: "Todo deleted successfully!",
            data: deletedTodo
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

module.exports = deleteTodo;