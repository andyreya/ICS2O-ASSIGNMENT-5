// creates the variables

let userInputOne = 0
let radius = 0

// The program will wait for the calculate button to be clicked then it will activate the calculateOne function 
document.getElementById('button-one').addEventListener('click', calculate)

// the function changes the input into an integer and creates a value for the radius. It calculates the value of the area and rounds it to two decimal places. It then displays the statement 'The area of this circle is ' and the area afterwards

function calculate (area) {
  userInputOne = document.getElementById('input-one').value 
  userInputOne = parseInt(userInputOne)
  radius = userInputOne / 2
  area = Math.PI * radius ** 2
  area = area.toFixed(2)
  document.getElementById('answer-one').innerHTML = ('The area of this circle is ' + area)
}
