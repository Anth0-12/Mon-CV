function startProgressBar() {
    const progressBar = document.querySelector('.progress');
    let width = 0;
    const interval = setInterval(frame, 10); // Appelle la fonction 'frame' toutes les 10 millisecondes
  
    function frame() {
      if (width >= 50) {
        clearInterval(interval); // Arrête l'animation lorsque la barre atteint 50%
      } else {
        width++;
        progressBar.style.width = width + '%'; // Met à jour la largeur de la barre de progression
      }
    }
  }
  startProgressBar();