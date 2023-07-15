// Obtenez les éléments de la barre de progression
const progressBars = document.querySelectorAll('.progress-bar');

// Fonction pour mettre à jour la barre de progression avec une animation
function updateProgressBarWithAnimation(bar, percentage) {
  const progress = bar.querySelector('.progress');
  progress.style.width = percentage + '%';
}

// Créez une instance de l'Intersection Observer
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const progressBar = entry.target;
      const percentage = progressBar.dataset.progress;
      updateProgressBarWithAnimation(progressBar, percentage);

      // Arrêtez d'observer cet élément une fois l'animation déclenchée
      observer.unobserve(progressBar);
    }
  });
});

// Parcourez chaque barre de progression et observez-la
progressBars.forEach((progressBar) => {
  observer.observe(progressBar);
});