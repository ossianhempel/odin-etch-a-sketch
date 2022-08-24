// const gridContainer = document.querySelector('.grid-container');
// const grid = document.createElement('div');
// const button = document.querySelector('button');

// grid.setAttribute('class', 'grid');
// gridContainer.appendChild(grid);

const button = document.querySelector('button');

function gridCreation(numberOfSquares) {
    const gridContainer = document.querySelector('.grid-container');
    const grid = document.createElement('div');
    grid.setAttribute('class', 'grid');
    grid.setAttribute('style', `grid-template-columns: repeat(${numberOfSquares}, 1fr); grid-template-rows: repeat(${numberOfSquares} 1fr);`)
    gridContainer.appendChild(grid);
    
    for (let i = 1; i <= numberOfSquares; i++) {
            for (let x = 1; x <= numberOfSquares; x++) {
                const div = document.createElement('div');
                div.setAttribute('class', 'grid-cell');
                grid.appendChild(div);
                
                div.addEventListener('mouseover', (event) => {
                    event.target.style.background = 'black';
                });
        
            }
        }
}


gridCreation(16);


button.addEventListener('click', () => {
    let nSquares = '';
    nSquares = prompt('How many squares do you want per side?');
    
    if (nSquares <= 100) {
        const gridRemove = document.querySelector('.grid');
        gridCell = document.querySelectorAll('.grid-cell')
        gridCell.forEach(element => {
            gridRemove.removeChild(element);
        });
        const gridContainer = document.querySelector(".grid-container");
        gridContainer.removeChild(gridRemove);
        
        gridCreation(nSquares);
    }


    
});

