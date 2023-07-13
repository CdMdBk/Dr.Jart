let cardsWindow = document.querySelector('.making-order__window-orders');
let cardFullWidth = document.querySelector('.making-order__list-orders_width');
let arrCard = document.querySelectorAll('.making-order__image-container');

window.addEventListener('resize', sizeBlockCards);
sizeBlockCards();

function sizeBlockCards() {
    for (let index = 0; index < arrCard.length; index++) {
        if (window.screen.width > 768) {
            arrCard[index].style.width = `${cardsWindow.offsetWidth/2- 40}px`;
            cardFullWidth.style.width = `${cardsWindow.offsetWidth*arrCard.length/2}px`;
        } else if ((window.screen.width < 768) && (window.screen.width > 576)) {
            arrCard[index].style.width = `${cardsWindow.offsetWidth/3 - 25}px`;
            cardFullWidth.style.width = `${cardsWindow.offsetWidth*arrCard.length/3}px`;
        } else if (window.screen.width < 576) {
            arrCard[index].style.width = `${cardsWindow.offsetWidth/2 - 40}px`;
            cardFullWidth.style.width = `${cardsWindow.offsetWidth*arrCard.length/2}px`;
        };
    };
};

// Hides second option

document.querySelector('#making-order-second').style.display = 'none';