const arrPersonalData = [document.querySelector('.personal-data-1'), document.querySelector('.personal-data-2'), document.querySelector('.personal-data-3')];
const arrNavList = document.querySelectorAll('.nav-personal_li');
const arrNavSvg = document.querySelectorAll('.nav-personal__image');
const arrCls1 = document.querySelectorAll('.cls-1');
const Cls2 = document.querySelector('.cls-2');
const arrFiveIcon = document.querySelectorAll('.five-icon');
const headerPage = document.querySelector('.main__heading');

startPage();

for (let index = 0; index < arrNavList.length; index++) {
    if (index == 1) {
        arrNavList[index].addEventListener('click', function(){
            removeBlockInfo();
            arrPersonalData[0].style.display = 'block';
            arrNavList[index].classList.add('nav_under');
            headerPage.textContent = arrNavList[index].textContent;
            arrNavSvg[index].classList.add('nav-personal__image-2_bg');
            for (let i = 0; i < arrCls1.length; i++){
                arrCls1[i].classList.remove('three-icon_color');
            };
            Cls2.classList.remove('three-icon_color');
            for (let i = 0; i < arrFiveIcon.length; i++){
                arrFiveIcon[i].classList.remove('five-icon_active');
            };
        });
    };
    if (index == 2) {
        arrNavList[index].addEventListener('click', function(){
            removeBlockInfo();
            arrPersonalData[1].style.display = 'block';
            arrNavList[index].classList.add('nav_under');
            headerPage.textContent = arrNavList[index].textContent;
            arrNavSvg[1].classList.remove('nav-personal__image-2_bg');
            for (let i = 0; i < arrCls1.length; i++){
                arrCls1[i].classList.add('three-icon_color');
            };
            Cls2.classList.add('three-icon_color');
            for (let i = 0; i < arrFiveIcon.length; i++){
                arrFiveIcon[i].classList.remove('five-icon_active');
            };
        });
    };
    if (index == 4) {
        arrNavList[index].addEventListener('click', function(){
            removeBlockInfo();
            arrPersonalData[2].style.display = 'block';
            arrNavList[index].classList.add('nav_under');
            headerPage.textContent = arrNavList[index].textContent;
            arrNavSvg[1].classList.remove('nav-personal__image-2_bg');
            for (let i = 0; i < arrCls1.length; i++){
                arrCls1[i].classList.remove('three-icon_color');
            };
            Cls2.classList.remove('three-icon_color');
            for (let i = 0; i < arrFiveIcon.length; i++){
                arrFiveIcon[i].classList.add('five-icon_active');
            };
        });
    };
};

function startPage() {
    arrPersonalData[0].style.display = 'block';
    arrPersonalData[1].style.display = 'none';
    arrPersonalData[2].style.display = 'none';
    for (let index = 0; index < arrNavList.length; index++) {
        arrNavList[index].classList.remove('nav_under');
    };
    arrNavList[1].classList.add('nav_under');
    headerPage.textContent = arrNavList[1].textContent;
    arrNavSvg[1].classList.add('nav-personal__image-2_bg');
    for (let i = 0; i < arrCls1.length; i++){
        arrCls1[i].classList.remove('three-icon_color');
    };
    Cls2.classList.remove('three-icon_color');
    for (let i = 0; i < arrFiveIcon.length; i++){
        arrFiveIcon[i].classList.remove('five-icon_active');
    };
};

function removeBlockInfo() {
    for (let index = 0; index < arrPersonalData.length; index++) {
        arrPersonalData[index].style.display = 'none';
    };
    for (let index = 0; index < arrNavList.length; index++) {
        arrNavList[index].classList.remove('nav_under');
    };
};