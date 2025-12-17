function findProject(arr, id) {
  let proj = arr.find((item) => item.id === Number(id));

  return proj;
}

export { findProject };
