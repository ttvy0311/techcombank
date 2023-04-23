const userLanguageDropdownList = document.querySelector('.header-top-right-language');
const languageArrow = document.querySelector('.language-dropdown-arrow');
const userLanguageDropdown = document.getElementById('language-dropdown');
userLanguageDropdownList.addEventListener('click', openLanguageDropdown)
let isUserLanguageDropdownClicked = false;
function openLanguageDropdown() {
    if (isUserLanguageDropdownClicked) {
        languageArrow.classList.remove('language-arrow-rotate')
        userLanguageDropdown.classList.remove('show')
        isUserLanguageDropdownClicked = false
    }
    else {
        languageArrow.classList.add('language-arrow-rotate')
        userLanguageDropdown.classList.add('show')
        isUserLanguageDropdownClicked = true;
    }
}
