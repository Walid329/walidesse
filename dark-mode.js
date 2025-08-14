const currentTheme = localStorage.getItem('theme') || 'light';
document.body.classList.toggle('dark-mode', currentTheme === 'dark');

const toggleButton = document.querySelector('.dark-toggle');
toggleButton.textContent = currentTheme === 'dark' ? '☀️' : '🌙';

function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
  const isDark = document.body.classList.contains('dark-mode');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
  toggleButton.textContent = isDark ? '☀️' : '🌙';
}
