// Get the counter element
const counterElement = document.getElementById('counter');

// Initialize the timer value
let timerValue = 0;

// // Create an interval to increment the timer every second
// setInterval(() => {
//   timerValue++;
//   counterElement.textContent = timerValue;
// }, 1000);
// Get the plus and minus buttons
const plusButton = document.getElementById('plus');
const minusButton = document.getElementById('minus');

// Add event listeners to the buttons
plusButton.addEventListener('click', () => {
  timerValue++;
  counterElement.textContent = timerValue;
});

minusButton.addEventListener('click', () => {
  timerValue--;
  counterElement.textContent = timerValue;

})
;
// Get the heart button and likes list
const heartButton = document.getElementById('heart');
const likesList = document.querySelector('.likes');

// Initialize the likes object
const likes = {};

// Add event listener to the heart button
heartButton.addEventListener('click', () => {
  const currentCounterValue = timerValue;
  if (!likes[currentCounterValue]) {
    likes[currentCounterValue] = 1;
  } else {
    likes[currentCounterValue]++;
  }
  const likesText = `Likes: ${likes[currentCounterValue]}`;
  const likesListItem = document.createElement('li');
  likesListItem.textContent = `${currentCounterValue} - ${likesText}`;
  likesList.appendChild(likesListItem);
});