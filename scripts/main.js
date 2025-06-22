// Função para alternar modo escuro
const toggleButton = document.getElementById('dark-mode-toggle');

function setTheme(theme) {
  if (theme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
    toggleButton.textContent = '☀️';
    localStorage.setItem('theme', 'dark');
  } else {
    document.documentElement.removeAttribute('data-theme');
    toggleButton.textContent = '🌙';
    localStorage.setItem('theme', 'light');
  }
}

// Inicializa tema com base no localStorage ou preferências do sistema
function initTheme() {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    setTheme('dark');
  } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    setTheme('dark');
  } else {
    setTheme('light');
  }
}

document.addEventListener('DOMContentLoaded', () => {
  initTheme();

  if (toggleButton) {
    toggleButton.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      if (currentTheme === 'dark') {
        setTheme('light');
      } else {
        setTheme('dark');
      }
    });
  }

  // Inicializa AOS
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 800,
      once: true,
    });
  }
});
