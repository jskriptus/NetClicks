'use strict';

/*
    TODO:
    ! При выборе карточки нужно добавить прелоадер (есть в HTML)
    ! Оповещать пользователя если фильм не нашелся (if total_result = 0 блаблабла)
    * Добавить кнопку поиска для мобильных телефонов
    * Убрать надпись Результат поиска, пока страница без карточек
    * При нажатии Поиск в бургер меню - фокусироваться на инпуте Поиск
*/

import burgerMenu from './modules/burgerMenu.js';
import showModal from './modules/showModal.js';
import changeImages from './modules/changeImages.js';
import search from './modules/searchForm.js';


burgerMenu();
showModal();
changeImages();
search();
