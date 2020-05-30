import preLoading from './preLoading.js';
import renderCard from './renderCards.js';
import DBConnect from './DBConnect.js';

const search = ( ) => {
    const searchForm = document.querySelector('.search__form');
    const searchInput = document.querySelector('.search__form-input');
    const showMoreBtn = document.querySelector('.show-more-btn');

    searchForm.addEventListener('submit', () => {
        event.preventDefault();
        const value = searchInput.value.trim();

        if (value) {
            preLoading();
            // рендерим карточки на странице 
            new DBConnect().getSearchResult(value).then(renderCard);

            let i = 2;
            showMoreBtn.addEventListener('click', () => {
                preLoading();
                new DBConnect().getNextPage(value, i).then(renderCard);
                i++;
            })
        }



        searchInput.value = '';


    });

};

export default search;