const etchContainer = document.querySelector('.etch-flex-container');
const root = document.querySelector(':root');
let pixelsPerRow = getComputedStyle(root).getPropertyValue('--pixels-per-row'); // Default is 16

function createGrid(pixelsPerRow) {
    for (let i = 0; i < pixelsPerRow; i++) {
        for (let j = 0; j < pixelsPerRow; j++) {
            const square = document.createElement('div');
            square.classList.add('square');
            etchContainer.appendChild(square);
        }
    }
}

// Create default grid (16x16)
createGrid(pixelsPerRow);

// Make hover over change color to black
etchContainer.addEventListener('mouseover', (e) => {
    const hoveredSquare = e.target;
    if (hoveredSquare.classList == 'etch-flex-container') {
        return;
    }
    hoveredSquare.classList.add('isBlack');
});

// Button to prompt and change amount of pixels
const pixelBtn = document.querySelector('.pixel-btn');
pixelBtn.addEventListener('click', () => {
    do {
        pixelsPerRow = prompt('How many pixels do you want for each row? (Maximum: 100)', 69);
    } while (pixelsPerRow < 1 || pixelsPerRow > 100)

    etchContainer.innerHTML = ''; // Clear the squares
    root.style.setProperty('--pixels-per-row', pixelsPerRow);
    createGrid(pixelsPerRow);
});