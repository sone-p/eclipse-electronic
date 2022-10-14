var popups = document.querySelectorAll('.popup');

popups.forEach(popup => {
    let title = popup.querySelector('.title');
    let window = popup.querySelector('.window');

    title.addEventListener('click', () => {
        popup.classList.toggle('open');
    })
});