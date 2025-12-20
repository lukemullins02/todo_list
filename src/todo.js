class Todo {
  constructor(title, description, dueDate, priority, notes, check, id) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.notes = notes;
    this.check = check;
    this.id = id;
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
