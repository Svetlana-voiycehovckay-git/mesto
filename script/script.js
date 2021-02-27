let profileEditButton = document.querySelector('.profile__edit-button');
let popupCloseButton = document.querySelector('.popup__close');
let popup = document.querySelector('.popup');
let ProfileName = document.querySelector('.profile__name');
let ProfileDescription = document.querySelector('.profile__description');
let PopupInfoName = document.querySelector('.popup__info_type_name');
let PopupInfoDescription = document.querySelector('.popup__info_type_description');
let PopupSave = document.querySelector('.popup__save');
let PopupForm = document.querySelector('.popup__form');

function openPopup (event) {
    popup.classList.add('popup_opened');
    PopupInfoName.value = ProfileName.textContent;
    PopupInfoDescription.value = ProfileDescription.textContent;
}

function closePopup (event) {
    popup.classList.remove('popup_opened');
}

function formSubmitHandler (evt) {
    evt.preventDefault();
    ProfileName.textContent = PopupInfoName.value;
    ProfileDescription.textContent = PopupInfoDescription.value;
    closePopup ();
}

PopupForm.addEventListener('submit', formSubmitHandler); 
profileEditButton.addEventListener('click', openPopup);
popupCloseButton.addEventListener('click', closePopup);








