const wrapper = document.querySelector('.wrapper');
const settingIcon = document.querySelectorAll('.settings-icon');
const settings = document.querySelector('.settings');
const settingsBg = document.querySelector('.settings__bg');
const button = document.querySelector('.btn');
const sliders = document.querySelectorAll('input[type="range"]');
const sessionSlider = document.querySelector('#session');
const breakSlider = document.querySelector('#break');

// Handle Settings CLick menu
function handleSettings () {
  settingsBg.classList.toggle("open");
  // wrapper.addEventListener('click', function () {
  //   // settings.classList.remove("open")
  // })
}

// handle reset button
function handleReset () {
  sessionSlider.value = '25';
  breakSlider.value = '5';
}

function handleSliderChange () {
  
}

settingIcon.forEach(settingsIcon => settingsIcon.addEventListener('click', handleSettings))
button.addEventListener('click', handleReset);
sliders.forEach(slider => {
  slider.addEventListener('change', handleSliderChange);
})