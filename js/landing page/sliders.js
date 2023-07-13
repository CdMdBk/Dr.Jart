//First slider

let sliderWindowWidth = document.querySelector('.slider__window');
let sliderFullWindowWidth = document.querySelector('.slider__full-window');
const arrSliderCard = document.querySelectorAll('.slider__card');
const arrowLeft = document.querySelector('.slider__arrow_right');
const arrowRight = document.querySelector('.slider__arrow_left');
let count = 0;

window.addEventListener('resize', function(){
    sliderSize();
    arrowRightClick();
    countSize();
});
sliderSize();

arrowRight.addEventListener('click', function(){
    count++;
    arrowRightClick();
});

arrowLeft.addEventListener('click', function(){
    count--;
    arrowLeftClick();
});

function sliderSize() {
    for (let index = 0; index < arrSliderCard.length; index++) {
        if (window.screen.width > 992) {
            arrSliderCard[index].style.width = `${sliderWindowWidth.offsetWidth*1/3 - 20}px`;
            sliderFullWindowWidth.style.width = sliderWindowWidth.offsetWidth*arrSliderCard.length/3 + 'px';
        } else if (window.screen.width > 768) {
            arrSliderCard[index].style.width = `${sliderWindowWidth.offsetWidth*1/2 - 15}px`;
            sliderFullWindowWidth.style.width = sliderWindowWidth.offsetWidth*arrSliderCard.length/2 + 'px';
        } else if (window.screen.width < 768) {
            arrSliderCard[index].style.width = `${sliderWindowWidth.offsetWidth - 20}px`;
            sliderFullWindowWidth.style.width = sliderWindowWidth.offsetWidth*arrSliderCard.length + 'px';
        };
    };
};

function arrowRightClick() {
    if ((window.screen.width > 992) && (count <= arrSliderCard.length - 3)) {
        sliderFullWindowWidth.style.left = -count*sliderWindowWidth.offsetWidth*1/3 + 'px';
    } else if ((window.screen.width < 992) && (window.screen.width > 768) && (count <= arrSliderCard.length - 2)) {
        sliderFullWindowWidth.style.left = -count*sliderWindowWidth.offsetWidth*1/2 + 'px';
    } else if ((window.screen.width < 768) && (count <= arrSliderCard.length - 1)) {
        sliderFullWindowWidth.style.left = -count*sliderWindowWidth.offsetWidth + 'px';
     } else {
        count--;
     };
};

function arrowLeftClick() {
    if ((window.screen.width > 992) && (count >= 0)) {
        sliderFullWindowWidth.style.left = -count*sliderWindowWidth.offsetWidth*1/3 + 'px';
    } else if ((window.screen.width < 992) && (window.screen.width > 768) && (count >= 0)) {
        sliderFullWindowWidth.style.left = -count*sliderWindowWidth.offsetWidth*1/2 + 'px';
    } else if ((window.screen.width < 768) && (count >= 0)) {
        sliderFullWindowWidth.style.left = -count*sliderWindowWidth.offsetWidth + 'px';
    } else {
        count = 0;
    };
};

function countSize() {
    if ((window.screen.width > 992) && (count >= arrSliderCard.length - 3)) {
        count = arrSliderCard.length - 3;
    } else if ((window.screen.width < 992) && (window.screen.width > 768) && (count >= arrSliderCard.length - 2)) {
        count = arrSliderCard.length - 2;
    };
};

//Second slider

let sliderWindowWidth2 = document.querySelector('.slider__window2');
let sliderFullWindowWidth2 = document.querySelector('.slider__full-window2');
const arrSliderCard2 = document.querySelectorAll('.slider__card2');
const arrowLeft2 = document.querySelector('.slider__arrow_right2');
const arrowRight2 = document.querySelector('.slider__arrow_left2');
let count2 = 0;

window.addEventListener('resize', function(){
    sliderSize2();
    arrowRightClick2();
    countSize2();
});
sliderSize2();

arrowRight2.addEventListener('click', function(){
    count2++;
    arrowRightClick2();
});

arrowLeft2.addEventListener('click', function(){
    count2--;
    arrowLeftClick2();
});

function sliderSize2() {
    for (let index = 0; index < arrSliderCard2.length; index++) {
        if (window.screen.width > 992) {
            arrSliderCard2[index].style.width = `${sliderWindowWidth2.offsetWidth*1/3 - 20}px`;
            sliderFullWindowWidth2.style.width = sliderWindowWidth2.offsetWidth*arrSliderCard2.length/3 + 'px';
        } else if (window.screen.width > 768) {
            arrSliderCard2[index].style.width = `${sliderWindowWidth2.offsetWidth*1/2 - 15}px`;
            sliderFullWindowWidth2.style.width = sliderWindowWidth2.offsetWidth*arrSliderCard2.length/2 + 'px';
        } else if (window.screen.width < 768) {
            arrSliderCard2[index].style.width = `${sliderWindowWidth2.offsetWidth - 20}px`;
            sliderFullWindowWidth2.style.width = sliderWindowWidth2.offsetWidth*arrSliderCard2.length + 'px';
        };
    };
};

