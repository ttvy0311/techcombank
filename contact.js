const userDropdownList = document.querySelector('.header-top-left-list');
const arrow = document.querySelector('.header-top-left-list > i');
const userDropdown = document.getElementById('dropdown');
userDropdownList.addEventListener('click', openDropdown);
let isClicked = false;
function openDropdown() {
    if (isClicked == true) {
        arrow.classList.remove('arrow-rotate')
        userDropdown.classList.remove('show')
        isClicked = false;
    } else {
        arrow.classList.add('arrow-rotate')
        userDropdown.classList.add('show')
        isClicked = true;
    }
}