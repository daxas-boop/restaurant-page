export default function renderHomePage() {
    let $mainContent = document.createElement('div');
    $mainContent.setAttribute('id', 'main-content-home');
    
    let $welcome = document.createElement('div');
    $welcome.setAttribute('id', 'welcome');
    let $titleWelcome = document.createElement('h1');
    $titleWelcome.innerText = 'Bienvenido a pizzeria TOP';
    $welcome.appendChild($titleWelcome);

    let $delivery = document.createElement('div');
    $delivery.setAttribute('id', 'delivery');
    let $deliveryTitle = document.createElement('h2');
    $deliveryTitle.innerText = 'Pizzas a Domicilio ¡Pedí Delivery Online!';
    let $deliveryImage = document.createElement('img');
    $deliveryImage.setAttribute('id', 'delivery-image');
    $deliveryImage.setAttribute('src', './images/delivery.png');
    let $socialContainer = document.createElement('div');
    $socialContainer.setAttribute('id', 'container-social'); 
        let $call = document.createElement('div');
        $call.setAttribute('id', 'call-us');
        let $callIcon = document.createElement('i')
        $callIcon.classList.add('fas', 'fa-phone', 'fa-lg');
        let $callText = document.createElement('p');
        $callText.innerText = '15-3246124';   
        $call.appendChild($callIcon);
        $call.appendChild($callText);

        let $visit = document.createElement('div');
        $visit.setAttribute('id', 'visit-us');
        let $visitIcon = document.createElement('i');
        $visitIcon.classList.add('fas', 'fa-map-marker-alt' , 'fa-lg');
        let $visitText = document.createElement('p');
        $visitText.innerText = 'Av. Siempre viva 123';
        $visit.appendChild($visitIcon);
        $visit.appendChild($visitText);

        let $time = document.createElement('div');
        $time.setAttribute('id' , 'time');
        let $timeIcon = document.createElement('i');
        $timeIcon.classList.add('fas', 'fa-clock', 'fa-lg');
        let $timeText = document.createElement('p');
        $timeText.innerText = 'Lun-Vie: 10:00am - 9:00pm';
        let $timeText2 = document.createElement('p');
        $timeText2.innerText = 'Sab-Dom: 13:00am - 7:00pm';
        $time.appendChild($timeIcon);
        $time.appendChild($timeText);
        $time.appendChild($timeText2);
        
    $socialContainer.appendChild($call);
    $socialContainer.appendChild($visit);
    $socialContainer.appendChild($time);
    $delivery.appendChild($deliveryTitle);
    $delivery.appendChild($deliveryImage);
    $delivery.appendChild($socialContainer);
    
    $mainContent.appendChild($welcome);
    $mainContent.appendChild($delivery);

    return $mainContent;
}