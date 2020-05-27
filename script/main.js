'use strict';

const tvShowList = document.querySelector('.tv-shows__list');
const IMG_URL = 'https://image.tmdb.org/t/p/w185_and_h278_bestv2/';
const API_KEY = 'b277a762e6d75673a56e8611ca28354f';

import burgerMenu from './modules/burgerMenu.js';
import modal from './modules/modal.js';
import changeImages from './modules/changeImages.js';

burgerMenu();
modal();
changeImages();

const DBConnect = class {
    getData = async (url) => {
        const res = await fetch(url);
        if (res.ok) {
            return res.json();
        } else {
            throw new Error(`Не удалось получить данные по адресу ${url}`)
        }
    }

    getTestData = () => {
        return this.getData('test.json')
    }
};

const renderCard = (response) => {

    tvShowList.textContent = '';

    response.results.forEach(item => {
        const {
            vote_average: vote,
            name: title,
            backdrop_path: backdrop,
            poster_path: poster
        } = item;

        const posterIMG = poster ? IMG_URL + poster : 'img/no-poster.jpg';
        const backdropIMG = backdrop ? IMG_URL + backdrop : '';
        const voteElem = vote ? `<span class="tv-card__vote">${vote}</span>` : '';

        const card = document.createElement('li');
        card.classList.add('tv-shows__item');
        card.innerHTML = `
            <a href="#" class="tv-card">
                ${voteElem}
                <img class="tv-card__img"
                    src="${posterIMG}"
                    data-backdrop="${backdropIMG}"
                    alt="${title}">
                <h4 class="tv-card__head">${title}</h4>
            </a>`;

        tvShowList.insertAdjacentElement('afterbegin', card);
    })
};

new DBConnect().getTestData().then(renderCard);