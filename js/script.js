//Criando as variaveis que receberão os seletores css
var menu = document.querySelector('nav ul');
var menuBar = document.querySelector('nav .menu-icon');
var iconMenu = document.querySelector('nav .menu-icon img');

// adicionando eventos as váriaveis criadas e trocando a imagem de icone de menu quando ele estiver ativo
menuBar.addEventListener('click', function(){

    if(iconMenu.getAttribute("src") == 'components/img/menu.png') {
       iconMenu.setAttribute("src","components/img/close.png");
    }else{
        iconMenu.setAttribute("src","components/img/menu.png");
    }

    menu.classList.toggle('active');
});