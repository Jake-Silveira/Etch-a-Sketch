const gridContainer = document.getElementById('gridContainer');
const resetBtn = document.querySelector('#resetBtn');
const gridSize = document.querySelector('#gridSize');

const eraserBtn = document.querySelector('#eraserBtn');
const redBtn = document.querySelector('#redBtn');
const orangeBtn = document.querySelector('#orangeBtn');
const yellowBtn = document.querySelector('#yellowBtn');
const greenBtn = document.querySelector('#greenBtn');
const blueBtn = document.querySelector('#blueBtn');
const purpleBtn = document.querySelector('#purpleBtn');
const randomBtn = document.querySelector('#randomBtn');

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


resetBtn.addEventListener('click', () =>  {
    for(let i = 0; i < gridItem.length; i++) {
        gridItem[i].style.backgroundColor = 'black';
    };
});

eraserBtn.addEventListener('click', () =>  {
    for(let i = 0; i < gridItem.length; i++) {
        gridItem[i].onmouseover = function () {
            eraser(gridItem[i]);
        };
    };
});

redBtn.addEventListener('click', () => {
    for(let i = 0; i < gridItem.length; i ++){
        gridItem[i].onmouseover = function () {
            redShades(gridItem[i]);
        }
    }        
});

orangeBtn.addEventListener('click', () => {
    for(let i = 0; i < gridItem.length; i ++){
        gridItem[i].onmouseover = function () {
            orangeShades(gridItem[i]);
        }
    }        
});

yellowBtn.addEventListener('click', () => {
    for(let i = 0; i < gridItem.length; i ++){
        gridItem[i].onmouseover = function () {
            yellowShades(gridItem[i]);
        }
    }        
});

greenBtn.addEventListener('click', () => { 
    for(let i = 0; i < gridItem.length; i ++){
        gridItem[i].onmouseover = function () {
            greenShades(gridItem[i]);
        }
    }
});

blueBtn.addEventListener('click', () => {
    for(let i = 0; i < gridItem.length; i ++){
        gridItem[i].onmouseover = function () {
            blueShades(gridItem[i]);
        }
    }        
});

purpleBtn.addEventListener('click', () => {
    for(let i = 0; i < gridItem.length; i ++){
        gridItem[i].onmouseover = function () {
            purpleShades(gridItem[i]);
        }
    }        
});

randomBtn.addEventListener('click', () => {
    for(let i = 0; i < gridItem.length; i ++){
        gridItem[i].onmouseover = function () {
            randomColor(gridItem[i]);
        }
    }        
});

function randomColor(gridItemi){
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    gridItemi.style.backgroundColor = '#' + randomColor;
};

function eraser(gridItemi){
    gridItemi.style.backgroundColor = 'black';
}; 

function redShades(gridItemi){
    var min = 175
    var max = 250
    var red = Math.floor(Math.random() * (min - max + 1)) + min;
    gridItemi.style.backgroundColor = "rgb(" + red + ",0,0)";
};

function orangeShades(gridItemi){
    var min = 175
    var max = 250
    var orange = Math.floor(Math.random() * (min - max + 1)) + min;
    gridItemi.style.backgroundColor = "rgb(255," + orange + ",0)";
};

function yellowShades(gridItemi){
    var min = 100
    var max = 175
    var yellow = Math.floor(Math.random() * (min - max + 1)) + min;
    gridItemi.style.backgroundColor = "rgb(255,255," + yellow + ")";
};

function greenShades(gridItemi){
    var min = 175
    var max = 250
    var green = Math.floor(Math.random() * (min - max + 1)) + min;
    gridItemi.style.backgroundColor = "rgb(0," + green + ",0)";
};

function blueShades(gridItemi){
    var min = 175
    var max = 250
    var blue = Math.floor(Math.random() * (min - max + 1)) + min;
    gridItemi.style.backgroundColor = "rgb(0,0," + blue + ")" ;
};

function purpleShades(gridItemi){
    var min = 175
    var max = 250
    var purple = Math.floor(Math.random() * (min - max + 1)) + min;
    gridItemi.style.backgroundColor = "rgb(255," + purple + ",255)";
};