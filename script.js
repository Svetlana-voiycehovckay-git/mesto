let profileEditButton = document.querySelector('.profile__edit-button');
let popupCloseButton = document.querySelector('.popup__close');
let popup = document.querySelector('.popup');
let ProfileTitle = document.querySelector('.profile__title');
let ProfileSubtitle = document.querySelector('.profile__subtitle');
let PopupInfoTitle = document.querySelector('.popup__info_title');
let PopupInfoSubtitle = document.querySelector('.popup__info_subtitle');
let PopupSave = document.querySelector('.popup__save');

function togglePopup (event) {
    popup.classList.toggle('popup_opened');
    PopupInfoTitle.value = ProfileTitle.textContent;
    PopupInfoSubtitle.value = ProfileSubtitle.textContent;
}

function formSubmitHandler (evt) {
    evt.preventDefault();
}

PopupSave.addEventListener('submit', formSubmitHandler); 
PopupSave.addEventListener('click', togglePopup);
PopupInfoTitle.addEventListener('submit', formSubmitHandler); 
PopupInfoSubtitle.addEventListener('submit', formSubmitHandler); 
profileEditButton.addEventListener('click', togglePopup);
popupCloseButton.addEventListener('click', togglePopup);








