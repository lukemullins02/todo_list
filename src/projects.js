import { Todo } from "./todo";

function projects(name, title, priority, id) {
  const todo = new Todo(title, 1, 2, priority, id);
  name.todos.push(todo);
}

export { projects };
