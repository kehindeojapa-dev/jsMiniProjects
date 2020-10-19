//  CACHE SELECTORS
const todoInput = document.querySelector('.todoInput');
const todoButton = document.querySelector('.todoButton')
const todoList = document.querySelector('.todo-lists');
const deleteList = document.querySelector('.del-list');
const showBtn = document.querySelector('#show');
const hideBtn = document.querySelector('#hide');
const noTask = document.querySelector('.noTask');

//  EVENT LISTENERS

todoButton.addEventListener('click', ()=> {
    //Prevent button from submitting
    event.preventDefault();
    if (checkInputLength() > 0) {
        addTodo();
        todoButton.classList.remove('buttonFocus')
    }
});

todoInput.addEventListener('keypress', (event)=> {
    todoButton.classList.add('buttonFocus')
    if(checkInputLength() > 0 && event.key == 'Enter') {
        addTodo();
        todoButton.classList.remove('buttonFocus')
    }
})

todoInput.addEventListener('keydown', (e) => {
    if (event.key == 'Escape') {
        todoInput.value = '';
    }
});

deleteList.addEventListener('click', toggleStar);
todoList.addEventListener('click', taskDone);
showBtn.addEventListener('click', displayShow);
hideBtn.addEventListener('click', displayHide)



//  FUNCTIONS
/*
    -checkInputLength(),
    -addTodo(),
    -togglestar(),
    -taskDone(), 
    -display()
*/





function checkInputLength() {
    return todoInput.value.length;
}


/*
    Function creates a todoItem and adds it to the
    todolist-container
*/
function addTodo(event) {
    // Create todo-item container(To-do Div)
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');

    //Create done button
    const statusBtn = document.createElement('button');
    statusBtn.innerHTML = "<i class='fas fa-dot-circle'></i>"
    statusBtn.classList.add('statusBtn');
    todoDiv.appendChild(statusBtn);

    //Create li to contain the todo-item itself
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    
    // create Star button(check favourite/important task)
    const starBtn = document.createElement('button');
    starBtn.innerHTML = "<i class='fas fa-star'></i>";
    starBtn.classList.add('starBtn');
    todoDiv.appendChild(starBtn);

    //Append created todoDiv to todoList
    todoList.appendChild(todoDiv);

    // Reset todoitem input value
    todoInput.value = '';
}

/*
    Function add/remove the yellow colour from the
    star button when clicked
*/
function toggleStar(e) {
    const item = e.target;
    // const todo = item.parentElement;

    const Arrayitem = Array.from(item.classList);
    if(Arrayitem.includes('starBtn')) {
        item.classList.toggle('toggleStar');
    }
}


/*
    This function gets the value of the already created
    item(the todolist is removed)and use that value to
     create a new todolist under the deleteList 
     container
*/
function taskDone(e){
    const item = e.target
    ArrayedItem = Array.from(item.classList)
    todoContainer = item.parentElement;
    const storedItem = todoContainer.children[1].innerText;
    toggleStar(e);
    if (ArrayedItem.includes('statusBtn')) {

        todoContainer.remove();

        // Create todo-item container(To-do Div)
        const todoDiv = document.createElement('div');
        todoDiv.classList.add('todo');

        //Create done button
        const statusBtn = document.createElement('button');
        statusBtn.innerHTML = "<i class='fas fa-check'></i>"
        statusBtn.classList.add('checkBtn');
        todoDiv.appendChild(statusBtn);

        //Create li to contain the todo-item itself
        const newTodo = document.createElement('li');
        newTodo.innerText = storedItem;
        newTodo.classList.add('todo-item');
        newTodo.classList.add('complete');
        todoDiv.appendChild(newTodo);
        
        // create Star button(check favourite/important task)
        const starBtn = document.createElement('button');
        starBtn.innerHTML = "<i class='fas fa-star'></i>";
        starBtn.classList.add('starBtn');
        todoDiv.appendChild(starBtn);

        //Append created todoDiv to todoList
        deleteList.appendChild(todoDiv);

    }
    
}



/*
    Function displays the show resolved button and 
    hides the deleted todoitems and can do this in
    reverse
*/

// Show resolved task



function displayHide() {
    showBtn.classList.remove('off-display');
    hideBtn.classList.add('off-display');
    deleteList.classList.add('off-display')
}

function displayShow() {
    if (deleteList.children.length == 0){
        noTask.classList.toggle('off-display');
    } else {
        noTask.classList.add('off-display');
        showBtn.classList.toggle('off-display');
        hideBtn.classList.toggle('off-display');    
        deleteList.classList.toggle('off-display');
    }
    
}