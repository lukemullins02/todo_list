function priority(item) {
  if (item.priority === "low") {
    item.priority = "high";
  } else {
    item.priority = "low";
  }
}

export { priority };
