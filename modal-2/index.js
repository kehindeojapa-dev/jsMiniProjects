// CACHE SELECTORS
const openModal = document.getElementById('openModal');
const close_btn = document.getElementById('close_btn');
const sub_btn = document.getElementById('sub_btn');
const dialog = document.querySelector('.modal');

// EVENT LISTENERS
(()=> {
    openModal.addEventListener('click', open);
    close_btn.addEventListener('click', close);
    sub_btn.addEventListener('click', close);
})();



// FUNCTIONS

function open(event) {
    dialog.showModal();
} 

function close(event) {
    dialog.close();
}