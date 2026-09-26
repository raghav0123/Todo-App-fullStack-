//GETALL,GETID,POST,PUT, DELETE 
const express = require('express')
const {postTodo, getAllTodo,getTodoById, deleteTodo, updateTodo, getUserById, signUpUser, loginUser} = require('../controllers/index')
const {validateObjectId, validateTodo,protectRoute, validateUser} = require('../middlewares/index')
const { signUpSchema, loginSchema } = require('../validators/authValidators')
const getAllUser = require('../controllers/getAllUser')
const Router = express.Router()


Router.post('/auth/signup', validateUser(signUpSchema), signUpUser)
Router.post('/auth/login', validateUser(loginSchema),  loginUser)
Router.get('/auth/:id', protectRoute, getUserById)
Router.get('/auth/',getAllUser)
// Router.put('/:id', )


module.exports = Router