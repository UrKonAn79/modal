document.addEventListener('DOMContentLoaded', () => {
    const page = document.getElementById('page');
    const header = document.querySelector('.header');
    const overlay = document.querySelector('.overlay');
    const modal = document.querySelector('.modal');
    const modalContent = document.querySelector('.modal__content');
    const menu = document.querySelector('.menu');

    menu.addEventListener('click', event => {
        if(event.target.closest('.trigger')) {
            event.preventDefault();
            const dataContent = event.target.closest('.trigger').dataset.content;
            showModal();
            getContent(dataContent);
        }
    });

    modal.addEventListener('click', event => {
        if(event.target.closest('.trigger')) {
            event.preventDefault();
            const dataContent = event.target.closest('.trigger').dataset.content;
            getContent(dataContent);
        }
        if(event.target.closest('.modal__close')) {
           hideModal();
        }
    });

    overlay.addEventListener('click', hideModal);

    function showModal() {
        if(!overlay.classList.contains('open') && !modal.classList.contains('open')) {
            overlay.classList.add('open');
            modal.classList.add('open');
            toggleLock();
        }
    }
    function hideModal() {
        overlay.classList.remove('open');
        modal.classList.remove('open');
        toggleLock();
    }

    function getContent(content) {
        const data = document.getElementById(content);
        modalContent.innerHTML = data.innerHTML;
    }

    function toggleLock() {
        if(page.classList.contains('lock')) {
            page.classList.remove('lock');
            page.style.paddingRight = '';
            header.style.paddingRight = '';
        } else {
            const paddingRight = window.innerWidth - document.documentElement.clientWidth;
            console.log(paddingRight);
            page.classList.add('lock');
            page.style.paddingRight = `${paddingRight}px`;
            header.style.paddingRight = `${paddingRight}px`;
        }
    }
});