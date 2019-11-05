// Variable
var temp = 60;

// DOM references
var temperatureEl;
var addButton;
var subtractButton;

// Event Listeners - one for each button
document.addEventListener('DOMContentLoaded', function (e) {
  temperatureEl = document.getElementById('temperature');
  addButton = document.getElementById('add');
  subtractButton = document.getElementById('subtract');

  addButton.addEventListener('click', function (e) {
    calculate('add')
  })

  subtractButton.addEventListener('click', function (e) {
    calculate('subtract')
  })
})

function calculate(button) {
  // if our button is the add button
  if (button === 'add') {
    // take the current temperature
    // add one
    temp += 1;
    // change the temperature element text content to display the new thing
    temperatureEl.textContent = temp + ' degrees';

    // if our button is the subtract button
  } else if (button === 'subtract') {
    // take the current temperature
    // subtract one
    temp -= 1;
    // change the temperature element text content to display the new thing
    temperatureEl.textContent = temp + ' degrees';

    // just in case and also demonstration purposes
  } else {
    console.log('something went wrong! 🤷🏻‍')
  }
}


// want some sort of variable to hold the temp on the script side - var temp
// get elements from the html side to the back
  // what do we need to be able to interact with on this page?
    // temp display, add button, subtract button