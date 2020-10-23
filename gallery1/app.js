// SELECTORS
const images = document.querySelectorAll('.gallery-container img');
const closeBtn = document.getElementById('close');
const popup = document.querySelector('.popup');
const popupImage = document.querySelector('.popup img');
// console.log(popupImage.src);
// EVENT LISTENERS
images.forEach(function(image) {
    image.addEventListener('click', (e)=> {
        popupImage.src = e.target.src;
        popup.classList.add('active');
    })
})

closeBtn.addEventListener('click', ()=> {
    popup.classList.remove('active');
});
// FUNCTIONS