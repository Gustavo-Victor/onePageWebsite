var el = window.document.querySelector('.menu-mobile-icon');

el.addEventListener('click', () => {
    //alert('clicado');
    let menuItens = window.document.querySelector('.menu-mobile-itens');

    if(menuItens.classList.contains('show')){
        menuItens.classList.remove('show');
        menuItens.classList.add('hide');
    }else{
        menuItens.classList.add('show');
        menuItens.classList.remove('hide');
    }
})


//faqs
var faqs = window.document.querySelectorAll('.faq-single');

faqs.forEach(faq_single => {
    faq_single.addEventListener('click', () =>{
        faq_single.classList.toggle('active');
    });
});