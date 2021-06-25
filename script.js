/* creates the variables */
let userInputOne = 0
let userInputTwo = 0
let area = 0
let circumference = 0
let radius = 0

/* The program will wait for the calculate button to be clicked then it will activate the calculateOne function */
document.getElementById('button-one').addEventListener('click', calculate)
/* The */
function calculate (area) {
  userInputOne = document.getElementById('input-one').value 
  userInputOne = parseInt(userInputOne)
  radius = userInputOne / 2
  area = Math.PI * radius ** 2
  area = area.toFixed(2)
  document.getElementById('answer-one').innerHTML = ('The area of this circle is ' + area)
}

/* */
document.getElementById('button-two').addEventListener('click', calculate)

/* */
function calculate (circumference) {
  userInputTwo = document.getElementById('input-two').value
  userInputTwo = parseInt(userInputTwo)
  radius = userInputTwo / 2
  circumference = Math.PI * radius * 2
  circumference = circumfernce.toFixed(2)
  document.getElementById('answer-two').innerHTML = ('The circumference of this circle is ' + circumference)
}
