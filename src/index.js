import { projects } from "./projects.js";
import { deleteItem } from "./deleteItem.js";
import { deleteProj } from "./deleteProj.js";
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
  const projBtn = document.createElement("button");
  const projDel = document.createElement("button");
  projBtn.classList.add("projects");
  projDel.classList.add("del-proj");
  projDel.textContent = "Delete Project";
  projDel.dataset.id = i;
  projBtn.textContent = name;
  projBtn.dataset.id = i;
  arr.push({ id: i, todos: [] });
  i++;
  div.appendChild(projBtn);
  div.appendChild(projDel);
});

div.addEventListener("click", (e) => {
  if (!e.target.classList.contains("del-proj")) return;
  deleteProj(arr, e.target.dataset.id);

  const proj = document.querySelector(
    `button[data-id="${e.target.dataset.id}"]`
  );

  let child = newDiv.lastElementChild;
  while (child) {
    newDiv.removeChild(child);
    child = newDiv.lastElementChild;
  }

  proj.remove();
  e.target.remove();
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

  let proj = arr.find((item) => item.id === Number(e.target.dataset.id));
  let length = proj.todos.length;

  newTodo.addEventListener("click", () => {
    let title = prompt("Enter title");
    let priority = prompt("Enter priority");
    projects(proj, title, priority, index);
    index++;
    e.target.click();
  });

  for (let i = 0; i < length; i++) {
    const item = proj;
    const itemDom = document.createElement("p");
    const delBtn = document.createElement("button");
    const card = document.createElement("div");
    card.classList.add("card");
    delBtn.textContent = "Delete";
    delBtn.classList.add("delete");
    delBtn.dataset.itemId = item.todos[i].id;
    delBtn.dataset.objId = item.id;
    delBtn.dataset.reload = e.target.dataset.id;
    itemDom.textContent = item.todos[i].title;

    card.appendChild(itemDom);
    card.appendChild(delBtn);
    card_container.appendChild(card);
    newDiv.appendChild(card_container);
  }
});

newDiv.addEventListener("click", (e) => {
  if (!e.target.classList.contains("delete")) return;

  console.log(e.target.dataset.itemId);
  deleteItem(arr, e.target.dataset.objId, e.target.dataset.itemId);

  const reloadBtn = document.querySelector(
    `button[data-id="${e.target.dataset.reload}"]`
  );
  reloadBtn.click();
});
