import { Todo, Project } from "./todo";

function createTodo(name, title, description, dueDate, priority, notes, check) {
  const todo = new Todo(title, description, dueDate, priority, notes, check);
  name.todos.push(todo);
}

function createProject(arr, name) {
  const project = new Project(name, [], crypto.randomUUID());
  arr.push(project);
  return project;
}

export { createTodo, createProject };
