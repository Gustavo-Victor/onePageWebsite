//menu
var botao_menu = window.document.getElementById('icone-menu-top');

botao_menu.addEventListener('click', () => {
    let nav = window.document.getElementById('nav');
    nav.classList.toggle('active');

    if(botao_menu.classList.contains('fa-bars')){
        botao_menu.classList.remove('fa-bars');
        botao_menu.classList.add('fa-times');
    }else{
        botao_menu.classList.add('fa-bars');
        botao_menu.classList.remove('fa-times');
    }
});


//links
var links_menu = window.document.querySelectorAll('.link');

for(let contador = 0; contador< links_menu.length; contador++){
    links_menu[contador].addEventListener('click', () => {
        links_menu.forEach(element => {
            if(element.classList.contains('active')){
                element.classList.remove('active');
                links_menu[contador].classList.add('active');
            }
        })
    })
}



//faqs
var faqs = window.document.querySelectorAll('.faq-single');

faqs.forEach(faq_single => {
    faq_single.addEventListener('click', () =>{
        faq_single.classList.toggle('active');
    });
});