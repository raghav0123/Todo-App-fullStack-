//GETALL,GETID,POST,PUT, DELETE 
const express = require('express')
const {postTodo, getAllTodo,getTodoById, deleteTodo} = require('../controllers/index')
const {validateObjectId, validateTodo} = require('../middlewares/index')
const Router = express.Router()

Router.get('/',getAllTodo)
Router.get('/:id',validateObjectId, getTodoById)
Router.post('/',validateTodo, postTodo)
Router.delete('/:id', validateObjectId, deleteTodo)
// Router.put('/:id', )
// Router.get('/',)

module.exports = Router