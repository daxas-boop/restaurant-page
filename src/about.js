function renderImageBox($about) {
  const $imageContainer = document.createElement("div");
  $imageContainer.setAttribute("id", "image-container-about");
  const $aboutImage = document.createElement("img");
  $aboutImage.setAttribute("src", "./images/About-us.png");
  $imageContainer.appendChild($aboutImage);
  $about.appendChild($imageContainer);
}

function renderTextBox($about) {
  const $textContainer = document.createElement("div");
  $textContainer.setAttribute("id", "text-container-about");
  const $aboutText = document.createElement("p");
  $aboutText.innerText =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam a quas aliquid pariatur consequatur veritatis libero ut! Illo, harum explicabo iste at culpa fugit numquam perferendis deleniti, ad doloribus delectus.";
  $textContainer.appendChild($aboutText);
  $about.appendChild($textContainer);
}

export default function createAbout() {
  const $about = document.createElement("div");
  $about.setAttribute("id", "main-content-about");
  renderImageBox($about);
  renderTextBox($about);

  return $about;
}
