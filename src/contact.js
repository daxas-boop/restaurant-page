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

        let inputs = [{for:'name', text:'Nombre*', type:'text'}, 
        {for:'email', text:'E-mail:',type:'text'}, 
        {for:'phone', text:'Telefono:', type:'text'},
        {for:'comment', text:'Su mensaje', type:''}];

        inputs.forEach( input => {
            let $label = document.createElement('label');
            $label.setAttribute('for', `${input.for}`);
            $label.innerText = `${input.text}`;
            let $input = document.createElement('input');
            if(input.for === 'comment') { $input = document.createElement('textarea') }
            $input.setAttribute('name', `${input.for}`);
            $input.setAttribute('type', `${input.type}`);
            $label.appendChild($input);
            $form.appendChild($label);
        });

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

        let infoBoxes = [{id:'phone-info', title:'Telefono:', text:'15-44443333 / 4222-3344'},
        {id:'email-info', title:'Email:', text:'email@gmail.com'},
        {id:'where-info', title:'Estamos en:', text:'Pl. Sant Jaume, 3241. Buenos Aires, Argentina'},];

        infoBoxes.forEach( infoBox => {
            let $infoBox = document.createElement('div');
            $infoBox.setAttribute('id', `${infoBox.id}`);
            let $title = document.createElement('h2');
            $title.innerText = `${infoBox.title}`;
            let $text = document.createElement('p');
            $text.innerText = `${infoBox.text}`;
            $infoBox.appendChild($title);
            $infoBox.appendChild($text);
            $socialInfoContainer.appendChild($infoBox);
        });
        
        $contact.appendChild($socialInfoContainer);
    }());

    return $contact;
}