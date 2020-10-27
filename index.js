const page = document.getElementById('body');



/*
    Below program changes the background colors every 10s
*/
randomizeColors = function() {
    color = `hsl(${Math.floor(Math.random() * 360)},100%, 40%)`;
    return color
}

window.addEventListener('load', ()=> {
    setInterval(() => {
        page.style.background=`linear-gradient(120deg, ${randomizeColors()}, ${randomizeColors()})`;
    }, 15000);
})


// SELECTORS
const images = document.querySelectorAll('.card img');
const closeBtn = document.getElementById('close');
const popup = document.querySelector('.popup');
const popupImage = document.querySelector('.popup img');
// console.log(popupImage.src);
// EVENT LISTENERS
images.forEach(function(image) {
    image.addEventListener('click', (e)=> {
        popupImage.src = e.target.src;
        popup.classList.add('active');
        document.body.addEventListener('keydown', (e)=> {
            if(event.key == 'Escape') {
                popup.classList.remove('active');
            }
        })
    })
})

closeBtn.addEventListener('click', ()=> {
    popup.classList.remove('active');
});