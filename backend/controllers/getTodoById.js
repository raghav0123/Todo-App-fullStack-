const todoModel = require('../model/todo')
const mongoose = require('mongoose')
const getTodoById = async (req, res) => {
    try {
        const id = req.params.id


        

        const todo = await todoModel.findOne({ _id: id })
        if (!todo) {
            return res.status(404).json({
                success: false,
                message: "Todo not found!"
            })
        }

        return res.status(200).json({
            success: true,
            message: "Todo found!",
            data: todo
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }

}
module.exports = getTodoById