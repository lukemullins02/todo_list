import { projects } from "./projects.js";
import { deleteItem } from "./deleteItem.js";
import "./styles.css";

let arr = [];
let i = 0;
let index = 0;

const body = document.querySelector("body");
const btn = document.querySelector("#new-proj");
const div = document.querySelector(".proj-name");
const container = document.querySelector(".container");
const newDiv = document.createElement("div");
newDiv.classList.add("main-area");

btn.textContent = "New Project";

container.appendChild(newDiv);

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
  newTodo.classList.add("new-todo");
  newTodo.textContent = "Create Todo";

  const card_container = document.createElement("div");
  card_container.classList.add("card-container");

  newDiv.appendChild(newTodo);
  newDiv.appendChild(card_container);

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
    const card = document.createElement("div");
    card.classList.add("card");

    delBtn.textContent = "Delete";
    delBtn.classList.add("delete");
    delBtn.dataset.itemId = item.id;
    delBtn.dataset.arrIndex = e.target.dataset.id;
    itemDom.textContent = item.title;

    card.appendChild(itemDom);
    card.appendChild(delBtn);
    card_container.appendChild(card);
    newDiv.appendChild(card_container);
  }
});

newDiv.addEventListener("click", (e) => {
  if (!e.target.classList.contains("delete")) return;

  deleteItem(arr[e.target.dataset.arrIndex], e.target.dataset.itemId);

  const reloadBtn = document.querySelector(
    `button[data-id="${e.target.dataset.arrIndex}"]`
  );
  reloadBtn.click();
});
