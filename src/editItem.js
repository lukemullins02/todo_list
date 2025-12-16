function editItem(arr, objId, itemId, newTitle) {
  let items = arr.find((item) => item.id === Number(objId));
  let item = items.todos.find((item) => item.id === Number(itemId));
  item.title = newTitle;
  console.log(item);
}

export { editItem };
