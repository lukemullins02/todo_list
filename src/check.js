function check(checkInput, item) {
  if (checkInput) {
    item.check = true;
  } else {
    item.check = false;
  }
}

export { check };
