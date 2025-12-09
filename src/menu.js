import lasagnaImage from "./lasagna.png";
import ravioliImage from "./ravioli.png";
import spaghettiImage from "./spaghetti.jpg";
import meatballsImage from "./meatballs.jpg";

function menuPage(div) {
  let titles = ["Lasagna", "Ravioli", "Spaghetti", "Meatballs"];
  let descs = [
    "Layers of fresh pasta, rich beef ragù, creamy ricotta, and melted mozzarella, baked to perfection in our traditional family recipe.",
    "Handmade pasta pillows filled with seasoned ricotta and herbs, served in your choice of a delicate butter-sage sauce or classic marinara.",
    "Classic al dente spaghetti tossed in our signature slow-simmered tomato sauce, finished with fresh basil and Parmigiano-Reggiano.",
    "Hearty, handcrafted meatballs made from a blend of beef and pork, simmered in our house marinara and served with freshly grated parmesan.",
  ];
  let images = [lasagnaImage, ravioliImage, spaghettiImage, meatballsImage];

  const menu_cont = document.createElement("div");
  menu_cont.id = "menu_cont";

  for (let i = 0; i < titles.length; i++) {
    let card = document.createElement("div");
    let title = document.createElement("p");
    let desc = document.createElement("p");
    let image = document.createElement("img");
    image.src = images[i];
    image.id = "menu-las";
    title.id = "card-title";
    desc.id = "card-desc";
    card.classList.add("card");
    title.innerHTML = titles[i];
    desc.innerHTML = descs[i];
    card.appendChild(title);
    card.appendChild(image);
    card.appendChild(desc);
    menu_cont.appendChild(card);
  }
  div.appendChild(menu_cont);
}

export { menuPage };
