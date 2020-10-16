//  CACHE SELECTORS
const date = document.querySelector('.date-container');
const numOfTask = document.querySelector('.numOfTasks');
const todoList = document.querySelector('.todo-items');
const enterTodo = document.querySelector('.enterTodo');
const addTodoContainer = document.querySelector('.addTodo-container');
const todoButton = document.querySelector('.to-do-submit');
const todoInput = document.querySelector('#to-do-input');


//  EVENT LISTENERS
date.innerHTML = getDate();
numOfTask.innerHTML = `${todoList.children.length} tasks`;
enterTodo.addEventListener('click', openAddTodo);
todoButton.addEventListener('click', event => {
    if (getInputLength() > 1) {
        addTodo(event);
    }
    // Prevent button from submitting
    event.preventDefault();

    // Update header with no of tasks entered 
    numOfTask.innerHTML = `${todoList.children.length} tasks`;

});
todoInput.addEventListener('keypress', event => {
    if (getInputLength() > 1 && event.key =='Enter') {
        addTodo(event);
    }
    

    // Update header with no of tasks entered 
    numOfTask.innerHTML = `${todoList.children.length} tasks`;
});
todoInput.addEventListener('keydown', event => {
    if (event.key == 'Escape') {
        enterTodo.classList.remove('off-display');
        addTodoContainer.classList.add('off-display');
        todoInput.value = '';
    }
    console.log(event.key);
});
todoList.addEventListener('click', checked);


//  FUNCTIONS
/*
    - getDate()
    -openAddTodo()
    -getInputLength
    -addTodo()
    -checked()
*/


/* This function returns date in day, month, year format*/ 
function getDate() {
    let today = new Date;
    let day = today.getDay();
    let month = today.getMonth();
    let year = today.getFullYear();
    let TodayDay;
    switch (day) {
        case 1:
            TodayDay = 'Mon'
            break;
        case 2:
            TodayDay = 'Tues'
            break;
        case 3:
            TodayDay = 'Wed'
            break;    
        case 4:
            TodayDay = 'Thur'
            break;
        case 5:
            TodayDay = 'Fri'
            break;
        case 6:
            TodayDay = 'Sat'
            break;
        case 7:
            TodayDay = 'Sun'
            break;
        
    }


    let todayMonth; 
    switch (month) {
        case 0:
            todayMonth = 'January'
        break;
        case 1:
            todayMonth = 'February'
        break;
        case 2:
            todayMonth = 'March'
        break;
        case 3:
            todayMonth = 'April'
        break;
        case 4:
            todayMonth = 'May'
        break;
        case 5:
            todayMonth = 'June'
        break;
        case 6:
            todayMonth = 'July'
        break;
        case 7:
            todayMonth = 'August'
        break;
        case 8:
            todayMonth = 'September'
        break;
        case 9:
            todayMonth = 'October'
        break;
        case 10:
            todayMonth = 'November'
        break;
        case 11:
            todayMonth = 'December'
        break;
    }
    return `${TodayDay},${todayMonth} ${day}, ${year}`;
}


/* This function creates an input field + button*/ 
function openAddTodo() {

    //prevent button from carring out its submit function
    event.preventDefault();

    enterTodo.classList.add('off-display')
    addTodoContainer.classList.remove('off-display')
    todoInput.focus();
}

function getInputLength() {
    return todoInput.value.length;
}


/* This function creates a todo + checked + delete button */
function addTodo(event) {

    //prevent button from carring out its submit function
    event.preventDefault();

    // create todoDiv(to be appended to todoList)
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');

    // create a todo-item(append to todoDiv)
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);

    // create checked button (append to todoDiv)
    const completeBtn = document.createElement('button');
    completeBtn.innerHTML = "<i class='fas fa-circle-notch'></i>";
    completeBtn.classList.add('complete-btn');
    todoDiv.appendChild(completeBtn)

    //create doneBtn 
    const doneBtn = document.createElement('button');
    doneBtn.innerHTML = "<i class='fas fa-check-circle'></i>"
    doneBtn.classList.add('doneBtn');
    doneBtn.classList.add('off-display');
    todoDiv.appendChild(doneBtn)

    // // create delete button (append to todoDiv)
    // const completeBtn = document.createElement('button');
    // completeBtn.innerHTML = "<i class='fas fa-plus-circle'></i>";
    // completeBtn.classList.add('complete-btn');
    // todoDiv.appendChild(completeBtn)

    // Append created div to todoList
    todoList.appendChild(todoDiv);

    // Clear input value
    todoInput.value = ''

    enterTodo.classList.remove('off-display');
    addTodoContainer.classList.add('off-display');
}



/* This function change appearance of the todo item when checked or not */
function checked(e) {
    const item = e.target;
    const itemClassList = Array.from(item.classList);
    if (itemClassList.includes('complete-btn')) {
        const todo = item.parentElement;
        todo.children[0].classList.toggle('complete');
        todo.children[1].classList.toggle('off-display');
        todo.children[2].classList.toggle('off-display');
    }
    if (itemClassList.includes('doneBtn')) {
        const todo = item.parentElement;
        todo.children[0].classList.toggle('complete');
        todo.children[1].classList.toggle('off-display');
        todo.children[2].classList.toggle('off-display');
    }
    
}