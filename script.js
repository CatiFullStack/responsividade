// Colocando o menu hamburger e o menu normal dentro do JavaScript para poder usar.

// Quando usar o querSelectorAll para quando usar para TODOS elementos. EX: p.

const menuHamburger = document.getElementsByClassName('menu-hamburger')[0];

const menu = document.getElementsByClassName('menu')[0];

const sobre = document.querySelector("#ta");


// primeiro é qual é o evento e segundo a função. No caso uma arrow function que é anônima
menuHamburger.addEventListener("click", () => {
    menu.classList.toggle('active');
});

ta.addEventListener("click", () => {
    document.querySelector(".sobre").classList.toggle('on');
});

