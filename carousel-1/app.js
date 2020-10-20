// Selectors
img = document.querySelector('.image-container');
images = document.querySelectorAll('.image-container img');
leftBtn = document.querySelector('.leftBtn');
rightBtn = document.querySelector('.rightBtn');

// EventListener
leftBtn.addEventListener('click', moveLeft);
rightBtn.addEventListener('click', moveright)

// Function
let index = 0;
let indexPx = 0;

function runCarousel() {
    

    index++;
    if(index > images.length - 1) {
        index = 0;
    }
    indexPx = (index * 500);
    console.log(index)
    img.style.transform = `translateX(${-index * 500}px)`;
}


function moveLeft() {
    // clearInterval(run)
    switch(indexPx) {
        case 0:
            result = '-2000px';
            break;
        case 500:
            result = '-0px';
            break;
        case 1000:
            result = '-500px';
            break;
        case 1500:
            result = '-1000px';
            break;
        case 2000:
            result = '-1500px';
            break;
    }
    console.log(images[index])
    console.log(result);
    img.style.transform = `translateX(${result})`;
    index--;
    // setInterval(runCarousel, 4000);
    clearInterval(run);
}

function moveright() {
    let index = 0;
    img.style.transform = `translateX(${-index * 500 - 500}px)`;
}

let run = setInterval(() => {
    runCarousel();
}, 4000)
// setInterval(runCarousel, 4000);
