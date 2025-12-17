import { Todo } from "./todo";

function projects(
  name,
  title,
  description,
  dueDate,
  priority,
  notes,
  check,
  id
) {
  const todo = new Todo(
    title,
    description,
    dueDate,
    priority,
    notes,
    check,
    id
  );
  name.todos.push(todo);
}

export { projects };
