const changeImages = () => {
    const tvShowList = document.querySelector('.tv-shows__list');

    const changeImage = (event) => {
        const target = event.target;
    
        if (target.matches('.tv-card__img')) {
            const dataImg = target.dataset.backdrop;
    
            if (dataImg) {
                target.dataset.backdrop = target.src;
                target.src = dataImg;
                
                /* Используя деструктуризацию
                    [target.dataset.backdrop, target.src] = [target.src, target.dataset.backdrop]
                */
            }
        }
    };
    
    tvShowList.addEventListener('mouseover', changeImage);
    tvShowList.addEventListener('mouseout', changeImage);
};

export default changeImages;