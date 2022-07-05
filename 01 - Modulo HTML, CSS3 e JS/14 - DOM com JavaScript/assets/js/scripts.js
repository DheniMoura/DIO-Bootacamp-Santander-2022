function changeMode() {
    changeClasses();
    changeText();
}

function changeClasses() {
    button.classList.add.toggle('dark-mode');
    h1.classList.add.toggle('dark-mode');
    body.classList.add.toggle('dark-mode');
    footer.classList.add.toggle('dark-mode');
}

function changeText() {
    if (button.classList.contains('dark-mode')) {
        button.innerHTML = "Light Mode";
        h1.innerHTML = "Dark Mode ON";
        return;
    }
    button.innerHTML = "Light Dark";
    h1.innerHTML = "Light Mode ON";
}


const button = document.getElementById('mode-selector');
const h1 = document.getElementById('page-title');
const body = document.getElementsByName('body')[0]; //lembrar que retorna uma lista
const footer = document.getElementsByTagName('footer')[0]; //retorna uma lista

button.addEventListener('click', changeMode());