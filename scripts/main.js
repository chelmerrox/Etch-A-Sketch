/*Variable declarations*/
const initialGridSize = 16;
let currentGridSize;
let min_NumberOfSquares = 2;
let row;
let rows;
let square;
let squareDiv;
let userInput;

currentGridSize = initialGridSize;

const subContainer3_2 = document.getElementById('subcontainer-3-2');
const changeGridSize = document.getElementById('change-grid-size');
const erase = document.getElementById('erase');
const reset = document.getElementById('reset');

let aSquareDiv;

/*Function declarations */

function createGrid(gridSize){
    for (row = 1; row <= gridSize; row++){

        rows = document.createElement('div');
        rows.setAttribute('class', 'rows');
        rows.setAttribute('id',`row-${row}`);
        
        for (square = 1; square <= gridSize; square++){

            squareDiv = document.createElement('div');
            squareDiv.setAttribute('class', 'squares');
            squareDiv.setAttribute('id', `square-${row}-${square}`);

            squareDiv.addEventListener('mouseenter', changeColorOnMouseEnter);
            squareDiv.addEventListener('mouseleave', changeColorOnMouseLeave);
            
            rows.appendChild(squareDiv);
        }
        subContainer3_2.appendChild(rows);  
    }
}