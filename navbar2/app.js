//  CACHE SELECTORS
const openBtn = document.querySelector('#open');
const closeBtn = document.querySelector('#close');
const navbar = document.querySelector('.navbar');
const openMusic = document.querySelector('#music');
const goToMenu = document.querySelector('#main');
const fullContent = document.querySelector('#fullContent');
const subContent = document.querySelector('#subContent');
console.log(openMusic);
openBtn.addEventListener('click', ()=> {
    navbar.classList.add('active');
})

closeBtn.addEventListener('click', ()=> {
    navbar.classList.remove('active');
})

openMusic.addEventListener('click', (e)=> {
    setTimeout(()=>{
        e.preventDefault();
        fullContent.classList.add('off-display');
        subContent.classList.remove('off-display');
    }, 300);
})

goToMenu.addEventListener('click', (e)=> {
    setTimeout(()=>{
        e.preventDefault();
        fullContent.classList.remove('off-display');
        subContent.classList.add('off-display');
    }, 300);
})