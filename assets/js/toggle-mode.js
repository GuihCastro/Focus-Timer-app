let darkMode = true;
const toggleBtn = document.getElementById('toggle-mode');

toggleBtn.addEventListener('click', (event) => {
    document.documentElement.classList.toggle('light');
    
    const mode = darkMode ? 'light' : 'dark'
    event.currentTarget
        .querySelector('span').textContent = `${mode} mode ativado!`

    darkMode = !darkMode;
})