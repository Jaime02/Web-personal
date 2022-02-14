// Toggle dark mode
var dark_mode = true;
function toggleTheme() {
  const imgElement = document.getElementById('imagen');
  if (dark_mode) {
    imgElement.src = './dark-mode.png';
    dark_mode = false;
    document.documentElement.setAttribute('data-theme', 'light');
  } else {
    imgElement.src = './light-mode.png';
    dark_mode = true;
    document.documentElement.setAttribute('data-theme', 'dark');
  }
}

document.querySelector('#imagen').addEventListener('click', () => {
  toggleTheme();
});
