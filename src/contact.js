function contactPage(div) {
  const phoneNum = document.createElement("p");
  const address = document.createElement("p");
  const contact_cont = document.createElement("div");
  contact_cont.id = "contact_cont";

  phoneNum.textContent = "Phone Number: 111-222-3333";
  address.textContent =
    "Lounging Lasagna\n111 Little Italy\nNew York, New York 11111";
  address.classList.add("address");

  contact_cont.appendChild(phoneNum);
  contact_cont.appendChild(address);
  div.appendChild(contact_cont);
}

export { contactPage };
