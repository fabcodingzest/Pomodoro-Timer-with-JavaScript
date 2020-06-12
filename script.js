const wrapper = document.querySelector('.wrapper');
const settingIcon = document.querySelectorAll('.settings-icon');
const settings = document.querySelector('.settings');
const bodyBlackout = document.querySelector('.body-blackout');
const button = document.querySelector('.btn');
const sessionVal = document.querySelector('.session-value');
const breakVal = document.querySelector('.break-value');
const sessionSlider = document.querySelector('#session');
const breakSlider = document.querySelector('#break');
const timerDisplay = document.querySelector('.timer');
const timerHead = document.querySelector('.timer-head');
const play = document.querySelector('.play');
const pause = document.querySelector('.pause');
const restart = document.querySelector('.restart');
const completedSessionsHead = document.querySelector('h3');

timerDisplay.textContent = '25:00'
let countdown;
let isTimerRunning = false;
let completedSessions = 0;
completedSessionsHead.textContent = `Congratulations you have ${completedSessions} completed ${completedSessions === 0 || 1  ? 'session' : 'sessions'}`;

// Function to humanize a number with the correct suffix
function humanize(number) {
  if (number % 100 >= 11 && number % 100 <= 13)
    return number + "th";
  switch (number % 10) {
    case 1:
      return number + "st";
    case 2:
      return number + "nd";
    case 3:
      return number + "rd";
  }
  return number + "th";
}

function addCompletedSession () {
  completedSessionsHead.textContent = `Congratulations you have ${completedSessions} completed ${completedSessions === 0 || 1 ? 'session' : 'sessions'}`;
}

function timer (seconds, type) {
  clearInterval(countdown);
  const now = Date.now();
  const then = now + seconds * 1000;
  countdown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000);
    // check if we should stop
    if (secondsLeft < 0) {
      clearInterval(countdown);
      
      switch (type) {
        case "session":
          timerHead.textContent = `Take a Break`;
          timerDisplay.textContent = `${breakSlider.value < 10 ? '0': ''}${breakSlider.value}:00`;
          completedSessions++;
          addCompletedSession();
          console.log(completedSessions);
          timer(breakSlider.value * 60, "Break");
          break;
        case "Break":
          timerHead.textContent = "Session";
          timer(sessionSlider.value * 60, "session");
          break;
      }
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
  bodyBlackout.classList.toggle('is-blacked-out')
  settings.classList.toggle("open");
}

// handle reset button
function handleReset () {
  sessionSlider.value = '25';
  sessionVal.textContent = '25';
  breakVal.textContent = '1';
  breakSlider.value = '1';
}

function handleSliderChange (val, element) {
  handlePause();
  element.textContent = val;
  if (element.classList.contains('session-value')) {
    timerDisplay.textContent = `${val}:00`
  }
}

function handlePlay () {
  let timerArray = timerDisplay.textContent.split(':')
  let timerSeconds = parseInt(timerArray[ 0 ]) * 60 + parseInt(timerArray[ 1 ])
  if (!isTimerRunning) {
    timer(timerSeconds, "session");
    isTimerRunning = true;
  }
}

function handlePause () {
  if (isTimerRunning) {
    clearInterval(countdown);
    isTimerRunning = false;
  }
}

function handleRestart () {
  handlePause();
  if (timerHead.textContent === "Session") {
    timerDisplay.textContent = `${sessionSlider.value}:00`;
  } else {
    timerDisplay.textContent = `${breakSlider.value}:00`;
  }
}

function handleBlackoutClick() {
  settings.classList.remove('open');
  bodyBlackout.classList.remove('is-blacked-out');
}

settingIcon.forEach(settingsIcon => settingsIcon.addEventListener('click', handleSettings));
bodyBlackout.addEventListener('click', handleBlackoutClick);
button.addEventListener('click', handleReset);
sessionSlider.addEventListener('change', (e) => handleSliderChange(e.currentTarget.value, sessionVal));
breakSlider.addEventListener('change', (e) => handleSliderChange(e.currentTarget.value, breakVal));
play.addEventListener('click', handlePlay);
pause.addEventListener('click', handlePause);
restart.addEventListener('click', handleRestart);