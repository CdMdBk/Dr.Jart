//info

let infoHeight = document.querySelector('.info-container');
let infoTextHeight = document.querySelector('.info__text-block');

window.addEventListener('resize', infoSize);
infoSize();

function infoSize() {
    infoHeight.style.height = `calc(100px + ${infoTextHeight.offsetHeight}px + 40px)`;
};

//register

let saleHeight = document.querySelector('.sale_bg');
let registerHeight = document.querySelector('.register_bg');

window.addEventListener('resize', changeRegisterHeight);
changeRegisterHeight();

function changeRegisterHeight() {
    registerHeight.style.height = saleHeight.offsetHeight + 'px';
};