'use strict';

const burger = document.querySelector('.hamburger'),
    leftMenu = document.querySelector('.left-menu'),
    cardImgs = document.querySelectorAll('.tv-card__img');

document.addEventListener('click', event => {
    const target = event.target;
    const dropdown = target.closest('.dropdown');

    if (target.matches('.hamburger')) {
        leftMenu.classList.toggle('openMenu');
        burger.classList.toggle('open');
    }

    if (dropdown) {
        dropdown.classList.toggle('active');
        leftMenu.classList.add('openMenu');
        burger.classList.add('open');
    }

    if (!target.closest('.left-menu')) {
        leftMenu.classList.remove('openMenu');
        burger.classList.remove('open');
    }
});

cardImgs.forEach((img) => {
    img.addEventListener('mouseenter', () => {
        const target = event.target;
        let srcImg = target.getAttribute('src');

        if (img.dataset.backdrop) {
            img.src = img.dataset.backdrop;
        }
        
        img.addEventListener('mouseleave', () => {
            img.src = srcImg;
        })
    });
})