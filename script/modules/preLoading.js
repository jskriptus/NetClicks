const tvShows = document.querySelector('.tv-shows');

const preLoading = () => {
    const loading = document.createElement('div');
    loading.classList.add('loading');
    tvShows.insertAdjacentElement('beforebegin', loading);
};

export default preLoading;