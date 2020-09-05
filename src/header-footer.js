export function renderHeader() {
    let $header = document.createElement('header');
    $header.setAttribute('id', 'header');

    (function renderLogo(){
        let $logo = document.createElement('div');
        $logo.classList.add('logo');
        let $logoTitle = document.createElement('h1');
        $logoTitle.innerText = 'Pizzeria TOP';
        let $logoIcon = document.createElement('i');
        $logoIcon.classList.add('fas', 'fa-pizza-slice', 'fa-lg');
        $logo.appendChild($logoTitle);
        $logo.appendChild($logoIcon);
        $header.appendChild($logo);
    }());

    (function renderNav(){
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
    }());

    return $header;
}


export function renderFooter() {
    let $footer = document.createElement('footer');
    $footer.setAttribute('id', 'footer');

    (function renderWebCreator(){
        let $creatorContainer = document.createElement('div');
        $creatorContainer.setAttribute('id', 'creator');
        let $creatorText = document.createElement('h4');
        $creatorText.classList.add('social-text');
        $creatorText.innerText = 'Creado por:';
        let $githubLink = document.createElement('a');
        $githubLink.classList.add('social-icon');
        $githubLink.setAttribute('href', 'https://github.com/daxas-boop/');
        $githubLink.setAttribute('target', '_blank');
        let $githubIcon = document.createElement('i');
        $githubIcon.classList.add('fab', 'fa-github-square', 'fa-lg');
        $githubLink.appendChild($githubIcon);
        $creatorContainer.appendChild($creatorText);
        $creatorContainer.appendChild($githubLink);
        $footer.appendChild($creatorContainer);
    }());

    (function renderSocialInfo(){
        let $socialInfo = document.createElement('div');
        $socialInfo.setAttribute('id', 'social-info');
        let $socialText = document.createElement('h4');
        $socialText.classList.add('social.text');
        $socialText.innerText = 'Contactanos:';
        let $facebookLink = document.createElement('a');
        $facebookLink.setAttribute('href', '#');
        $facebookLink.classList.add('social-icon');
        let $facebookIcon = document.createElement('i');
        $facebookIcon.classList.add('fab', 'fa-facebook-square', 'fa-lg');
        $facebookLink.appendChild($facebookIcon);
        let $whatsappLink = document.createElement('a');
        $whatsappLink.setAttribute('href', '#');
        $whatsappLink.classList.add('social-icon');
        let $whatsappIcon = document.createElement('i');
        $whatsappIcon.classList.add('fab', 'fa-whatsapp-square', 'fa-lg');
        $whatsappLink.appendChild($whatsappIcon);
        let $instagramLink = document.createElement('a');
        $instagramLink.setAttribute('href', '#');
        $instagramLink.classList.add('social-icon');
        let $instagramIcon = document.createElement('i');
        $instagramIcon.classList.add('fab', 'fa-instagram-square', 'fa-lg');
        $instagramLink.appendChild($instagramIcon);
        $socialInfo.appendChild($facebookLink);
        $socialInfo.appendChild($whatsappLink);
        $socialInfo.appendChild($instagramLink);
        $footer.appendChild($socialInfo);
    }());

    return $footer
}
