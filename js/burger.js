const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav__list');
const navBg = document.querySelector('.nav_bg_inactive');
const arrList = document.querySelectorAll('.nav-ul__li');
const lastLinkNav = document.querySelector('#account-link');

burger.addEventListener('click', burgerClick);

window.addEventListener('resize', checkingDevice);
checkingDevice();

lastLinkNav.addEventListener('click', navRemove);

for (let index = 0; index < arrList.length; index++) {
    arrList[index].addEventListener('click', navRemove);
};

function checkingDevice() {
    if (window.screen.width > 768) {
        navRemove();
    };
};

function burgerClick() {
    nav.classList.toggle('nav__list_active');
    navBg.classList.toggle('nav_bg-active');
    document.body.classList.toggle('body_no-scroll');
};

function navRemove() {
    nav.classList.remove('nav__list_active');
    navBg.classList.remove('nav_bg-active');
    document.body.classList.remove('body_no-scroll');
};