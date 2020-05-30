const tvShowList = document.querySelector('.tv-shows__list');
const IMG_URL = 'https://image.tmdb.org/t/p/w185_and_h278_bestv2/';

const renderCard = (response, target) => {
    const tvShowsHead = document.querySelector('.tv-shows__head');
    const loading = document.querySelector('.loading');
    const showMoreBtn = document.querySelector('.show-more-btn');

    const TVSeries = [...response.results];

    console.log(response);
    if (response.total_results !== 0) {
        tvShowsHead.textContent = target ? target.textContent : 'Результат поиска:';
        tvShowsHead.style.color = '';
        tvShowList.textContent = '';

        TVSeries.forEach(item => {
            const {
                vote_average: vote,
                name: title,
                backdrop_path: backdrop,
                id,
                poster_path: poster
            } = item;

            const posterIMG = poster ? IMG_URL + poster : 'img/no-poster.jpg';
            const backdropIMG = backdrop ? IMG_URL + backdrop : '';
            const voteElem = Boolean(vote) ? `<span class="tv-card__vote">${vote}</span>` : '';

            const card = document.createElement('li');
            card.classList.add('tv-shows__item');
            card.innerHTML = `
                <a href="#" id="${id}" class="tv-card">
                    ${voteElem}
                    <img class="tv-card__img"
                        src="${posterIMG}"
                        data-backdrop="${backdropIMG}"
                        alt="${title}">
                    <h4 class="tv-card__head">${title}</h4>
                </a>`;

            loading.remove();
            tvShowList.insertAdjacentElement('beforeend', card);

            if (response.total_pages > 1) {
                showMoreBtn.style.display = 'flex';
            }

        })
    } else {
        tvShowList.textContent = '';
        tvShowsHead.textContent = 'По вашему запросу ничего не найдено!';
        tvShowsHead.style.color = 'red';
        loading.remove();
    }

    // pagination.textContent = '';
    // if (response.total_pages > 1) {
    //     for (let i = 1; i <= response.total_pages; i++) {
    //         pagination.innerHTML += `
    //             <li><a href="#" class="pages">${i}</a></li>
    //         `;
    //     }
    // }

};



export default renderCard;