// Obtenez les éléments de la barre de progression
const progressBars = document.querySelectorAll('.progress-bar');

// Fonction pour mettre à jour la barre de progression
function updateProgressBar(bar, percentage) {
  const progress = bar.querySelector('.progress');
  progress.style.width = percentage + '%';
}

// Exemple de mise à jour des barres de progression avec une animation
setTimeout(() => {
  updateProgressBar(progressBars[0], 50); // 50% de progression pour la première barre
}, 500); // Démarre l'animation après 500 millisecondes (0,5 seconde)

setTimeout(() => {
  updateProgressBar(progressBars[1], 75); // 75% de progression pour la deuxième barre
}, 1000); // Démarre l'animation après 1000 millisecondes (1 seconde)

setTimeout(() => {
  updateProgressBar(progressBars[2], 30); // 30% de progression pour la troisième barre
}, 1500); // Démarre l'animation après 1500 millisecondes (1,5 seconde)

setTimeout(() => {
  updateProgressBar(progressBars[3], 10); // 30% de progression pour la troisième barre
}, 500); // Démarre l'animation après 1500 millisecondes (1,5 seconde)

setTimeout(() => {
  updateProgressBar(progressBars[4], 60); // 30% de progression pour la troisième barre
}, 1000); // Démarre l'animation après 1500 millisecondes (1,5 seconde)

setTimeout(() => {
  updateProgressBar(progressBars[5], 20); // 30% de progression pour la troisième barre
}, 1500); // Démarre l'animation après 1500 millisecondes (1,5 seconde)