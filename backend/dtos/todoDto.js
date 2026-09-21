class TodoDto {
  constructor(todo) {
    this.id = todo._id;                  // Convert _id to id
    this.name = todo.name;
    this.description = todo.description;
    this.isCompleted = todo.isCompleted;
    this.createdAt = todo.createdAt;
  }
}

module.exports = TodoDto;