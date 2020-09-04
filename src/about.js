export function renderAbout() {
    let $about = document.createElement('div');
    $about.setAttribute('id', 'main-content-about');
    let $textContainer = document.createElement('div');
    $textContainer.setAttribute('id', 'text-container-about');
    let $aboutText = document.createElement('p');
    $aboutText.innerText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam a quas aliquid pariatur consequatur veritatis libero ut! Illo, harum explicabo iste at culpa fugit numquam perferendis deleniti, ad doloribus delectus.'
    let $imageContainer = document.createElement('div');
    $imageContainer.setAttribute('id', 'image-container-about');
    let $aboutImage = document.createElement('img');
    $aboutImage.setAttribute('src', './images/About-us.png');
    $imageContainer.appendChild($aboutImage);
    $textContainer.appendChild($aboutText);
    $about.appendChild($imageContainer);
    $about.appendChild($textContainer);
    
    return $about;
}
