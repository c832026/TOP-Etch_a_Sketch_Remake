// Create 16x16 squares
const etchContainer = document.querySelector('.etch-flex-container');

for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
        const square = document.createElement('div');
        square.classList.add('square');
        etchContainer.appendChild(square);
    }
}

// Hover over will change div color to black
etchContainer.addEventListener('mouseover', (e) => {
    const hoveredSquare = e.target;
    if (hoveredSquare.classList == 'etch-flex-container') {
        return;
    }
    hoveredSquare.classList.add('isBlack');
});