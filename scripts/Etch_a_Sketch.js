// Create 16x16 squares
const etchContainer = document.querySelector('.etch-flex-container');
for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
        const square = document.createElement('div');
        square.classList.add('square');
        etchContainer.appendChild(square);
    }
}