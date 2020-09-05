export function renderContact() {
    let $contact = document.createElement('div');
    $contact.setAttribute('id', 'main-content-contact');

    (function renderForm() {
        let $formContainer = document.createElement('div');
        $formContainer.setAttribute('id', 'form-container');
        let $formTitle = document.createElement('h2');
        $formTitle.innerText = 'Envienos un mensaje.';
        let $form = document.createElement('form');
        $form.setAttribute('id', 'form');
            
        let $labelName = document.createElement('label');
        $labelName.setAttribute('for', 'name');
        $labelName.innerText = 'Nombre*';
        let $inputName = document.createElement('input');
        $inputName.setAttribute('name', 'name');
        $inputName.setAttribute('type', 'text');
        $labelName.appendChild($inputName);
        $form.appendChild($labelName);

        let $labelEmail = document.createElement('label');
        $labelEmail.setAttribute('for', 'email');
        $labelEmail.innerText = 'E-mail:';
        let $inputEmail = document.createElement('input');
        $inputEmail.setAttribute('name', 'email');
        $inputEmail.setAttribute('type', 'text');
        $labelEmail.appendChild($inputEmail);
        $form.appendChild($labelEmail);

        let $labelPhone = document.createElement('label');
        $labelPhone.setAttribute('for', 'phone');
        $labelPhone.innerText = 'Telefono:';
        let $inputPhone = document.createElement('input');
        $inputPhone.setAttribute('name', 'phone');
        $inputPhone.setAttribute('type', 'text');
        $labelPhone.appendChild($inputPhone);
        $form.appendChild($labelPhone);

        let $labelComment = document.createElement('label');
        $labelComment.setAttribute('for', 'comment');
        $labelComment.innerText = 'Su mensaje*';
        let $inputComment = document.createElement('textarea');
        $inputComment.setAttribute('name', 'comment');
        $labelComment.appendChild($inputComment);
        $form.appendChild($labelComment);

        let $button = document.createElement('button');
        $button.setAttribute('type', 'reset');
        $button.innerText = 'Enviar';
        $form.appendChild($button);

        $formContainer.appendChild($form);
        $contact.appendChild($formContainer);
    }());
    
    (function renderSocialInfoBox() {
        let $socialInfoContainer = document.createElement('div');
        $socialInfoContainer.setAttribute('id', 'social-info-container');
        
        let $phoneInfo = document.createElement('div');
        $phoneInfo.setAttribute('id', 'phone-info');
        let $phoneInfoTitle = document.createElement('h2');
        $phoneInfoTitle.innerText = 'Telefono:';
        let $phoneInfoText = document.createElement('p');
        $phoneInfoText.innerText = '15-44443333 / 4222-3344';
        $phoneInfo.appendChild($phoneInfoTitle);
        $phoneInfo.appendChild($phoneInfoText);
        $socialInfoContainer.appendChild($phoneInfo);
        
        let $emailInfo = document.createElement('div');
        $emailInfo.setAttribute('id', 'email-info');
        let $emailInfoTitle = document.createElement('h2');
        $emailInfoTitle.innerText = 'Email:';
        let $emailInfoText = document.createElement('p');
        $emailInfoText.innerText = 'email@gmail.com';
        $emailInfo.appendChild($emailInfoTitle);
        $emailInfo.appendChild($emailInfoText);
        $socialInfoContainer.appendChild($emailInfo);
            
        let $whereInfo = document.createElement('div');
        $whereInfo.setAttribute('id', 'where-info');
        let $whereInfoTitle = document.createElement('h2');
        $whereInfoTitle.innerText = 'Estamos en:';
        let $whereInfoText = document.createElement('p');
        $whereInfoText.innerText = 'Pl. Sant Jaume, 3241';
        let $whereInfoText1 = document.createElement('p');
        $whereInfoText1.innerText = 'Buenos Aires, Argentina';
        $whereInfo.appendChild($whereInfoTitle);
        $whereInfo.appendChild($whereInfoText);
        $whereInfo.appendChild($whereInfoText1);
        $socialInfoContainer.appendChild($whereInfo);
        
        $contact.appendChild($socialInfoContainer);
    }());

    return $contact;
}