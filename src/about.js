export function renderAbout() {
    let $about = document.createElement('div');
    $about.setAttribute('id', 'main-content-about');
    let $textContainer = document.createElement('div');
    $textContainer.setAttribute('id', 'text-container');
    let $aboutText = document.createElement('p');
    $aboutText.innerText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam a quas aliquid pariatur consequatur veritatis libero ut! Illo, harum explicabo iste at culpa fugit numquam perferendis deleniti, ad doloribus delectus.'
    $textContainer.appendChild($aboutText);
    $about.appendChild($textContainer);
    
    return $about;
}
