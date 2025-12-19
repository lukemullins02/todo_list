class Todo {
  static id = 0;
  constructor(title, description, dueDate, priority, notes, check) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.notes = notes;
    this.check = check;

    this.id = Todo.id;
    Todo.id = Todo.id + 1;
  }
}

class Project {
  constructor(name, todos, id) {
    this.name = name;
    this.todos = todos;
    this.id = id;
  }
}

export { Todo, Project };
