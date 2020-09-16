import createHomePage from "./home";
import createHeader from "./header";
import createFooter from "./footer";
import createAbout from "./about";
import createMenu from "./menu";
import createContact from "./contact";

const $container = document.querySelector("#content");

function renderHomePage() {
  $container.innerHTML = "";
  const $header = createHeader();
  const $footer = createFooter();
  const $mainElement = createHomePage();
  $container.appendChild($header);
  $container.appendChild($mainElement);
  $container.appendChild($footer);
}

function renderAbout() {
  $container.innerHTML = "";
  const $header = createHeader();
  const $footer = createFooter();
  const $mainElement = createAbout();
  $container.appendChild($header);
  $container.appendChild($mainElement);
  $container.appendChild($footer);
}

function renderMenu() {
  $container.innerHTML = "";
  const $header = createHeader();
  const $footer = createFooter();
  const $mainElement = createMenu();
  $container.appendChild($header);
  $container.appendChild($mainElement);
  $container.appendChild($footer);
}

function renderContact() {
  $container.innerHTML = "";
  const $header = createHeader();
  const $footer = createFooter();
  const $mainElement = createContact();
  $container.appendChild($header);
  $container.appendChild($mainElement);
  $container.appendChild($footer);
}

function addActiveClass(e) {
  const $btns = document.querySelectorAll("#header nav a");
  const $current = document.querySelector(`#${e.target.id}`);
  $btns.forEach((btn) => {
    btn.classList.remove("active");
  });
  $current.classList.add("active");
}

function handleTabSwitch() {
  const $home = document.querySelector("#home");
  const $menu = document.querySelector("#menu");
  const $contact = document.querySelector("#contact");
  const $about = document.querySelector("#about");

  $home.addEventListener("click", (e) => {
    renderHomePage();
    addActiveClass(e);
    handleTabSwitch();
  });
  $menu.addEventListener("click", (e) => {
    renderMenu();
    addActiveClass(e);
    handleTabSwitch();
  });
  $contact.addEventListener("click", (e) => {
    renderContact();
    addActiveClass(e);
    handleTabSwitch();
  });
  $about.addEventListener("click", (e) => {
    renderAbout();
    addActiveClass(e);
    handleTabSwitch();
  });
}

renderHomePage();
handleTabSwitch();
