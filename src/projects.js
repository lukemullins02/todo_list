import { Todo } from "./todo";

function projects(name, title, num) {
  const todo = new Todo(title, 1, 2, num);
  name.push(todo);
}

export { projects };
