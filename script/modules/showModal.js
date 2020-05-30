import DBConnect from './DBConnect.js';
import renderModal from "./renderModal.js";

const preloader = document.querySelector('.preloader');

const showModal = () => {
    document.addEventListener('click', event => {
        event.preventDefault();
        const target = event.target,
            modal = document.querySelector('.modal'),
            card = target.closest('.tv-card');

        // открываем окно
        if (card) {
            preloader.style.display = 'block';
            new DBConnect().getTvShow(card.id)
                .then((response) => {
                    renderModal(response);
                })
                .then(() => {
                    modal.classList.remove('hide');
                    document.body.style.overflow = 'hidden';
                })
                .finally(() => {
                    preloader.style.display = 'none';
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