
const body = document.querySelector('body')
let currColor = 'rgb(0,0,0)';
const changeColor = function() {
    const randy = () => {
        return Math.floor(Math.random() * 256)
    }
    const red = randy();
    const blue = randy();
    const green = randy();
    currColor = `rgb(${red}, ${blue}, ${green})`;
    body.style.backgroundColor = currColor;
    body.firstElementChild.classList.add('hidden')
}

const displayColor = function() {
    document.querySelector('.value').querySelector('h1').textContent = currColor;
    document.querySelector('.value').classList.toggle('hidden');
}
body.addEventListener('auxclick', displayColor)
body.addEventListener('contextmenu', (e) => e.preventDefault());
body.addEventListener('click', changeColor);
