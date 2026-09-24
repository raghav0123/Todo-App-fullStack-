const todoModel = require("../model/todo");
const getAllTodo = require("../controllers/getAllTodo");
const todoDto = require("../dtos/todoDto")
// Mock the Mongoose model
jest.mock("../model/todo");

describe("getAllTodo Unit Test", () => {
  let req, res;

  beforeEach(() => {
    req = {}; // getAllTodo doesn't rely on req params or body

    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    jest.clearAllMocks();
  });

  it("should return 200 and a list of mapped todos", async () => {
     
    const mockTodoList = [
      {
        _id: "6512345678901234567890ab",
        name: "First Task",
        description:'new',
        isCompleted: false,
        createdAt: '11-02-2002'
       
      },
      {
        _id: "6512345678901234567890asdasdb",
        name: "First Taskasd",
        description:'newda',
        isCompleted: false,
        createdAt: '11-02-2003'
        
      },
    ];
    const formattedTodos = mockTodoList.map((todo) => new todoDto(todo));
    todoModel.find.mockResolvedValue(mockTodoList);

    await getAllTodo(req, res);

    expect(todoModel.find).toHaveBeenCalledTimes(1);
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({
      success: true,
      count: formattedTodos.length,
      data: formattedTodos 
    });
  });

  it("should return 500 when database throws an error", async () => {
    const errorMessage = "Failed to fetch from database";
    todoModel.find.mockRejectedValue(new Error(errorMessage));

    await getAllTodo(req, res);

    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({
      success: false,
      message: errorMessage,
    });
  });
});