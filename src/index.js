import { projects } from "./projects.js";

let arr = [];
let x = [];
let i = 0;

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
  let title = prompt("Enter todo title");
  const btn = document.createElement("button");
  btn.classList.add("yo");
  btn.textContent = name;
  btn.dataset.id = i;
  div.appendChild(btn);
  projects(x, title, i);
  i++;
});

div.addEventListener("click", (e) => {
  if (!e.target.classList.contains("yo")) return;

  let child = newDiv.lastElementChild;
  while (child) {
    newDiv.removeChild(child);
    child = newDiv.lastElementChild;
  }

  const item = x.find((item) => item.priority === Number(e.target.dataset.id));
  const itemDom = document.createElement("p");
  itemDom.textContent = item.title;
  newDiv.appendChild(itemDom);
});
