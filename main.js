/*******************
 * OUR HELPER CODE *
*******************/

/*
 * Here we add the squares to the canvas dynamically.
 * You can mostly leave this section alone!
 * But if you want to change how wide the canvas is,
 * there are just two steps:
 * 
 * 1. Change the `gridWidth` value below.
 * 2. Change the `grid-template-rows` and
 * `grid-template-columns` to match.
 *
 * To make the second one happen, the number to change
 * is the first argument to `repeat`, currently set at 10.
 */
const gridWidth = 10;
let count = 0;
while (count <= gridWidth * gridWidth) {
  const canvas = document.querySelector('.canvas');
  const div = document.createElement('div');
  div.className = 'square color-5';
  canvas.appendChild(div);
  count++;
}



// You probably should NOT do these in the order below.
// That is, you probably should NOT do all the queries,
// THEN all the functions,
// THEN all the wiring.

// Instead, it'll be easier if you go one action at a time!
// So, add a query for the palette colors.
// THEN add an event listener function for what happens when one is clicked.
// THEN wire those two together, so that when the palette elements are clicked,
// the function runs.
//
// And proceed from there to getting the squares working.
//

// ALSO.
// You do not have to follow the sections below. If you're doing your functions inline, it doesn't make a lot of sense to separate the event listener functions from their wiring!

/***********
 * QUERIES *
***********/

// Add queries for all your squares, palette colors, and brush here.
// (Note the singular or plural used in that sentence!)

const squares = document.querySelectorAll('.square')
const paintBrush = document.querySelector('.brush')
const colorPalette = document.querySelectorAll('.palette-color')
const color1 = document.querySelector('palette-color.color-1')
const color2 = document.querySelector('palette-color.color-2')
const color3 = document.querySelector('palette-color.color-3')
const color4 = document.querySelector('palette-color.color-4')
const color5 = document.querySelector('palette-color.color-5')
const currentColor = document.querySelector('.current-brush')
const canvas = document.querySelector('.canvas')


/****************************
 * EVENT LISTENER FUNCTIONS *
****************************/


// const square = squares.forEach.addEventListener('click', canvas)

// const paletteColors = colorPalette.forEach.addEventListener('click', colorPalette)

// const pickColor = squares.addEventListener('click', square)

/**************************
 * WIRING IT ALL TOGETHER *
**************************/


// Now: wiring up our event listeners to our html node elements.
// You'll need to add the appropriate event listener for each
// square and for each palette color from the functions you
// wrote above.


const pickColor = (element) => {
  return element.classList[1]
}


const changeClickedSquare = (event) => {
  const whatWasPicked = event.target
  whatWasPicked.classList.replace(pickColor(whatWasPicked), pickColor(currentColor))
}


for (const square of squares) {
  square.addEventListener('click', changeClickedSquare)
}


const changePaletteColor = (event) => {
  whatWasPicked = event.target
  currentColor.classList.replace(pickColor(currentColor), pickColor(whatWasPicked))
}


for (const color of colorPalette) {
  color.addEventListener('click', changePaletteColor)
}

// ------------------------------------------
const todoItems = document.querySelectorAll('.todo')

const print = (event) => {
  const whatWasClicked = event.target
  whatWasClicked.style.color = 'red'
  whatWasClicked.innerText = 'done'
}

for (const todo of todoItems) {
  todo.addEventListener('click', print)
}