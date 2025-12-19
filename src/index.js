import { createTodo, createProject } from "./projects.js";
import { deleteItem } from "./deleteItem.js";
import { deleteProj } from "./deleteProj.js";
import { editItem } from "./editItem.js";
import { findItem } from "./findItem.js";
import { findProject } from "./findProject.js";
import { check } from "./check.js";
import { priority } from "./priority.js";
import "./styles.css";

let arr = [];

const dialog = document.querySelector("#dialog-proj");
const showProj = document.querySelector("#new-proj");
const projInfo = document.querySelector(".proj-info");
const div = document.querySelector(".proj-name");
const container = document.querySelector(".container");
const newDiv = document.querySelector(".main-area");

const dialogItem = document.querySelector("#dialog-item");
const itemInfo = document.querySelector(".item-info");
showProj.textContent = "New Project";

const dialogEdit = document.querySelector("#dialog-edit");
const editInfo = document.querySelector(".edit-info");

container.appendChild(newDiv);

showProj.addEventListener("click", () => {
  dialog.showModal();
});

Object.keys(localStorage).forEach((key) => {
  const value = localStorage.getItem(key);
  const curProj = JSON.parse(value);
  arr.push(curProj);
  const holdBtn = document.createElement("div");
  const projBtn = document.createElement("button");
  const projDel = document.createElement("button");
  holdBtn.classList.add("proj-container");
  projBtn.classList.add("projects");
  projDel.classList.add("del-proj");
  projDel.textContent = "X";
  projDel.dataset.id = curProj.id;
  projBtn.textContent = `${curProj.name}`;
  projBtn.dataset.id = curProj.id;
  holdBtn.dataset.id = curProj.id;
  holdBtn.appendChild(projBtn);
  holdBtn.appendChild(projDel);
  div.appendChild(holdBtn);
});

projInfo.addEventListener("submit", (e) => {
  e.preventDefault();
  dialog.close();
  const holdBtn = document.createElement("div");
  const projBtn = document.createElement("button");
  const projDel = document.createElement("button");
  const projFormData = new FormData(projInfo);
  let newProj = createProject(arr, projFormData.get("title"));
  localStorage.setItem(newProj.id, JSON.stringify(newProj));
  holdBtn.classList.add("proj-container");
  projBtn.classList.add("projects");
  projDel.classList.add("del-proj");
  projDel.textContent = "X";
  projDel.dataset.id = newProj.id;
  projBtn.textContent = `${newProj.name}`;
  projBtn.dataset.id = newProj.id;
  holdBtn.dataset.id = newProj.id;
  holdBtn.appendChild(projBtn);
  holdBtn.appendChild(projDel);
  div.appendChild(holdBtn);
});

div.addEventListener("click", (e) => {
  if (!e.target.classList.contains("del-proj")) return;
  deleteProj(arr, e.target.dataset.id);
  localStorage.removeItem(e.target.dataset.id);

  const proj = document.querySelector(`div[data-id="${e.target.dataset.id}"]`);

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
  itemInfo.dataset.id = e.target.dataset.id;

  newDiv.appendChild(newTodo);

  newTodo.addEventListener("click", () => {
    dialogItem.showModal();
  });

  const card_container = document.createElement("div");
  card_container.classList.add("card-container");

  let proj = findProject(arr, e.target.dataset.id);

  console.log(e.target.dataset.id, arr);

  let length = proj.todos.length;

  for (let i = 0; i < length; i++) {
    const item = proj;
    const itemDom = document.createElement("p");
    const dateDom = document.createElement("p");
    const delBtn = document.createElement("button");
    const editBtn = document.createElement("button");
    const changeBtn = document.createElement("button");
    const checkInput = document.createElement("input");
    const checkLabel = document.createElement("label");
    const top_card = document.createElement("div");
    const bottom_card = document.createElement("div");
    const checkDom = document.createElement("div");

    top_card.classList.add("top-card");
    bottom_card.classList.add("bottom-card");

    const card = document.createElement("div");
    card.classList.add("card");
    card.dataset.itemId = item.todos[i].id;
    card.dataset.objId = item.id;

    if (item.todos[i].priority === "High") {
      card.classList.add("priority-high");
    } else {
      card.classList.add("priority-low");
    }

    checkInput.setAttribute("type", "checkbox");
    checkInput.setAttribute("id", "check");
    checkInput.setAttribute("name", "check");
    checkInput.setAttribute("value", "yes");
    checkInput.dataset.itemId = item.todos[i].id;
    checkInput.dataset.objId = item.id;
    checkInput.dataset.reload = e.target.dataset.id;
    checkInput.classList.add("check-input");

    checkLabel.setAttribute("for", "check");
    checkLabel.textContent = "Finished:";

    changeBtn.textContent = item.todos[i].priority;
    changeBtn.classList.add("change-priority");
    changeBtn.dataset.itemId = item.todos[i].id;
    changeBtn.dataset.objId = item.id;
    changeBtn.dataset.reload = e.target.dataset.id;

    delBtn.textContent = "Delete";
    delBtn.classList.add("delete");
    delBtn.dataset.itemId = item.todos[i].id;
    delBtn.dataset.objId = item.id;
    delBtn.dataset.reload = e.target.dataset.id;

    editBtn.textContent = "Edit/Details";
    editBtn.classList.add("edit");
    editBtn.dataset.itemId = item.todos[i].id;
    editBtn.dataset.objId = item.id;
    editBtn.dataset.reload = e.target.dataset.id;

    itemDom.textContent = item.todos[i].title;
    checkInput.checked = item.todos[i].check;
    dateDom.textContent = item.todos[i].dueDate;

    top_card.appendChild(itemDom);
    top_card.appendChild(dateDom);
    checkDom.appendChild(checkLabel);
    checkDom.appendChild(checkInput);
    top_card.appendChild(checkDom);
    bottom_card.appendChild(delBtn);
    bottom_card.appendChild(editBtn);
    bottom_card.appendChild(changeBtn);
    card.appendChild(top_card);
    card.appendChild(bottom_card);

    card_container.appendChild(card);
    newDiv.appendChild(card_container);
  }
});

