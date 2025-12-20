function store(id, string) {
  localStorage.setItem(id, string);
}

function getStore(key) {
  const value = localStorage.getItem(key);
  const curProj = JSON.parse(value);
  return curProj;
}

export { store, getStore };
