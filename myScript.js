const container = document.querySelector('.container');

const grid = document.createElement('div');
grid.setAttribute('class', 'grid');
container.appendChild(grid);

// gridContainer.setAttribute('style', 'width: 360px; border: 2px solid blue; display: flex; flex-wrap: wrap; justify-content: center; box-sizing: border-box;');



for (let i = 1; i <= 16; i++) {
    for (let x = 1; x <= 16; x++) {
        const div = document.createElement('div');
        div.setAttribute('class', 'grid-cell');
        div.textContent = 'x';
        grid.appendChild(div);
    }
}



// https://bluegalaxy.info/codewalk/2018/03/01/html-css-create-square-grid-using-css-grid/