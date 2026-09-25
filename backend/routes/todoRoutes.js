//GETALL,GETID,POST,PUT, DELETE 
const express = require('express')
const {postTodo, getAllTodo,getTodoById, deleteTodo, updateTodo} = require('../controllers/index')
const {validateObjectId, validateTodo} = require('../middlewares/index')
const Router = express.Router()

Router.get('/',getAllTodo)
Router.get('/:id',validateObjectId, getTodoById)
Router.post('/',validateTodo, postTodo)
Router.delete('/:id', validateObjectId, deleteTodo)
Router.put('/:id', validateObjectId, updateTodo )
// Router.put('/:id', )


module.exports = Router