const box = document.querySelector('.box');
const buttons = document.querySelectorAll('.color-btn');

buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        const color = btn.dataset.color;
        box.style.backgroundColor = color;
    });
});
