const img = document.querySelector('.image-container');
let slideImages = document.querySelectorAll('.image-container img');
const leftBtn = document.querySelector('.leftBtn');
const rightBtn = document.querySelector('.rightBtn');
const closeBtn = document.querySelector('#closeBtn');
const carouselContainer = document.querySelector('.carouselContainer');
// EventListener

leftBtn.addEventListener('click', moveLeft);
rightBtn.addEventListener('click', moveright);

// Function
let index = 1;


//create dummyClones
const firstClone = slideImages[0].cloneNode(true);
const lastClone = slideImages[slideImages.length-1].cloneNode(true);
firstClone.id = 'first-clone';
lastClone.id = 'last-clone';
img.prepend(lastClone);
img.append(firstClone);



let slides = getSlides();
const slidewidth = slides[index].clientWidth;
img.style.transform = `translateX(${-400 * index}px)`;



function getSlides() {
    return document.querySelectorAll('.image-container img');
}

//Make slider an infinite loop;

img.addEventListener('transitionend', ()=> {
    slides = getSlides();
    if(slides[index].id === firstClone.id) {
        img.style.transition = 'none';
        index = 1;
        img.style.transform = `translateX(${-slidewidth * index}px)`;
    }
    if(slides[index].id === lastClone.id) {
        img.style.transition = 'none';
        index = slideImages.length - 1;
        img.style.transform = `translateX(${-slidewidth * index}px)`;
    }
});


function moveLeft() {
    if (index <= 0) return;
    index--;
    img.style.transform = `translateX(${-slidewidth * index}px)`;
    img.style.transition = '0.7s';
    console.log('left')
}

function moveright() {
    slides = getSlides();
    if (index >= slides.length-1) return;
    index++;
    img.style.transform = `translateX(${-slidewidth * index}px)`;
    img.style.transition = '0.7s';
    console.log('right')
}

// runCarousel();

closeBtn.addEventListener('click', () => {
    carouselContainer.classList.add('hide');
});