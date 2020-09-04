import renderHomePage from './home.js';
import {renderHeader, renderFooter} from './header-footer.js';
import {renderAbout as $about} from './about.js';
import {renderMenu as $menu} from './menu.js';


const $container = document.querySelector('#content');

function initialRender(){
    $container.innerHTML = '';
    const $header = renderHeader();
    const $footer = renderFooter();
    const $mainElement = renderHomePage();
    $container.appendChild($header);
    $container.appendChild($mainElement);
    $container.appendChild($footer);
    handleTabSwitch()
}

function renderAbout() {
    $container.innerHTML = '';
    const $header = renderHeader();
    const $footer = renderFooter();
    const $mainElement = $about();
    $container.appendChild($header);
    $container.appendChild($mainElement);
    $container.appendChild($footer);
    
}

function renderMenu() {
    $container.innerHTML = '';
    const $header = renderHeader();
    const $footer = renderFooter();
    const $mainElement = $menu();
    $container.appendChild($header);
    $container.appendChild($mainElement);
    $container.appendChild($footer);
}

function renderContact() {
    $container.innerHTML = '';
    const $header = renderHeader();
    const $footer = renderFooter();
    $container.appendChild($header);
    $container.appendChild($footer);
}

function addActiveClass(e) {
    let $btns = document.querySelectorAll('#header nav a');
    let $current = document.querySelector(`#${e.target.id}`);
    $btns.forEach( btn =>{ btn.classList.remove('active') });
    $current.classList.add('active');
}

function handleTabSwitch() {
    const $home = document.querySelector('#home');
    const $menu = document.querySelector('#menu');
    const $contact = document.querySelector('#contact');
    const $about = document.querySelector('#about');

    $home.addEventListener('click', e =>{initialRender(), addActiveClass(e), handleTabSwitch();})
    $menu.addEventListener('click', e =>{renderMenu(), addActiveClass(e), handleTabSwitch();})
    $contact.addEventListener('click', e =>{renderContact(), addActiveClass(e), handleTabSwitch();})
    $about.addEventListener('click', e => {renderAbout(), addActiveClass(e), handleTabSwitch();})
}

initialRender();
