const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        console.log("Lightmode aktiviert");
    }
    else {
        document.documentElement.setAttribute('data-theme', 'light');
        console.log("Darkmode aktiviert");
    }    
}

toggleSwitch.addEventListener('change', switchTheme, false);