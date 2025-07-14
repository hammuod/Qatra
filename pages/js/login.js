
let lightMode = localStorage.getItem('lightMode'); 
const themeSwitch = document.getElementById('modes');

const enableLightMode = () => {
    document.body.classList.add('light-Mode');
    localStorage.setItem('lightMode', 'active');
};

const disableLightMode = () => {
    document.body.classList.remove('light-Mode');
    localStorage.setItem('lightMode', null);
};

if (lightMode === 'active') {
    enableLightMode();
} else {
    disableLightMode();
}

themeSwitch.addEventListener("click", () => {
    lightMode = localStorage.getItem('lightMode');
    if (lightMode !== 'active') {
        enableLightMode();
    } else {
        disableLightMode();
    }
});

