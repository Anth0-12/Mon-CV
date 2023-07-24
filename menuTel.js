// On cible tous les éléments ayant l'id "burger"
let menuTel = document.getElementById("menuTel");
    
// On ajoute une fonction onscroll à la fenêtre pour surveiller les événements de défilement 
// de la page et on appelle la fonction "scrollFunction"
window.onscroll = function() {apparationFunction()};

// Quand l'utilisateur scroll de 20px vers le bas le bouton s'affiche 
// avec le "display: block" sinon il reste invisible avec le "display: none"
function apparationFunction() {
  if (document.body.scrollTop > 85 || document.documentElement.scrollTop > 85) {
    menuTel.style.display = "block";
    menuTel.style.opacity = "1";
  } else {
    menuTel.style.display = "none";
    menuTel.style.opacity = "0";
  }
};
