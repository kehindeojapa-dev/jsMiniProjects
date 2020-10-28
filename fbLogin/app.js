//  SELECTORS
const createBtn = document.querySelector("#create");
const closeBtn = document.querySelector('#closeBtn');
const signInContainer = document.querySelector('.signInContainer');

//EVENT LISTENERS
createBtn.addEventListener('click', ()=> {
    event.preventDefault();
    signInContainer.classList.add('active');
    
    document.body.addEventListener('keydown', (e)=> {
        if(event.key == 'Escape') {
            signInContainer.classList.remove('active');
        }
    });
   
});
closeBtn.addEventListener('click', ()=> {
    event.preventDefault();
    signInContainer.classList.remove('active');
});

