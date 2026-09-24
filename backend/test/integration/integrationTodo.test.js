const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../../app');
const todoModel = require('../../model/todo');
// require('dotenv').config()
const MONGO_URI="mongodb+srv://admin:admin123@cluster1.39vfdga.mongodb.net/todo-app?appName=Cluster1"
// Local MongoDB test database connection
const TEST_DB_URI = MONGO_URI;

beforeAll(async () => {
  if (mongoose.connection.readyState !== 0) {
    await mongoose.disconnect();
  }
  await mongoose.connect(TEST_DB_URI);
}, 60000);

beforeEach(async () => {
  await todoModel.deleteMany({});
});

afterAll(async () => {
  await todoModel.deleteMany({});
  await mongoose.disconnect();
},60000);

describe('Todo Integration Tests (Real DB Execution)', () => {
  it('should actually save and retrieve a todo from MongoDB', async () => {
    const newTodo = {
      name: 'Integration Task',
      description: 'Testing actual DB persistence'
    };

    const res = await request(app).post('/todos').send(newTodo);

    expect(res.status).toBe(201);
    
    const savedTodo = await todoModel.findById(res.body.data._id);
    expect(savedTodo).not.toBeNull();
    expect(savedTodo.name).toBe('Integration Task');
  });
});