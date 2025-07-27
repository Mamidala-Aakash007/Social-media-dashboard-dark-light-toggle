const darkButton = document.getElementById('dark');
const lightButton = document.getElementById('light');


const setColorMode = () => {
    console.log('setColorMode called');
    console.log( localStorage.getItem('colormode'));
    
    if(localStorage.getItem('colormode') == 'dark')
    {
        setDarkMode();
        darkButton.click();
    }  
    else if (localStorage.getItem('colormode') == 'light'){
        setLightMode();
        lightButton.click();
    }    
};

const checkMode = () => {
    if(localStorage.getItem('colormode') === null) {
    if(window.matchMedia("(prefers-color-scheme: light)").matches) {
        lightButton.click();
}
    else if(window.matchMedia("(prefers-color-scheme: dark)").matches) {
        darkButton.click();
    }
}
};

const checkModeChange = () => {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (event) => {
    checkMode();
});
};

const setDarkMode = () => {
    document.querySelector('body').classList = 'dark';
}

const setLightMode = () => {
    document.querySelector('body').classList = 'light';
};

setColorMode();
checkMode();
checkModeChange();



const radioButtons = document.querySelectorAll('.toggle__wrapper input[type="radio"]');

for( let i = 0 ; i < radioButtons.length; i++ ) {
    radioButtons[i].addEventListener('click', (event) => {
        if (darkButton.checked){
            localStorage.setItem('colormode', 'dark');
            setDarkMode();
        } 
        else {
            localStorage.setItem('colormode', 'light');
            setLightMode();
        }
});
}


