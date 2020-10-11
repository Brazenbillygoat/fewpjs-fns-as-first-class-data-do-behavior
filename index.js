/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
const greet = (time) => {
  let currentHour = time.split(':')
  if (currentHour[0] < 12) {
    return "Good Morning"
  } else if (currentHour[0] >= 12 && currentHour[0] < 17) {
    return "Good Afternoon"
  } else {
    return "Good Evening"
  }
}

/* Write your implementation of displayMessage() */
const displayMessage = (message) => {
  let greet = document.querySelector('#greeting');
  greet.innerHTML = message;
}