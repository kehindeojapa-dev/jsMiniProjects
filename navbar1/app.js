// SELECTORS
const navBtn = document.querySelector('.openBtn');
const closeBtn = document.querySelector('.closeBtn')
const sideBar = document.querySelector('.sideBar')
const projectFlip = document.querySelector('.project');
const propProject = document.querySelector('.propProject');
const projectArrow = document.querySelector('.arrow')

// EVENT LISTENERS
navBtn.addEventListener('click', openSideBar);
closeBtn.addEventListener('click', closeSideBar);
projectFlip.addEventListener('click', toggleProject);

// FUNCTIONS

function removeSubmitDefault() {
    return event.preventDefault();
}

function openSideBar() {
    removeSubmitDefault();
    sideBar.classList.add('active');
}

function closeSideBar() {
    removeSubmitDefault();
    sideBar.classList.remove('active');
}

function toggleProject() {
    projectFlip.classList.toggle('bgDarkPurple');
    propProject.classList.toggle('off-display');
    propProject.classList.toggle('bgDarkPurple');
    

    //making the arrow change depending if 
    // parent has the bg-class set.
    arrayItem = Array.from(projectFlip.classList);
    if (arrayItem.includes('bgDarkPurple')) {
        projectArrow.innerHTML = "<i class='fas fa-angle-down'></i>";
    } else {
        projectArrow.innerHTML = "<i class='fas fa-angle-right'></i>"
    }
}






