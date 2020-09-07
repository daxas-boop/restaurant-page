export default function createHeader() {
    let $header = document.createElement('header');
    $header.setAttribute('id', 'header');
    renderLogo($header);
    renderNav($header);

    return $header;
}

function renderLogo($header){
    let $logo = document.createElement('div');
    $logo.classList.add('logo');
    let $logoTitle = document.createElement('h1');
    $logoTitle.innerText = 'Pizzeria TOP';
    let $logoIcon = document.createElement('i');
    $logoIcon.classList.add('fas', 'fa-pizza-slice', 'fa-lg');
    $logo.appendChild($logoTitle);
    $logo.appendChild($logoIcon);
    $header.appendChild($logo);
};

function renderNav($header){
    let $nav = document.createElement('nav');
    let $home = document.createElement('a');
    $home.setAttribute('id', 'home');
    $home.innerText = 'Inicio';
    $home.classList.add('active');
    let $menu = document.createElement('a');
    $menu.setAttribute('id', 'menu');
    $menu.innerText = 'Menu';
    let $contact = document.createElement('a');
    $contact.setAttribute('id', 'contact');
    $contact.innerText = 'Contacto';
    let $about = document.createElement('a');
    $about.setAttribute('id', 'about');
    $about.innerText = 'Acerca de';
    $nav.appendChild($home);
    $nav.appendChild($menu);
    $nav.appendChild($contact);
    $nav.appendChild($about);
    $header.appendChild($nav);
};
