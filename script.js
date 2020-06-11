const wrapper = document.querySelector('.wrapper');
const settingIcon = document.querySelectorAll('.settings-icon');
const settings = document.querySelector('.settings');
const settingsBg = document.querySelector('.settings__bg');
const button = document.querySelector('.btn');
const sessionVal = document.querySelector('.session-value');
const breakVal = document.querySelector('.break-value');
const sessionSlider = document.querySelector('#session');
const breakSlider = document.querySelector('#break');
const timerDisplay = document.querySelector('.timer');
const play = document.querySelector('.play');
const pause = document.querySelector('.pause');

timerDisplay.textContent = '25:00'
let countdown;

function timer (seconds) {
  clearInterval(countdown);
  const now = Date.now();
  const then = now + seconds * 1000;
  countdown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000);
    // check if we should stop
    if (secondsLeft <= 0) {
      clearInterval(countdown);
      return;
    }
    // display it
    displayTimeLeft(secondsLeft);
  }, 1000)
}

function displayTimeLeft (seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainderSeconds = seconds % 60;
  const display = `${minutes < 10 ? '0': ''}${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`;
  timerDisplay.textContent = display;
}


// Handle Settings CLick menu
function handleSettings () {
  settingsBg.classList.toggle("open");
}

// handle reset button
function handleReset () {
  sessionSlider.value = '25';
  sessionVal.textContent = '25';
  breakVal.textContent = '5';
  breakSlider.value = '5';
}

function handleSliderChange (val, element) {
  element.textContent = val;
}

function handlePlay () {
  console.log(sessionVal);
  timer(sessionSlider.value*60);
}

function handlePause () {
  let pauseTime = timerDisplay.textContent;
  console.log(pauseTime);
  clearInterval(countdown);
}
settingIcon.forEach(settingsIcon => settingsIcon.addEventListener('click', handleSettings))
button.addEventListener('click', handleReset);
sessionSlider.addEventListener('change', (e) => handleSliderChange(e.currentTarget.value, sessionVal));
breakSlider.addEventListener('change', (e) => handleSliderChange(e.currentTarget.value, breakVal));
play.addEventListener('click', handlePlay);
pause.addEventListener('click', handlePause);