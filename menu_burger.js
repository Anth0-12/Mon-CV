window.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.querySelector('#burger');
    const menu = document.querySelector('.menuBurger');
      
    menuIcon.addEventListener('click', function() {
    menu.classList.toggle('open');
    menuIcon.classList.toggle('open');
    });
});
    
