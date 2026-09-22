// DROPDOWN FOR MOBILE //
const dropdown_button = document.querySelector('.has-dropdown');
const menu = document.querySelector('.dropdown-menu');
const is_mobile = window.matchMedia("(max-width: 768px)");

function setupDropdown() {
  if (window.matchMedia("(max-width: 768px)").matches) {
    dropdown_button.addEventListener('click', toggle);
  }
}
function toggle(e) {
  e.preventDefault();
  menu.classList.toggle('open');
}
setupDropdown();