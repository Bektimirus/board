const board = document.querySelector('#board'),
      squaresNumber = 999,
      colors = ['red', 'green', 'yellow', 'purple', 'blue', 'pink', 'silver', 'gold'];

for (let i = 0; i < squaresNumber; i++) {
    const square = document.createElement('div');
    square.classList.add('square');

    square.addEventListener('mouseover', setColor)

    square.addEventListener('mouseleave', removeColor)

    board.append(square);
}

function setColor(event) {
    const element = event.target;
    const color = getRandomColor();
    element.style.backgroundColor = color;
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(event) {
    const element = event.target;
    element.style.backgroundColor = 'black'  
    element.style.boxShadow = '0 0 2px black';
}

function getRandomColor() { 
    return colors[Math.floor(Math.random() * colors.length)]
}