itemInfo.addEventListener("submit", (e) => {
  e.preventDefault();
  dialogItem.close();

  const newItem = new FormData(itemInfo);

  let proj = findProject(arr, e.target.dataset.id);

  createTodo(
    proj,
    newItem.get("title"),
    newItem.get("description"),
    newItem.get("duedate"),
    newItem.get("priority"),
    newItem.get("notes"),
    false
  );

  localStorage.setItem(proj.id, JSON.stringify(proj));

  const projFolder = document.querySelector(
    `button[data-id="${e.target.dataset.id}"]`
  );

  projFolder.click();
});

newDiv.addEventListener("click", (e) => {
  if (!e.target.classList.contains("delete")) return;

  deleteItem(arr, e.target.dataset.objId, e.target.dataset.itemId);

  let proj = findProject(arr, e.target.dataset.objId, e.target.dataset.itemId);

  localStorage.setItem(proj.id, JSON.stringify(proj));

  const reloadBtn = document.querySelector(
    `button[data-id="${e.target.dataset.reload}"]`
  );
  reloadBtn.click();
});

newDiv.addEventListener("click", (e) => {
  if (!e.target.classList.contains("edit")) return;

  editInfo.dataset.itemId = e.target.dataset.itemId;
  editInfo.dataset.objId = e.target.dataset.objId;
  editInfo.dataset.reload = e.target.dataset.reload;

  let todoItem = findItem(arr, e.target.dataset.objId, e.target.dataset.itemId);

  const editTitle = document.querySelector(".edit-title");
  const editDescription = document.querySelector(".edit-description");
  const editDueDate = document.querySelector(".edit-duedate");
  const editNotes = document.querySelector(".edit-notes");

  console.log(todoItem);

  editTitle.value = todoItem.title;
  editDescription.value = todoItem.description;
  editDueDate.value = todoItem.dueDate;
  editNotes.value = todoItem.notes;

  dialogEdit.showModal();
});

editInfo.addEventListener("submit", (e) => {
  e.preventDefault();
  dialogEdit.close();

  const editTodo = new FormData(editInfo);

  editItem(
    arr,
    e.target.dataset.objId,
    e.target.dataset.itemId,
    editTodo.get("title"),
    editTodo.get("description"),
    editTodo.get("duedate"),
    editTodo.get("notes")
  );

  const projFolder = document.querySelector(
    `button[data-id="${e.target.dataset.reload}"]`
  );

  projFolder.click();
});

newDiv.addEventListener("click", (e) => {
  if (!e.target.classList.contains("change-priority")) return;

  let todoItem = findItem(arr, e.target.dataset.objId, e.target.dataset.itemId);

  priority(todoItem);

  const cardItem = document.querySelector(
    `div[data-item-id="${e.target.dataset.itemId}"][data-obj-id="${e.target.dataset.objId}"]`
  );

  const projFolder = document.querySelector(
    `button[data-id="${e.target.dataset.reload}"]`
  );

  projFolder.click();
});

newDiv.addEventListener("click", (e) => {
  if (!e.target.classList.contains("check-input")) return;

  let todoItem = findItem(arr, e.target.dataset.objId, e.target.dataset.itemId);

  check(e.target.checked, todoItem);

  const projFolder = document.querySelector(
    `button[data-id="${e.target.dataset.reload}"]`
  );

  projFolder.click();
});
