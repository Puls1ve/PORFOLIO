function renderHome( data ) {

    let HTML = '';
    for (let i = 0; i < data.length; i++) {
        let  obj = data[i];
        
    HTML += `    <H2>${obj.title}</h2>
                <p>${obj.text}</p>
                <img src="./img/logo.png" alt="">
                <button class="homepage-btn"> Conctact me </button>`;
    }

    return document.getElementById('generateHtml').innerHTML = HTML;
}



function renderAbout( data ) {

    let about_HTML = '';
    for (let i = 0; i < data.length; i++) {
        const obj = data[i];
        
    about_HTML += ` <H2>${obj.title}</h2>
                    <p>${obj.text}</p>`;
    
    }
    return document.getElementById('generateHtml').innerHTML = about_HTML ;
}

function renderSkills( data ) {
    
    let skills_HTML = '';
    for (let i = 0; i < data.length; i++) {
        const obj = data[i];  
    
        skills_HTML += `<H2>${obj.title}</h2>
                    <p>${obj.text}</p>`;
    
    }

    return document.getElementById('generateHtml').innerHTML = skills_HTML ;
}


function renderContacts( data ) {

    let contacts_HTML = '';
    for (let i = 0; i < data.length; i++) {
        const obj = data[i];
        
    contacts_HTML += ` <H2>${obj.title}</h2>
                       <p>${obj.text}</p>`;             
    }

    return document.getElementById('generateHtml').innerHTML = contacts_HTML ;
}


// document.querySelectorAll('.nav-side > nav > button').forEach(item => {
//     item.addEventListener('click', loader)
// });
