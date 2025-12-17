function priority(item) {
  if (item.priority === "Low") {
    item.priority = "High";
  } else {
    item.priority = "Low";
  }
}

export { priority };
