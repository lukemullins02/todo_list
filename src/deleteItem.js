function deleteItem(arr, num) {
  let item = arr.find((item) => item.id === Number(num));
  let place = arr.indexOf(item);
  arr.splice(place, 1);
}

export { deleteItem };

// let item = arr[e.target.dataset.arrIndex].find(
//   (item) => item.id === Number(e.target.dataset.itemId)
// );
// let place = arr[e.target.dataset.arrIndex].indexOf(item);
// arr[e.target.dataset.arrIndex].splice(place, 1);
