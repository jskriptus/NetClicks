import DBConnect from './DBConnect.js';
import renderModal from "./renderModal.js";

const showModal = () => {
    document.addEventListener('click', event => {
        event.preventDefault();
        const target = event.target,
            modal = document.querySelector('.modal'),
            card = target.closest('.tv-card');

        // открываем окно
        if (card) {
            new DBConnect().getTvShow(card.id)
                .then((response) => {
                    renderModal(response);
                })
                .then(() => {
                    modal.classList.remove('hide');
                    document.body.style.overflow = 'hidden';
                })
        }

        // закрываем окно
        if (target.closest('.cross') || target.classList.contains('modal')) {
            modal.classList.add('hide');
            document.body.style.overflow = '';
        }
    });
};

export default showModal;