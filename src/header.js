function renderLogo($header) {
  const $logo = document.createElement("div");
  $logo.classList.add("logo");
  const $logoTitle = document.createElement("h1");
  $logoTitle.innerText = "Pizzeria TOP";
  const $logoIcon = document.createElement("i");
  $logoIcon.classList.add("fas", "fa-pizza-slice", "fa-lg");
  $logo.appendChild($logoTitle);
  $logo.appendChild($logoIcon);
  $header.appendChild($logo);
}

function renderNav($header) {
  const $nav = document.createElement("nav");
  const $home = document.createElement("a");
  $home.setAttribute("id", "home");
  $home.innerText = "Inicio";
  $home.classList.add("active");
  const $menu = document.createElement("a");
  $menu.setAttribute("id", "menu");
  $menu.innerText = "Menu";
  const $contact = document.createElement("a");
  $contact.setAttribute("id", "contact");
  $contact.innerText = "Contacto";
  const $about = document.createElement("a");
  $about.setAttribute("id", "about");
  $about.innerText = "Acerca de";
  $nav.appendChild($home);
  $nav.appendChild($menu);
  $nav.appendChild($contact);
  $nav.appendChild($about);
  $header.appendChild($nav);
}

export default function createHeader() {
  const $header = document.createElement("header");
  $header.setAttribute("id", "header");
  renderLogo($header);
  renderNav($header);

  return $header;
}
