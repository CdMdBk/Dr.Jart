/*Common variable*/

let countClickNavs = 0;

/*First nav*/

const navAdminMobileOpacity = document.querySelector('.nav-admin__mobile');
const navAdminOpacity = document.querySelector('.nav-admin__ul');
const arrowNavAdmin = document.querySelector('.nav-admin__mobile-arrow');

window.addEventListener('resize', resizeBlocks);
resizeBlocks();

arrowNavAdmin.addEventListener('click', navAdminMobileAppear);

function resizeBlocks() {
    if (window.screen.width > 992) {
        navAdminMobileOpacity.classList.remove('nav-admin__mobile_active');
        navAdminOpacity.classList.remove('nav-admin__ul_active');
        arrowNavAdmin.classList.remove('nav-admin__mobile-arrow_active');
    } else if (window.screen.width < 992) {
        navAdminMobileOpacity.classList.add('nav-admin__mobile_active');
    };
};

function navAdminMobileAppear() {
    if (countClickNavs == 0) {
        arrowNavAdmin.classList.toggle('nav-admin__mobile-arrow_active');
        navAdminOpacity.classList.toggle('nav-admin__ul_active');
    };
};

/*Second nav*/

const arrowNavOrders = document.querySelector('.nav-order__arrow-block_arrow');
let navOrder = document.querySelector('.nav-order__form-container');

arrowNavOrders.addEventListener('click', navOrderMobileAppear);

function navOrderMobileAppear() {
    arrowNavOrders.classList.toggle('nav-order__arrow-block_arrow_active');
    navOrder.classList.toggle('nav-order__form-container_active');
    if (countClickNavs == 0) {
        countClickNavs++;
    } else {
        countClickNavs = 0;
    };
    arrowNavAdmin.classList.remove('nav-admin__mobile-arrow_active');
    navAdminOpacity.classList.remove('nav-admin__ul_active');
};