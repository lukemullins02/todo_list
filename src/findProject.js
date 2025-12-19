function findProject(arr, id) {
  let proj = arr.find((item) => item.id === id);

  return proj;
}

export { findProject };
