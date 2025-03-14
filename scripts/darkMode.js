const modeButton = document.querySelector('#mode');
const darkModeStylesheet = document.querySelector('#dark-mode-stylesheet');
const lightModeStylesheet = document.querySelector('#light-mode-stylesheet');

modeButton.addEventListener('click', () => {
    const isDarkMode = darkModeStylesheet.disabled;
    darkModeStylesheet.disabled = !isDarkMode;
    lightModeStylesheet.disabled = isDarkMode;

    modeButton.textContent = isDarkMode ? '☀️' : '🌙';
});