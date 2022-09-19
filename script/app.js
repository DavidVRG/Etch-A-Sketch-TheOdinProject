const sizeButtons = document.querySelectorAll('.size');
const optionButtons = document.querySelectorAll('.option');
const gameUI = document.querySelector('.game');

let option = 0;
let squareSize = 0;
let size = 0;
const colorPalette = ['black', 'yellow', 'green', 'purple', 'blue', 'orange'];


sizeButtons.forEach(e => {
    e.addEventListener('click', () => {
        sizeButtons.forEach(element => element.classList.remove('active'))
        e.classList.add('active')
        gameUI.innerHTML = '';
        squareSize = 256 / parseInt(e.getAttribute('data-id'));
        size = parseInt(e.getAttribute('data-id')) * parseInt(e.getAttribute('data-id'));
        for(let i = 0; i < size; i++){
            let square = document.createElement('div');
            square.setAttribute('class', 'square')
            square.setAttribute('style', `height: ${squareSize}px; width: ${squareSize}px`)
            gameUI.appendChild(square);
        }
        game(option)
    })
})
optionButtons.forEach(e => {
    e.addEventListener('click', () => {
        optionButtons.forEach(element => element.classList.remove('active'))
        e.classList.add('active')
        option = e.getAttribute('data-id');
        game(option)
    })
})

function game(option){
        if(option == 'rainbow'){
            document.querySelectorAll('.square').forEach(e => {
            e.addEventListener('click', () => {
                let randomColor = colorPalette[Math.floor(Math.random() * colorPalette.length)];
                e.style.backgroundColor = randomColor;
            })
        })
        }else if(option == 'ereaser'){
            document.querySelectorAll('.square').forEach(e => {
            e.addEventListener('click', () => {
                e.style.backgroundColor = 'white';
            })
        })
        }else{
            document.querySelectorAll('.square').forEach(e => {
            for(let i = 0; i < size; i++){
                e.style.backgroundColor = 'white';
            }
        })
    }
}