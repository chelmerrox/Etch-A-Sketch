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

function changeColorOnMouseEnter(e){       
    e.target.style.backgroundColor = 'black';
}

function changeColorOnMouseLeave(e){
    e.target.style.backgroundColor = 'rgb(0, 195, 255)'; 
}

function resetGridSize(){
    removeGrid();

    currentGridSize = initialGridSize;

    createGrid(initialGridSize);
}

function removeGrid(){
    while(subContainer3_2.hasChildNodes()){

        subContainer3_2.removeChild(subContainer3_2.firstChild);
    }
}

function askForUserInput(){
    userInput = prompt('Enter a number from 2 to 100 to change the size of your sketch pad: ', '');

    if (checkIfNumericString(userInput) === true){
        userInput = convertToNumber(userInput);

        if (checkIfInteger(userInput) === true){

            if(checkIfWithinBoundary(userInput) === true){
                removeGrid();
                 
                currentGridSize = userInput;

                createGrid(userInput);
            } else {

                alert('Please enter an integer/a whole number from 2 to 100.');
            }
        } else {

            alert('Please enter an integer/a whole number.');
        }
    } else {

        alert('Please enter a number.');
    }
}

function checkIfNumericString(userInput){
    let numbers = /^[0-9]+$/;   //regular expression

    let x = userInput;

    return ((x.match(numbers))? true : false);
}

function convertToNumber(userInput){
    userInput = Number(userInput);

    return userInput;
}

function checkIfInteger(userInput){
    return (Number.isInteger(userInput)? true : false);   
}

function checkIfWithinBoundary(userInput){
    return ((userInput >= min_NumberOfSquares && userInput < 101)? true : false);
}

function removeDrawing(e){    
    for (row = 1; row <= currentGridSize; row++){
        for (square = 1; square <= currentGridSize; square++){
            aSquareDiv = document.getElementById(`square-${row}-${square}`);
            aSquareDiv.style.backgroundColor = 'white';
        }
    }
}

