function findItem(arr, objId, itemId) {
  let items = arr.find((item) => item.id === objId);
  let place = items.todos.find((item) => item.id === itemId);

  return place;
}

function findProject(arr, id) {
  let proj = arr.find((item) => item.id === id);

  return proj;
}

export { findItem, findProject };
