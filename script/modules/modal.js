const modal = () => {
    document.addEventListener('click', event => {
        const target = event.target,
            modal = document.querySelector('.modal');
    
        if (target.closest('.tv-card')) {
            event.preventDefault();
            modal.classList.remove('hide');
            document.body.style.overflow = 'hidden';
        }
    
        if (target.closest('.cross') || target.classList.contains('modal')) {
            modal.classList.add('hide');
            document.body.style.overflow = '';
        }
    });
};

export default modal;