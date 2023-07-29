const container = document.querySelector('.container');
let count = 0;
let isPainting = false;

function createGrid(x){
    for(let i = 0 + 1 ; i <= x * x; i++){
        const grid = document.createElement('div');
        grid.classList.add('grid');// adds classes to each created grids
        container.appendChild(grid); 
        count++;// show th exact number of grids created;
    }
}

createGrid(16);

const sketch = document.querySelectorAll('.grid');
sketch.forEach(grid => grid.addEventListener('mousedown', startColoring));
window.addEventListener('mouseup', stopColoring);


function startColoring(e){
    isPainting = true;
}

function stopColoring(){
    isPainting = false;
}

container.addEventListener('mousemove', function(e){
    if(isPainting){
        changeColor.call(e.target);
}})

function changeColor(e) {
   
    this.classList.add('change');
};

/* game control*/
 var clicked = 0;
 var btn = document.querySelector('eraser')
 
 function eraseDiv(){
        const erase = document.querySelectorAll('.grid');
    erase.forEach(grid => grid.addEventListener('click', function(){
        this.classList.remove('change')}))
  
};

// resets the Page 
function refreshPage(){
    console.log(sketch);
};