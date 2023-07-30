const container = document.querySelector('.container');
let count = 0;
let isPainting = false;

let x = 16;

function createGrid(x){
    for(let i = 0 + 1 ; i <= x * x; i++){
        const grid = document.createElement('div');
        grid.classList.add('grid');// adds classes to each created grids
        container.appendChild(grid); 
        count++;// show th exact number of grids created;
    }
}

createGrid(x);

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

/* -------------------- game control bar start*/
 var clicked = 0;
 var btn = document.querySelector('eraser')
 
 function eraseDiv(){
        const erase = document.querySelectorAll('.grid');
    erase.forEach(grid => grid.addEventListener('click', function(){
        this.classList.remove('change')}))
  
};

const changeBackground = document.getElementById('backgroundColor');

changeBackground.addEventListener('change', function(e){
    // selects the value of the input color element
    const selectColor = changeBackground.value;
    const grid = document.querySelectorAll('.grid');
    grid.forEach(div => div.style.borderWidth='0.5px')
    grid.forEach(div => div.style.borderStyle = 'solid');

    if(selectColor === '#000000'){ // checks if the color is black
        console.log(selectColor);
        grid.forEach(div => div.style.borderColor='white');
        container.style.backgroundColor = selectColor;
     }else {
        grid.forEach(div => div.style.borderColor='#000000');

        // assign the selected color to the container
        container.style.backgroundColor = selectColor;
}
})


// ---------------- controls bar end

// resets the Page 
function refreshPage(){
    const remove = document.querySelectorAll('.change');
    remove.forEach(div => div.classList.remove('change'));
}

