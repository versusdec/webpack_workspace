
const BTN = document.querySelector('.ddbtn');
const target = document.querySelector('.side-menu');

BTN.addEventListener('click', () => {
    target.classList.toggle('active');
})