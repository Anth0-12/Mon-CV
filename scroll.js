// On cible tous les éléments ayant l'id "boutonScrollTop"
let bouton = document.getElementById("scrollMenu");
let menuTel = document.getElementById("menuTel");

// On ajoute une fonction onscroll à la fenêtre pour surveiller les événements de défilement 
// de la page et on appelle la fonction "scrollFunction"
window.onscroll = function() {scrollFunction(), apparationFunction()};

// Quand l'utilisateur scroll de 20px vers le bas le bouton s'affiche 
// avec le "display: block" sinon il reste invisible avec le "display: none"
function scrollFunction() {
  if (document.body.scrollTop > 96.9 || document.documentElement.scrollTop > 96.9) {
    bouton.style.display = "block";
  } else {
    bouton.style.display = "none";
  }
}

function apparationFunction() {
  if (document.body.scrollTop > 85 || document.documentElement.scrollTop > 85) {
    menuTel.style.display = "block";
  } else {
    menuTel.style.display = "none";
  }
};
