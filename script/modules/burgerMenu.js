import DBConnect from './DBConnect.js';
import renderCard from './renderCards.js';
import preLoading from './preLoading.js';

const burgerMenu = () => {
    const dbConnect = new DBConnect();
    document.addEventListener('click', event => {
        event.preventDefault();

        const target = event.target,
            burger = document.querySelector('.hamburger'),
            leftMenu = document.querySelector('.left-menu');

        if (target.matches('.hamburger')) {
            leftMenu.classList.toggle('openMenu');
            target.classList.toggle('open');
        }

        if (target.closest('.dropdown')) {
            target.closest('.dropdown').classList.toggle('active');
            leftMenu.classList.add('openMenu');
            burger.classList.add('open');
        }

        if (!target.closest('.left-menu')) {
            leftMenu.classList.remove('openMenu');
            burger.classList.remove('open');
        }

        if (target.closest('#top-rated')) {
            preLoading();
            dbConnect.getTopRated().then((response) => renderCard(response, target));
        }

        if (target.closest('#popular')) {
            preLoading();
            dbConnect.getPopular().then((response) => renderCard(response, target));
        }

        if (target.closest('#today')) {
            preLoading();
            dbConnect.getAiringToday().then((response) => renderCard(response, target));
        }

        if (target.closest('#week')) {
            preLoading();
            dbConnect.getOnTheAir().then((response) => renderCard(response, target));
        }

        if (target.closest('#search')) {
            const tvShowsList = document.querySelector('.tv-shows__list');
            const tvShowsHead = document.querySelector('.tv-shows__head');
            tvShowsList.textContent = '';
            tvShowsHead.textContent = '';
        }
    });
};

export default burgerMenu;