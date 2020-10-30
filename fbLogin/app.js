//  SELECTORS FOR CREATE ACCOUNT POPUP
const createBtn = document.querySelector("#create");
const closeBtn = document.querySelector('#closeBtn');
const signInContainer = document.querySelector('.signInContainer');

//EVENT LISTENERS FOR CREATE ACCOUNT POPUP
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

/*-----------------------------------------------------------------*/


//SElECTORS FOR LOGIN-FORM VALIDATION
const userId = document.getElementById('userId');
const userPwd = document.getElementById('userPassword');
const loginForm = document.querySelector('#loginForm');
const welcome = document.querySelector('#welcome')
const emailNoError = document.getElementById('emailNoError');
const pwdError = document.getElementById('pwdError');
//EVENT LISTENER FOR LOGIN-FORM VALIDATION
loginForm.addEventListener('submit', (e)=> {
    //Storage for error cases
    let messages = [];
    //Regular expression for email address and phone no
    let regxp = /^\w+@\w+([.])com$/;
    let regxp2 = /^\d+$|^\d+[-]\d+[-]\d+$/;
    if(userId.value === '' || userId.value === null) {
        messages.push('userId error');
        userId.style.border = '1px solid red'
        // userId.previousSibling.style.border = 'red';
    }

    //test input for correct email address or phone no
    if (!(regxp.test(userId.value))) { 
        if(!(regxp2.test(userId.value))) {
            //sends error message to errorContainer 
            //and send warning also to the user when the
            //submit button is clicked(when error occur) 
            messages.push('user email not valid');
            emailNoError.classList.remove('off-display');
        }
    }
    if(!(regxp2.test(userId.value))) {
        if (!(regxp.test(userId.value))) { 
            //sends error message to errorContainer 
            //and send warning also to the user when the
            //submit button is clicked(when error occur) 
            messages.push('user phoneNo not valid');
            emailNoError.classList.remove('off-display');
        }    
    }

    //checks if password length is greater than 5
    if(userPwd.value.length < 6) {
        messages.push('userpwd error');
        userPwd.style.border = '1px solid red';
        pwdError.classList.remove('off-display');
    }
    //If error Storage contains one or more error, 
    //the submit button default behaviour is stopped.
    //if it contain nothing, the button is fired.
    if(messages.length > 0) {
        event.preventDefault();
        // console.log(messages.join(','))
    } else {
        event.preventDefault();
        welcome.classList.remove('hide2');
        setTimeout(()=> {
            welcome.classList.add('hide2');
            userId.value = '';
            userPwd.value = '';
        }, 2000)
    }
}) 
   

//This lines make sure the warning(red) are removed when
//user starts typing again on fields containing error messages.
userId.addEventListener('input', ()=> {
    setTimeout(()=> {
        userId.style.border = '1px solid rgb(219, 215, 215)';
        emailNoError.classList.add('off-display');
    }, 300)
});

userPwd.addEventListener('input', ()=> {
    setTimeout(()=> {
        userPwd.style.border = '1px solid rgb(219, 215, 215)';
        pwdError.classList.add('off-display');
    }, 300)
});