function arrowRightClick2() {
    if ((window.screen.width > 992) && (count2 <= arrSliderCard2.length - 3)) {
        sliderFullWindowWidth2.style.left = -count2*sliderWindowWidth2.offsetWidth*1/3 + 'px';
    } else if ((window.screen.width < 992) && (window.screen.width > 768) && (count2 <= arrSliderCard2.length - 2)) {
        sliderFullWindowWidth2.style.left = -count2*sliderWindowWidth2.offsetWidth*1/2 + 'px';
    } else if ((window.screen.width < 768) && (count2 <= arrSliderCard2.length - 1)) {
        sliderFullWindowWidth2.style.left = -count2*sliderWindowWidth2.offsetWidth + 'px';
     } else {
        count2--;
     };
};

function arrowLeftClick2() {
    if ((window.screen.width > 992) && (count2 >= 0)) {
        sliderFullWindowWidth2.style.left = -count2*sliderWindowWidth2.offsetWidth*1/3 + 'px';
    } else if ((window.screen.width < 992) && (window.screen.width > 768) && (count2 >= 0)) {
        sliderFullWindowWidth2.style.left = -count2*sliderWindowWidth2.offsetWidth*1/2 + 'px';
    } else if ((window.screen.width < 768) && (count2 >= 0)) {
        sliderFullWindowWidth2.style.left = -count2*sliderWindowWidth2.offsetWidth + 'px';
    } else {
        count2 = 0;
    };
};

function countSize2() {
    if ((window.screen.width > 992) && (count2 >= arrSliderCard2.length - 3)) {
        count2 = arrSliderCard2.length - 3;
    } else if ((window.screen.width < 992) && (window.screen.width > 768) && (count2 >= arrSliderCard2.length - 2)) {
        count2 = arrSliderCard2.length - 2;
    };
};

//Third slider

let sliderWindowWidth3 = document.querySelector('.slider__window3');
let sliderFullWindowWidth3 = document.querySelector('.slider__full-window3');
const arrSliderCard3 = document.querySelectorAll('.slider__card3');
const arrowLeft3 = document.querySelector('.slider__arrow_right3');
const arrowRight3 = document.querySelector('.slider__arrow_left3');
let count3 = 0;

window.addEventListener('resize', function(){
    sliderSize3();
    arrowRightClick3();
    countSize3();
});
sliderSize3();

arrowRight3.addEventListener('click', function(){
    count3++;
    arrowRightClick3();
});

arrowLeft3.addEventListener('click', function(){
    count3--;
    arrowLeftClick3();
});

function sliderSize3() {
    for (let index = 0; index < arrSliderCard3.length; index++) {
        if (window.screen.width > 992) {
            arrSliderCard3[index].style.width = `${sliderWindowWidth3.offsetWidth*1/3 - 20}px`;
            sliderFullWindowWidth3.style.width = sliderWindowWidth3.offsetWidth*arrSliderCard3.length/3 + 'px';
        } else if (window.screen.width > 768) {
            arrSliderCard3[index].style.width = `${sliderWindowWidth3.offsetWidth*1/2 - 15}px`;
            sliderFullWindowWidth3.style.width = sliderWindowWidth3.offsetWidth*arrSliderCard3.length/2 + 'px';
        } else if (window.screen.width < 768) {
            arrSliderCard3[index].style.width = `${sliderWindowWidth3.offsetWidth - 20}px`;
            sliderFullWindowWidth3.style.width = sliderWindowWidth3.offsetWidth*arrSliderCard3.length + 'px';
        };
    };
};

function arrowRightClick3() {
    if ((window.screen.width > 992) && (count3 <= arrSliderCard3.length - 3)) {
        sliderFullWindowWidth3.style.left = -count3*sliderWindowWidth3.offsetWidth*1/3 + 'px';
    } else if ((window.screen.width < 992) && (window.screen.width > 768) && (count3 <= arrSliderCard3.length - 2)) {
        sliderFullWindowWidth3.style.left = -count3*sliderWindowWidth3.offsetWidth*1/2 + 'px';
    } else if ((window.screen.width < 768) && (count3 <= arrSliderCard3.length - 1)) {
        sliderFullWindowWidth3.style.left = -count3*sliderWindowWidth3.offsetWidth + 'px';
     } else {
        count3--;
     };
};

function arrowLeftClick3() {
    if ((window.screen.width > 992) && (count3 >= 0)) {
        sliderFullWindowWidth3.style.left = -count3*sliderWindowWidth3.offsetWidth*1/3 + 'px';
    } else if ((window.screen.width < 992) && (window.screen.width > 768) && (count3 >= 0)) {
        sliderFullWindowWidth3.style.left = -count3*sliderWindowWidth3.offsetWidth*1/2 + 'px';
    } else if ((window.screen.width < 768) && (count3 >= 0)) {
        sliderFullWindowWidth3.style.left = -count3*sliderWindowWidth3.offsetWidth + 'px';
    } else {
        count3 = 0;
    };
};

function countSize3() {
    if ((window.screen.width > 992) && (count3 >= arrSliderCard3.length - 3)) {
        count3 = arrSliderCard3.length - 3;
    } else if ((window.screen.width < 992) && (window.screen.width > 768) && (count3 >= arrSliderCard3.length - 2)) {
        count3 = arrSliderCard3.length - 2;
    };
};