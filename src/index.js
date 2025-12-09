import { homePage } from "./home.js";
import { menuPage } from "./menu.js";
import { contactPage } from "./contact.js";

const curPage = document.querySelector("#content");
const homeBtn = document.querySelector("#home");
const menuBtn = document.querySelector("#menu");
const contactBtn = document.querySelector("#contact");

homeBtn.addEventListener("click", () => {
  let child = curPage.lastElementChild;
  while (child) {
    curPage.removeChild(child);
    child = curPage.lastElementChild;
  }
  homePage(curPage);
});

menuBtn.addEventListener("click", () => {
  let child = curPage.lastElementChild;
  while (child) {
    curPage.removeChild(child);
    child = curPage.lastElementChild;
  }
  menuPage(curPage);
});

contactBtn.addEventListener("click", () => {
  let child = curPage.lastElementChild;
  while (child) {
    curPage.removeChild(child);
    child = curPage.lastElementChild;
  }
  contactPage(curPage);
});

homeBtn.click();
