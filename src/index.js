import { projects } from "./projects.js";

let arr = [];
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
  const btn = document.createElement("button");
  btn.classList.add("yo");
  btn.textContent = name;
  btn.dataset.id = i;
  i++;
  div.appendChild(btn);
  arr.push([]);
});

div.addEventListener("click", (e) => {
  if (!e.target.classList.contains("yo")) return;

  let title = prompt("Enter title");
  let priority = prompt("Enter priority");
  projects(arr[e.target.dataset.id], title, priority);

  let child = newDiv.lastElementChild;
  while (child) {
    newDiv.removeChild(child);
    child = newDiv.lastElementChild;
  }

  for (let i = 0; i < arr[e.target.dataset.id].length; i++) {
    const item = arr[e.target.dataset.id][i];
    const itemDom = document.createElement("p");
    itemDom.textContent = item.title;
    newDiv.appendChild(itemDom);
  }
});
