function deleteItem(arr, objId, itemId) {
  let items = arr.find((item) => item.id === Number(objId));
  let place = items.todos.find((item) => item.id === Number(itemId));
  let index = items.todos.indexOf(place);
  items.todos.splice(index, 1);
}

export { deleteItem };

// let item = arr[e.target.dataset.arrIndex].find(
//   (item) => item.id === Number(e.target.dataset.itemId)
// );
// let place = arr[e.target.dataset.arrIndex].indexOf(item);
// arr[e.target.dataset.arrIndex].splice(place, 1);
