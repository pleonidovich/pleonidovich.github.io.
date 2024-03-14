// * ===== Accordion
const toggleAccordion = (accordionControl, accordionContent, accordion) => {
    const filters = document.querySelectorAll(accordionControl);
    filters.forEach((el) => {
        if (el) {
            el.addEventListener('click', (e) => {
                const target = e.target.closest(accordion);
                const content = target.querySelector(accordionContent);
                target.classList.toggle('active');
                if (target.classList.contains('active')) {
                    content.style.maxHeight = content.scrollHeight + 'px';
                } else {
                    content.style.maxHeight = null;
                }
            });
        }
    });
};

function toggleTab(evt, cityName) {
    let i;
    let tabContent;
    let tablinks;

    tabContent = document.querySelectorAll(".tabcontent");
    for (i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }
    tablinks = document.querySelectorAll(".tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}

function addService() {
    let inputService = document.querySelector("#cooperation__input-new-service-field");
    let listForService = document.querySelector(".cooperation__form-services-list");

    debugger

    if (inputService.value === '') {
        alert("Пустое поле");
    } else {
        console.log('add')
    }
}

window.addEventListener('DOMContentLoaded', function () {
    toggleAccordion('.accordion-control-btn', '.accordion-content', '.accordion');

    if (document.getElementById("defaultOpenTab")) {
        document.getElementById("defaultOpenTab").click();
    }

    // document.querySelector(".cooperation__input-new-service-add").addEventListener("click", addService);

    document.querySelector(".header__search-icon").addEventListener("click", function() {
        document.querySelector("#header-search").setAttribute('style', 'display: block;')
        document.querySelector(".header__search-icon").setAttribute('style', 'bottom: 13px;')
    });

    if (document.querySelector('.system-of-rating + .cooperation .cooperation__button')) {
        let callbackBtnMainPage = document.querySelector('.cooperation .cooperation__button');
        let modalMainPage = document.querySelector('#modalMainPage');
        let closeButton = modalMainPage.querySelector('#modalMainPage .modal__close-button');
        let tagBody = document.querySelector('body');

        callbackBtnMainPage.addEventListener(
            "click",
            function (e) {
                e.preventDefault();
                modalMainPage.classList.add('modal_active');
                tagBody.classList.add('hidden');
            }
        );

        closeButton.addEventListener(
            "click",
            function (e) {
                e.preventDefault();
                modalMainPage.classList.remove('modal_active');
                tagBody.classList.remove('hidden');
            }
        );

        modalMainPage.addEventListener(
            "mousedown",
            function (e) {
                let target = e.target;
                let modalContent = modalMainPage.getElementsByClassName('modal__content')[0];
                if (e.target.closest('.' + modalContent.className) === null) {
                    this.classList.remove('modal_active');
                    tagBody.classList.remove('hidden');
                }
            }
        );
    }

    if (document.querySelector('.footer .footer__support-button')) {
        let callbackBtnMainPage = document.querySelector('.footer .footer__support-button');
        let modalMainPage = document.querySelector('#modalFooter');
        let closeButton = modalMainPage.querySelector('#modalFooter .modal__close-button');
        let tagBody = document.querySelector('body');

        callbackBtnMainPage.addEventListener(
            "click",
            function (e) {
                e.preventDefault();
                modalMainPage.classList.add('modal_active');
                tagBody.classList.add('hidden');
            }
        );

        closeButton.addEventListener(
            "click",
            function (e) {
                e.preventDefault();
                modalMainPage.classList.remove('modal_active');
                tagBody.classList.remove('hidden');
            }
        );

        modalMainPage.addEventListener(
            "mousedown",
            function (e) {
                let target = e.target;
                let modalContent = modalMainPage.getElementsByClassName('modal__content')[0];
                if (e.target.closest('.' + modalContent.className) === null) {
                    this.classList.remove('modal_active');
                    tagBody.classList.remove('hidden');
                }
            }
        );
    }

    if (document.querySelector('.main-category-page__leave-review-form-button')) {
        let callBackButton = document.querySelector('.main-category-page__leave-review-form-button');
        let modal1 = document.querySelector('#modal-1');
        let closeButton = modal1.querySelector('.modal__close-button');
        let tagBody = document.querySelector('body');

        callBackButton.addEventListener(
            "click",
            function (e) {
                e.preventDefault();
                modal1.classList.add('modal_active');
                tagBody.classList.add('hidden');
            }
        );

        closeButton.addEventListener(
            "click",
            function (e) {
                e.preventDefault();
                modal1.classList.remove('modal_active');
                tagBody.classList.remove('hidden');
            }
        );

        modal1.addEventListener(
            "mousedown",
            function (e) {
                let target = e.target;
                let modalContent = modal1.getElementsByClassName('modal__content')[0];
                if (e.target.closest('.' + modalContent.className) === null) {
                    this.classList.remove('modal_active');
                    tagBody.classList.remove('hidden');
                }
            }
        );
    }
});