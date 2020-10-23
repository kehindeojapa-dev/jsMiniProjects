// Selectors
const img = document.querySelector('.image-container');
let images = document.querySelectorAll('.image-container img');
const leftBtn = document.querySelector('.leftBtn');
const rightBtn = document.querySelector('.rightBtn');
let interval = 4000;

// EventListener
img.addEventListener('mouseenter', ()=> {
    clearInterval(run);
});
img.addEventListener('mouseleave', ()=> {
    runCarousel();
});
leftBtn.addEventListener('click', moveLeft);
rightBtn.addEventListener('click', moveright);

// Function
let index = 1;
let run;


//create dummyClones
const firstClone = images[0].cloneNode(true);
const lastClone = images[images.length-1].cloneNode(true);
firstClone.id = 'first-clone';
lastClone.id = 'last-clone';
img.prepend(lastClone);
img.append(firstClone);



let slides = getSlides();
const slidewidth = slides[index].clientWidth;
img.style.transform = `translateX(${-slidewidth * index}px)`;



function getSlides() {
    return document.querySelectorAll('.image-container img');
}

function runCarousel() {
    run = setInterval(()=> {
        index++;
        img.style.transform = `translateX(${-slidewidth * index}px)`;
        img.style.transition = '0.7s';
    }, interval)
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
        index = images.length - 1;
        img.style.transform = `translateX(${-slidewidth * index}px)`;
    }
});


function moveLeft() {
    if (index <= 0) return;
    index--;
    img.style.transform = `translateX(${-slidewidth * index}px)`;
    img.style.transition = '0.7s';
}

function moveright() {
    slides = getSlides();
    if (index >= slides.length-1) return;
    index++;
    img.style.transform = `translateX(${-slidewidth * index}px)`;
    img.style.transition = '0.7s';
}

runCarousel();
// setInterval(runCarousel, 4000);
