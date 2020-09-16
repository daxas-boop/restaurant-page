function renderWebCreator($footer) {
  const $creatorContainer = document.createElement("div");
  $creatorContainer.setAttribute("id", "creator");
  const $creatorText = document.createElement("h4");
  $creatorText.classList.add("social-text");
  $creatorText.innerText = "Creado por:";
  const $githubLink = document.createElement("a");
  $githubLink.classList.add("social-icon");
  $githubLink.setAttribute("href", "https://github.com/daxas-boop/");
  $githubLink.setAttribute("target", "_blank");
  const $githubIcon = document.createElement("i");
  $githubIcon.classList.add("fab", "fa-github-square", "fa-lg");
  $githubLink.appendChild($githubIcon);
  $creatorContainer.appendChild($creatorText);
  $creatorContainer.appendChild($githubLink);
  $footer.appendChild($creatorContainer);
}

function renderSocialInfo($footer) {
  const $socialInfo = document.createElement("div");
  $socialInfo.setAttribute("id", "social-info");
  const $socialText = document.createElement("h4");
  $socialText.classList.add("social.text");
  $socialText.innerText = "Contactanos:";
  const $facebookLink = document.createElement("a");
  $facebookLink.setAttribute("href", "#");
  $facebookLink.classList.add("social-icon");
  const $facebookIcon = document.createElement("i");
  $facebookIcon.classList.add("fab", "fa-facebook-square", "fa-lg");
  $facebookLink.appendChild($facebookIcon);
  const $whatsappLink = document.createElement("a");
  $whatsappLink.setAttribute("href", "#");
  $whatsappLink.classList.add("social-icon");
  const $whatsappIcon = document.createElement("i");
  $whatsappIcon.classList.add("fab", "fa-whatsapp-square", "fa-lg");
  $whatsappLink.appendChild($whatsappIcon);
  const $instagramLink = document.createElement("a");
  $instagramLink.setAttribute("href", "#");
  $instagramLink.classList.add("social-icon");
  const $instagramIcon = document.createElement("i");
  $instagramIcon.classList.add("fab", "fa-instagram-square", "fa-lg");
  $instagramLink.appendChild($instagramIcon);
  $socialInfo.appendChild($facebookLink);
  $socialInfo.appendChild($whatsappLink);
  $socialInfo.appendChild($instagramLink);
  $footer.appendChild($socialInfo);
}

export default function createFooter() {
  const $footer = document.createElement("footer");
  $footer.setAttribute("id", "footer");
  renderWebCreator($footer);
  renderSocialInfo($footer);

  return $footer;
}
