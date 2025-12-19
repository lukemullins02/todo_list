function findItem(arr, objId, itemId) {
  let items = arr.find((item) => item.id === objId);
  let place = items.todos.find((item) => item.id === Number(itemId));

  return place;
}

export { findItem };
