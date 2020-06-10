const settingIcon = document.querySelectorAll('.settings-icon');
const settings = document.querySelector('.settings');
const settingsBg = document.querySelector('.settings__bg');
const wrapper = document.querySelector('.wrapper');

// Handle Settings CLick menu
function handleSettings () {
  settingsBg.classList.toggle("open");
  // wrapper.addEventListener('click', function () {
  //   // settings.classList.remove("open")
  // })
}

settingIcon.forEach(settingsIcon => settingsIcon.addEventListener('click', handleSettings))