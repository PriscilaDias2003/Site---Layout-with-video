const hamburguer_menu = document.querySelector('.toggle');
const container = document.querySelector('.container');
const content = document.querySelector('.banner');


hamburguer_menu.addEventListener('click', ()=>{
    container.classList.toggle('active');
});

content.addEventListener('click', () => {
    container.classList.remove('active');
});