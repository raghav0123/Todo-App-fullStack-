const validateTodo = require('../../middlewares/validateTodo')

describe('ValidateTodo middleware', () => {
    let req,res,next;
    beforeEach(() => {
        req = {
            params: {}
        }
        res = {
            status: jest.fn().mockReturnThis(200),
            json: jest.fn()
        }
        next = jest.fn()
        jest.clearAllMocks();
    })

    test('should return 400 if name is missing', async () => {
        req = {body: {email:'a@gmail.com'}}
        await validateTodo(req,res,next)
        expect(res.status).toHaveBeenCalledWith(400)
        expect(res.json).toHaveBeenCalledWith({
            success: false,
            message: "Name is required!"
        })
    })

    test('should return 400 if description is missing', async () => {
        req = {body: {name:'a@gmail.com'}}
        await validateTodo(req,res,next)
        expect(res.status).toHaveBeenCalledWith(400)
        expect(res.json).toHaveBeenCalledWith({
            success: false,
            message: "Description is required!"
        })
    })

    test('should return 200 and call next() if all perfect', async () => {
        req = {body: 
            {name:'a@gmail.com'
            ,description:'r@gmail.com'
        }
    }
        await validateTodo(req,res,next)
       expect(res.status).not.toHaveBeenCalled()
        expect(res.json).not.toHaveBeenCalled()
       
        expect(next).toHaveBeenCalled();
    })

})
