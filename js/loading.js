let time = 0;

setInterval(function() {
    const preloader = document.querySelector('.preloader');
    if (time > 3) {
        preloader.classList.add('preloader_hidden');
    };
    time++;
}, 100);