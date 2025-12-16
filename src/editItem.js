function editItem(
  arr,
  objId,
  itemId,
  newTitle,
  newDescription,
  newDueDate,
  newNotes
) {
  let items = arr.find((item) => item.id === Number(objId));
  let item = items.todos.find((item) => item.id === Number(itemId));
  item.title = newTitle;
  item.description = newDescription;
  item.dueDate = newDueDate;
  item.notes = newNotes;
}

export { editItem };
