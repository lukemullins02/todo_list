import { projects } from "./projects.js";

let arr = [];
let i = 0;
let index = 0;

const body = document.querySelector("body");
const div = document.createElement("div");
const btn = document.createElement("button");
const newDiv = document.createElement("div");

btn.textContent = "New Project";
body.appendChild(btn);
body.appendChild(div);
body.appendChild(newDiv);

btn.addEventListener("click", () => {
  let name = prompt("Enter project name");
  const btn = document.createElement("button");
  btn.classList.add("projects");
  btn.textContent = name;
  btn.dataset.id = i;
  i++;
  div.appendChild(btn);
  arr.push([]);
});

div.addEventListener("click", (e) => {
  if (!e.target.classList.contains("projects")) return;

  let child = newDiv.lastElementChild;
  while (child) {
    newDiv.removeChild(child);
    child = newDiv.lastElementChild;
  }

  const newTodo = document.createElement("button");
  newTodo.textContent = "Create Todo";

  newDiv.appendChild(newTodo);

  newTodo.addEventListener("click", () => {
    let title = prompt("Enter title");
    let priority = prompt("Enter priority");
    projects(arr[e.target.dataset.id], title, priority, index);
    index++;
    e.target.click();
  });

  for (let i = 0; i < arr[e.target.dataset.id].length; i++) {
    const item = arr[e.target.dataset.id][i];
    const itemDom = document.createElement("p");
    const delBtn = document.createElement("button");
    delBtn.textContent = "Delete";
    delBtn.classList.add("delete");
    delBtn.dataset.itemId = item.id;
    delBtn.dataset.arrIndex = e.target.dataset.id;
    itemDom.textContent = item.title;
    newDiv.appendChild(itemDom);
    newDiv.appendChild(delBtn);
  }
});

newDiv.addEventListener("click", (e) => {
  if (!e.target.classList.contains("delete")) return;

  let item = arr[e.target.dataset.arrIndex].find(
    (item) => item.id === Number(e.target.dataset.itemId)
  );
  let place = arr[e.target.dataset.arrIndex].indexOf(item);
  arr[e.target.dataset.arrIndex].splice(place, 1);

  const reloadBtn = document.querySelector(
    `button[data-id="${e.target.dataset.arrIndex}"]`
  );
  reloadBtn.click();
});
