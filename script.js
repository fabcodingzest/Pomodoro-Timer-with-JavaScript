const wrapper = document.querySelector('.wrapper');
const settingIcon = document.querySelectorAll('.settings-icon');
const settings = document.querySelector('.settings');
const settingsBg = document.querySelector('.settings__bg');
const button = document.querySelector('.btn');
const sessionVal = document.querySelector('.session-value');
const breakVal = document.querySelector('.break-value');
const sessionSlider = document.querySelector('#session');
const breakSlider = document.querySelector('#break');

// Handle Settings CLick menu
function handleSettings () {
  settingsBg.classList.toggle("open");
  // wrapper.addEventListener('click', function () {
    // settings.classList.remove("open")
  // })
}

// handle reset button
function handleReset () {
  sessionSlider.value = '25';
  sessionVal.textContent = '25';
  breakVal.textContent = '5';
  breakSlider.value = '5';
}

function handleSliderChange (val, element) {
  console.log(val, element);
  element.textContent = val;
  
}

settingIcon.forEach(settingsIcon => settingsIcon.addEventListener('click', handleSettings))
button.addEventListener('click', handleReset);
sessionSlider.addEventListener('change', (e) => handleSliderChange(e.currentTarget.value, sessionVal));
breakSlider.addEventListener('change', (e) => handleSliderChange(e.currentTarget.value, breakVal));
