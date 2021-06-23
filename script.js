/* creates the variables */
let userInputOne = 0
let userInputTwo = 0
let area = 0
let circumference = 0
let radius = 0

/* The program will wait for the calculate button to be clicked then it will activate the calculateOne function */
document.getElementById('button-one').addEventListener('click', calculateOne)
/* */
function calculateOne (area) {
  userInputOne = document.getElementById('input-one').value 
  userInputOne = parseInt(userInputOne)
  radius = userInputOne / 2
  area = Math.PI * radius ** 2
  document.getElementById('answer-one').innerHTML = 'The area of this circle is ' + area
}