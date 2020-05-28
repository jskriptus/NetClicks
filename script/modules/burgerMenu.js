const burgerMenu = () => {
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
    });
};

export default burgerMenu;