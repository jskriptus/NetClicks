const IMG_URL = 'https://image.tmdb.org/t/p/w185_and_h278_bestv2/';

const renderModal = (data) => {
    const tvCardImg = document.querySelector('.image__content > .tv-card__img'),
        modalTitle = document.querySelector('.modal__title'),
        genresList = document.querySelector('.genres-list'),
        rating = document.querySelector('.rating'),
        description = document.querySelector('.description'),
        modalLink = document.querySelector('.modal__link');

    data.poster_path ? tvCardImg.src = IMG_URL + data.poster_path : tvCardImg.src = '/img/no-poster.jpg';

    tvCardImg.alt = data.name;

    modalTitle.textContent = data.name;
    // genresList.textContent = '';
    // data.genres.forEach(genre => {
    //     genresList.innerHTML += `<li>${genre.name}</li>`;
    // });
    genresList.innerHTML = data.genres.reduce((acc, genre) => `${acc}<li>${genre.name}</li>`, '');

    rating.textContent = data.vote_average;

    description.textContent = data.overview;

    modalLink.href = data.homepage;

};

export default renderModal;