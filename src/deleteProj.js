function deleteProj(arr, objId) {
  let proj = arr.find((item) => item.id === Number(objId));
  let index = arr.indexOf(proj);
  arr.splice(index, 1);
}

export { deleteProj };
