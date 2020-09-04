export function renderMenu() {
    let $menu = document.createElement('div');
    $menu.setAttribute('id', 'main-content-menu');
    
    let $pizzaMozza = document.createElement('div');
    $pizzaMozza.setAttribute('id', 'pizza-mozza');
    $pizzaMozza.setAttribute('class', 'item');
    let $imgPizzaMozza = document.createElement('img');
    $imgPizzaMozza.setAttribute('src', './images/pizza-mozzarella.png');
    let $textPizzaMozza = document.createElement('p');
    $textPizzaMozza.innerText = 'Pizza de mozzarella y albaca';
    $pizzaMozza.appendChild($imgPizzaMozza);
    $pizzaMozza.appendChild($textPizzaMozza);
    $menu.appendChild($pizzaMozza);

    let $empanadaCarne = document.createElement('div');
    $empanadaCarne.setAttribute('id', 'emp-carne');
    $empanadaCarne.setAttribute('class', 'item');
    let $imgEmpanadaCarne = document.createElement('img');
    $imgEmpanadaCarne.setAttribute('src', './images/empanadas-carne.png');
    let $textEmpanadaCarne = document.createElement('p');
    $textEmpanadaCarne.innerText = 'Empanadas de carne';
    $empanadaCarne.appendChild($imgEmpanadaCarne);
    $empanadaCarne.appendChild($textEmpanadaCarne);
    $menu.appendChild($empanadaCarne);

    let $pizzaLonga = document.createElement('div');
    $pizzaLonga.setAttribute('id', 'pizza-longa');
    $pizzaLonga.setAttribute('class', 'item');
    let $imgPizzaLonga = document.createElement('img');
    $imgPizzaLonga.setAttribute('src', './images/pizza-longaniza.png');
    let $textPizzaLonga = document.createElement('p');
    $textPizzaLonga.innerText = 'Pizza de mozzarella y longaniza';
    $pizzaLonga.appendChild($imgPizzaLonga);
    $pizzaLonga.appendChild($textPizzaLonga);
    $menu.appendChild($pizzaLonga);

    let $pizzaProvenzal = document.createElement('div');
    $pizzaProvenzal.setAttribute('id', 'pizza-provenzal');
    $pizzaProvenzal.setAttribute('class', 'item');
    let $imgPizzaProvenzal = document.createElement('img');
    $imgPizzaProvenzal.setAttribute('src', './images/pizza-provenzal.png');
    let $textPizzaProvenzal = document.createElement('p');
    $textPizzaProvenzal.innerText = 'Pizza de provenzal';
    $pizzaProvenzal.appendChild($imgPizzaProvenzal);
    $pizzaProvenzal.appendChild($textPizzaProvenzal);
    $menu.appendChild($pizzaProvenzal);

    let $pizzaBrocoli = document.createElement('div');
    $pizzaBrocoli.setAttribute('id', 'pizza-brocoli');
    $pizzaBrocoli.setAttribute('class', 'item');
    let $imgPizzaBrocoli = document.createElement('img');
    $imgPizzaBrocoli.setAttribute('src', './images/pizza-brocoli.png');
    let $textPizzaBrocoli = document.createElement('p');
    $textPizzaBrocoli.innerText = 'Pizza de brocoli';
    $pizzaBrocoli.appendChild($imgPizzaBrocoli);
    $pizzaBrocoli.appendChild($textPizzaBrocoli);
    $menu.appendChild($pizzaBrocoli);

    let $pizzaAnchoas = document.createElement('div');
    $pizzaAnchoas.setAttribute('id', 'pizza-anchoas');
    $pizzaAnchoas.setAttribute('class', 'item');
    let $imgPizzaAnchoas = document.createElement('img');
    $imgPizzaAnchoas.setAttribute('src', './images/pizza-anchoas.png');
    let $textPizzaAnchoas = document.createElement('p');
    $textPizzaAnchoas.innerText = 'Pizza de anchoas';
    $pizzaAnchoas.appendChild($imgPizzaAnchoas);
    $pizzaAnchoas.appendChild($textPizzaAnchoas);
    $menu.appendChild($pizzaAnchoas);

    return $menu;
}