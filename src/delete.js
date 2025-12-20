function deleteItem(arr, objId, itemId) {
  let items = arr.find((item) => item.id === objId);
  let place = items.todos.find((item) => item.id === itemId);
  let index = items.todos.indexOf(place);
  items.todos.splice(index, 1);
}

function deleteProj(arr, objId) {
  let proj = arr.find((item) => item.id === objId);
  let index = arr.indexOf(proj);
  arr.splice(index, 1);
}

export { deleteItem, deleteProj };
