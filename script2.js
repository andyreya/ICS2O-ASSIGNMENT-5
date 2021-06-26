// creates variables

let userInputTwo = 0
let radius = 0

// makes action occur when button is clicked
document.getElementById('button-two').addEventListener('click', calculate)

// the function changes the input into an integer and creates a value for the radius. It calculates the value of the cicumference and rounds it to two decimal places. It then displays the statement 'The circumference of this circle is ' and the cicumference afterwards

function calculate (circumference) {
  userInputTwo = document.getElementById('input-two').value
  userInputTwo = parseInt(userInputTwo)
  radius = userInputTwo / 2
  circumference = Math.PI * radius * 2
  circumference = circumference.toFixed(2)
  document.getElementById('answer-two').innerHTML = ('The circumference of this circle is ' + circumference)
}
