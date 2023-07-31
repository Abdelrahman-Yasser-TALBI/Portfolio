
const darkModeToggle = document.getElementById('dark-mode-toggle');
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

function setDarkMode(isDarkMode) {
  const body = document.body;
  if (isDarkMode) {
    body.classList.add('dark-mode');
  } else {
    body.classList.remove('dark-mode');
  }
}

darkModeToggle.addEventListener('click', () => {
  const isDarkMode = document.body.classList.toggle('dark-mode');
  // Vous pouvez enregistrer l'état du mode sombre dans un cookie ou le stocker ailleurs
  // pour qu'il reste enregistré lors des visites ultérieures.
});

function setDarkModePreference(event) {
  const isDarkMode = event.matches;
  setDarkMode(isDarkMode);
}

// Si le mode sombre est préféré par le système de l'utilisateur, activez-le par défaut
if (prefersDarkScheme.matches) {
  setDarkMode(true);
}

prefersDarkScheme.addEventListener('change', setDarkModePreference);


