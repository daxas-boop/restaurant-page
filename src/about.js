export default function createAbout() {
    let $about = document.createElement('div');
    $about.setAttribute('id', 'main-content-about');
    renderImageBox($about);
    renderTextBox($about);
    
    return $about;
}

function renderImageBox($about){
    let $imageContainer = document.createElement('div');
    $imageContainer.setAttribute('id', 'image-container-about');
    let $aboutImage = document.createElement('img');
    $aboutImage.setAttribute('src', './images/About-us.png');
    $imageContainer.appendChild($aboutImage);
    $about.appendChild($imageContainer);
};

function renderTextBox($about){
    let $textContainer = document.createElement('div');
    $textContainer.setAttribute('id', 'text-container-about');
    let $aboutText = document.createElement('p');
    $aboutText.innerText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam a quas aliquid pariatur consequatur veritatis libero ut! Illo, harum explicabo iste at culpa fugit numquam perferendis deleniti, ad doloribus delectus.'
    $textContainer.appendChild($aboutText);
    $about.appendChild($textContainer);
};
