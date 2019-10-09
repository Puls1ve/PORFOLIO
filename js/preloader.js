document.querySelectorAll('.nav-side > nav > button').forEach(item => {
    item.addEventListener('click', loader)
});




function loader() {
    
    

    let loading = document.getElementById('preload');
    let preloader = document.getElementById('generateHtml');
 
        loading.classList.remove('hidden')

        console.log(loading);
        
    //     // preloader.classList.add('loader.hidden')
    //     // console.log(preloader);
    
    //     // preloader.classList.add('a'),
    //     // console.log(preloader);
        
    setTimeout(function(){
        document.getElementById('preload').classList.add('hidden');
       }, 1000);
    
    
       preloader.classList.add('a');


       setTimeout(function(){
        document.getElementById('generateHtml').classList.remove('a');
       }, 1000);


    return;
}

