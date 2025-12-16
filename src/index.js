import { projects } from "./projects.js";
import { deleteItem } from "./deleteItem.js";
import { deleteProj } from "./deleteProj.js";
import { editItem } from "./editItem.js";
import "./styles.css";

let arr = [];
let i = 0;
let index = 0;

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

projInfo.addEventListener("submit", (e) => {
  e.preventDefault();
  dialog.close();
  const projBtn = document.createElement("button");
  const projDel = document.createElement("button");
  const newProj = new FormData(projInfo);
  projBtn.classList.add("projects");
  projDel.classList.add("del-proj");
  projDel.textContent = "Delete Project";
  projDel.dataset.id = i;
  projBtn.textContent = newProj.get("title");
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
  itemInfo.dataset.id = e.target.dataset.id;

  newDiv.appendChild(newTodo);

  newTodo.addEventListener("click", () => {
    dialogItem.showModal();
  });

  const card_container = document.createElement("div");
  card_container.classList.add("card-container");

  let proj = arr.find((item) => item.id === Number(e.target.dataset.id));
  let length = proj.todos.length;

  for (let i = 0; i < length; i++) {
    const item = proj;
    const itemDom = document.createElement("p");
    const priorityDom = document.createElement("p");
    const delBtn = document.createElement("button");
    const editBtn = document.createElement("button");
    const changeBtn = document.createElement("button");

    const card = document.createElement("div");
    card.classList.add("card");
    changeBtn.textContent = "Change Priority";
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
    priorityDom.textContent = item.todos[i].priority;

    card.appendChild(itemDom);
    card.appendChild(priorityDom);
    card.appendChild(delBtn);
    card.appendChild(editBtn);
    card.appendChild(changeBtn);
    card_container.appendChild(card);
    newDiv.appendChild(card_container);
  }
});

itemInfo.addEventListener("submit", (e) => {
  e.preventDefault();
  dialogItem.close();

  const newItem = new FormData(itemInfo);
  let proj = arr.find((item) => item.id === Number(e.target.dataset.id));
  projects(
    proj,
    newItem.get("title"),
    newItem.get("description"),
    newItem.get("duedate"),
    newItem.get("priority"),
    newItem.get("notes"),
    index
  );
  index++;

  const projFolder = document.querySelector(
    `button[data-id="${e.target.dataset.id}"]`
  );

  projFolder.click();
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

newDiv.addEventListener("click", (e) => {
  if (!e.target.classList.contains("edit")) return;

  editInfo.dataset.itemId = e.target.dataset.itemId;
  editInfo.dataset.objId = e.target.dataset.objId;
  editInfo.dataset.reload = e.target.dataset.reload;

  let items = arr.find((item) => item.id === Number(e.target.dataset.objId));
  let place = items.todos.find(
    (item) => item.id === Number(e.target.dataset.itemId)
  );

  const editTitle = document.querySelector(".edit-title");
  const editDescription = document.querySelector(".edit-description");
  const editDueDate = document.querySelector(".edit-duedate");
  const editNotes = document.querySelector(".edit-notes");

  editTitle.value = place.title;
  editDescription.value = place.description;
  editDueDate.value = place.dueDate;
  editNotes.value = place.notes;

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
    editTodo.get("priority"),
    editTodo.get("notes")
  );

  const projFolder = document.querySelector(
    `button[data-id="${e.target.dataset.reload}"]`
  );

  projFolder.click();
});

newDiv.addEventListener("click", (e) => {
  if (!e.target.classList.contains("change-priority")) return;

  let items = arr.find((item) => item.id === Number(e.target.dataset.objId));
  let place = items.todos.find(
    (item) => item.id === Number(e.target.dataset.itemId)
  );

  if (place.priority === "low") {
    place.priority = "high";
  } else {
    place.priority = "low";
  }

  const projFolder = document.querySelector(
    `button[data-id="${e.target.dataset.reload}"]`
  );

  projFolder.click();
});
