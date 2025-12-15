function deleteItem(arr, objId, itemId) {
  let items = arr.find((item) => item.id === Number(objId));
  let place = items.todos.find((item) => item.id === Number(itemId));
  let index = items.todos.indexOf(place);
  items.todos.splice(index, 1);
}

export { deleteItem };
