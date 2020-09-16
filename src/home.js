function renderWelcomeBox($mainContent) {
  const $welcome = document.createElement("div");
  $welcome.setAttribute("id", "welcome");
  const $titleWelcome = document.createElement("h1");
  $titleWelcome.innerText = "Bienvenido a pizzeria TOP";
  $welcome.appendChild($titleWelcome);
  $mainContent.appendChild($welcome);
}

function renderDeliveryBox($mainContent) {
  const $delivery = document.createElement("div");
  $delivery.setAttribute("id", "delivery");
  const $deliveryTitle = document.createElement("h2");
  $deliveryTitle.innerText = "Pizzas a Domicilio ¡Pedí Delivery Online!";
  const $deliveryImage = document.createElement("img");
  $deliveryImage.setAttribute("id", "delivery-image");
  $deliveryImage.setAttribute("src", "./images/delivery.png");
  const $socialContainer = document.createElement("div");
  $socialContainer.setAttribute("id", "container-social");
  const $call = document.createElement("div");
  $call.setAttribute("id", "call-us");
  const $callIcon = document.createElement("i");
  $callIcon.classList.add("fas", "fa-phone", "fa-lg");
  const $callText = document.createElement("p");
  $callText.innerText = "15-33334444";
  $call.appendChild($callIcon);
  $call.appendChild($callText);
  const $visit = document.createElement("div");
  $visit.setAttribute("id", "visit-us");
  const $visitIcon = document.createElement("i");
  $visitIcon.classList.add("fas", "fa-map-marker-alt", "fa-lg");
  const $visitText = document.createElement("p");
  $visitText.innerText = "Av. Siempre viva 123";
  $visit.appendChild($visitIcon);
  $visit.appendChild($visitText);
  const $time = document.createElement("div");
  $time.setAttribute("id", "time");
  const $timeIcon = document.createElement("i");
  $timeIcon.classList.add("fas", "fa-clock", "fa-lg");
  const $timeText = document.createElement("p");
  $timeText.innerText = "Lun-Vie: 10:00am - 9:00pm";
  const $timeText2 = document.createElement("p");
  $timeText2.innerText = "Sab-Dom: 13:00am - 7:00pm";
  $time.appendChild($timeIcon);
  $time.appendChild($timeText);
  $time.appendChild($timeText2);
  $socialContainer.appendChild($call);
  $socialContainer.appendChild($visit);
  $socialContainer.appendChild($time);
  $delivery.appendChild($deliveryTitle);
  $delivery.appendChild($deliveryImage);
  $delivery.appendChild($socialContainer);
  $mainContent.appendChild($delivery);
}

export default function createHomePage() {
  const $mainContent = document.createElement("div");
  $mainContent.setAttribute("id", "main-content-home");
  renderWelcomeBox($mainContent);
  renderDeliveryBox($mainContent);

  return $mainContent;
}
