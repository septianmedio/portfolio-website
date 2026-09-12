const menuIcon = document.querySelector('#menu-icon');
const navMenu = document.querySelector('.nav-links');

menuIcon.onclick = () => {
    navMenu.classList.toggle('.active');
};