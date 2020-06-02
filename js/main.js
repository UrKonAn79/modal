document.addEventListener('DOMContentLoaded', () => {
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
        }
    }
    function hideModal() {
        overlay.classList.remove('open');
        modal.classList.remove('open');
    }

    function getContent(content) {
        const data = document.getElementById(content);
        modalContent.innerHTML = data.innerHTML;
    }
});