import renderHomePage from './home.js';
import {renderHeader, renderFooter} from './header-footer.js';
import {renderAbout as about} from './about.js';

const $container = document.querySelector('#content');

function initialRender(){
    const $header = renderHeader();
    const $footer = renderFooter();
    const $mainElement = renderHomePage();
    $container.appendChild($header);
    $container.appendChild($mainElement);
    $container.appendChild($footer);
}

function renderAbout() {
    $container.innerHTML = '';
    const $header = renderHeader();
    const $footer = renderFooter();
    const $mainElement = about();
    $container.appendChild($header);
    $container.appendChild($mainElement);
    $container.appendChild($footer);
}


function handleTabSwitch() { // need to call handleTab every time a tab is switched
    const $home = document.querySelector('#home');
    const $menu = document.querySelector('#menu');
    const $contact = document.querySelector('#contact');
    const $about = document.querySelector('#about');

    $home.addEventListener('click', e =>{initialRender(), addActiveClass(e)})
    $menu.addEventListener('click', e =>{addActiveClass(e)})
    $contact.addEventListener('click', e =>{addActiveClass(e)})
    $about.addEventListener('click', e => {renderAbout(), addActiveClass(e)})
}

function addActiveClass(e) {
    let $btns = document.querySelectorAll('#header nav a');
    let $current = document.querySelector(`#${e.target.id}`);
    $btns.forEach( btn =>{ btn.classList.remove('active') });
    $current.classList.add('active');
}


initialRender();
handleTabSwitch();