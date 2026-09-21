const todoModel = require('../model/todo');
const todoDto = require('../dtos/todoDto'); // Renamed to TodoDto for clarity

const getAllTodo = async (req, res) => {
  try {
    const todos = await todoModel.find();

    const formattedTodos = todos.map((todo) => new todoDto(todo));

    return res.status(200).json({
      success: true,
      count: formattedTodos.length,
      data: formattedTodos
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

module.exports = getAllTodo;