import lasagnaImage from "./lasagna.png";
import "./styles.css";

function homePage(div) {
  const image = document.createElement("img");
  const heading = document.createElement("h1");
  const description = document.createElement("p");
  const home_cont = document.createElement("div");

  home_cont.id = "home_cont";
  image.src = lasagnaImage;
  image.id = "lasagna";
  heading.textContent = "Welcome to our Restaurant";
  heading.id = "welcome";
  description.textContent =
    "A family-own business started by our founder Luigi Pizzaballa, whom came to the New World in the late 1880's. Our Michelin Star rated restaurant offers a wide variety of Italian Cusines such as Lasagna, Spaghetti, Meatballs, Ravioli, and more. Enjoy our wine that is made from the vines of Florence, that is then packed and shipped directly to our restaurant. We hope you will enjoy the decorum inside that gives an authentic italian feel. Also, we cater for big events such as weddings, funerals, business outings, and more! We hope you enjoy your time at our little slice of the motherland.";
  description.id = "rest-desc";

  home_cont.appendChild(image);
  home_cont.appendChild(heading);
  home_cont.appendChild(description);
  div.appendChild(home_cont);
}

export { homePage };
