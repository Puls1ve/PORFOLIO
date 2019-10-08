function renderHome( data ) {

    let HTML = '';
    for (let i = 0; i < data.length; i++) {
        let  obj = data[i];
        
    HTML += `  <div class="loader hidden">
    <i class="fa fa-spinner fa-spin" style="font-size:200px"></i>
    </div>
                 <H2>${obj.title}</h2>
                <p>${obj.text}</p>
                <img src="./img/logo.png" alt="">
                <button class="homepage-btn"> Conctact me </button>`;
    }

    return document.getElementById('page-content').innerHTML = HTML;
}



function renderAbout( data ) {


    let about_HTML = '';

    for (let i = 0; i < data.length; i++) {
        const obj = data[i];
        
    about_HTML += ` <div class="loader hidden">
                    <i class="fa fa-spinner fa-spin" style="font-size:200px"></i>
                    </div>
                    <H2>${obj.title}</h2>
                    <p>${obj.text}</p>`;
    
    }



    return document.getElementById('page-content').innerHTML = about_HTML ;
}

function renderSkills( data ) {


    let skills_HTML = '';

    for (let i = 0; i < data.length; i++) {
        const obj = data[i];
        
    skills_HTML += `<div class="loader hidden">
                    <i class="fa fa-spinner fa-spin" style="font-size:200px"></i>
                    </div>
                    <H2>${obj.title}</h2>
                    <p>${obj.text}</p>`;
    
    }

    return document.getElementById('page-content').innerHTML = skills_HTML ;
}


function renderContacts( data ) {


    let contacts_HTML = '';

    for (let i = 0; i < data.length; i++) {
        const obj = data[i];
        
    contacts_HTML += `  <div class="loader hidden">
                        <i class="fa fa-spinner fa-spin" style="font-size:200px"></i>
                        </div>
                        <H2>${obj.title}</h2>
                       <p>${obj.text}</p>`;
    

                    
    }

    return document.getElementById('page-content').innerHTML = contacts_HTML ;
}



    window.addEventListener("load", function () {
        const loader = document.querySelector(".loader");
        loader.className += " hidden"; // class "loader hidden"
    });