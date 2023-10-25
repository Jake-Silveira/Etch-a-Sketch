const gridContainer = document.getElementById('container');
const resetBtn = document.querySelector('#resetBtn');
const gridSize = document.querySelector('#gridSize');


const gridItem = document.getElementsByClassName('grid-item');

makeRows(16,16);

for(let i = 0; i < gridItem.length; i++) {
    gridItem[i].onmouseover = function () {
        console.log('mouseover success');
        randomColor(gridItem[i]);
    };
};



gridSize.addEventListener('click', () =>  {
    let size = prompt('Enter a number 2 - 100','16');
    
    if(size <= 100 && size >= 2){

            while (gridContainer.firstChild) {
                gridContainer.removeChild(gridContainer.lastChild);
            };

        makeRows(size,size);
    
        for(let i = 0; i < gridItem.length; i++) {
            gridItem[i].onmouseover = function () {
                randomColor(gridItem[i]);
            };
        };
    }else console.log('too little or too many squares');
});

function makeRows(rows, cols){
    gridContainer.style.setProperty('--grid-rows', rows);
    gridContainer.style.setProperty('--grid-cols', cols);

    for(c = 0; c < (rows * cols); c++){
        let cell = document.createElement('div');
        gridContainer.appendChild(cell).className = "grid-item"
        cell.style.backgroundColor = 'black';
    };
};

function randomColor(gridItemi){
    const randomColor = Math.floor(Math.random() * 16777721).toString(16);
    gridItemi.style.backgroundColor = '#' + randomColor;
};






//I accidentally created an eraser..
/*eraserBtn.addEventListener('click', () =>  {
    for(let i = 0; i < gridItem.length; i++) {
        gridItem[i].onmouseover = function () {
            resetGrid(gridItem[i]);
        };
    };
});

function eraser(gridItemi){
    gridItemi.style.backgroundColor = 'black';
}; */