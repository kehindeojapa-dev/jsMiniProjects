//  SELECTORS FOR CREATE ACCOUNT POPUP
const createBtn = document.querySelector("#create");
const closeBtn = document.querySelector('#closeBtn');
const signInContainer = document.querySelector('.signInContainer');

//Regular expression for email address and phone no
let regxp = /^\w+@\w+([.])com$/;
let regxp2 = /^\d+$|^\d+[-]\d+[-]\d+$/;


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
/*-----------------------------------------------------------------*/
/*-----------------------------------------------------------------*/
/*-----------------------------------------------------------------*/
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
        welcome.innerText = 'Welcome back to facebook';
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

/*-----------------------------------------------------------------*/
/*-----------------------------------------------------------------*/
/*-----------------------------------------------------------------*/
/*-----------------------------------------------------------------*/
/*-----------------------------------------------------------------*/

//SELECTORS FOR SIGNUP FORM
const firstName = document.querySelector('#firstname');
const surname = document.querySelector('#surname');
const emailNo = document.querySelector('#mobileEmail');
const newPassword = document.querySelector('#newPassword');
const month = document.querySelector('#month');
const year = document.querySelector('#year');
const genders = document.querySelectorAll(".genders input[type='radio']");
const customGender = document.querySelector('#customGender');
const signForm = document.querySelector('.signForm');
// selectors for each fields danger
const fnameDanger = document.querySelector('.fnameDanger');
const surnameDanger = document.querySelector('.surnameDanger');
const emailNoDanger = document.querySelector('.emailNoDanger');
const newPwdDanger = document.querySelector('.newPwdDanger');
const dobDanger = document.querySelector('.dobDanger');
const interval = 400;
//EVENT LISTENERS FOR SIGNUP FORM

//function to see if fieldname(value) is empty or not
//applies some certain display if condition is true.
function checkStatus(fieldname, fieldDanger) {
    if(fieldname.value == '' || fieldname.value == null) {
        fieldname.style.border = '1px solid red';
        fieldname.style.background = 'rgb(236, 235, 235)'
        fieldDanger.classList.remove('off-display');
    }
}

/*
    function makes the fieldname display to normal on receiving focus
*/
function defaultState(fieldname, fieldDanger) {
    setTimeout(()=>{
        fieldname.style.border = '1px solid #ddd';
        fieldname.style.background = '#fff'
        fieldDanger.classList.add('off-display');
    }, interval);
}

/*
    function behave as defaultState() above, but without no timeout function
*/
function showDanger(fieldname, fieldDanger) {
    fieldname.style.border = '1px solid red';
    fieldDanger.classList.remove('off-display');
}

/*
    function check for all fieldinputs before gender and add necessary display
    to fieldinputs whose value is empty or invalid
*/
function statusBeforeGender() {
    checkStatus(firstName, fnameDanger);
    checkStatus(surname, surnameDanger);
    checkStatus(emailNo, emailNoDanger);
    checkStatus(newPassword, newPwdDanger);
    if(month.value == 'month') {
        showDanger(month, dobDanger);
    }
    if(year.value == 'year') {
        showDanger(year, dobDanger);
    }   
}

firstName.addEventListener('focus', ()=> {
    defaultState(firstName, fnameDanger);
});

surname.addEventListener('focus', ()=>{
    checkStatus(firstName, fnameDanger);
    defaultState(surname, surnameDanger);
})

emailNo.addEventListener('focus', ()=>{
    checkStatus(firstName, fnameDanger);
    checkStatus(surname, surnameDanger);
    defaultState(emailNo, emailNoDanger);
});

newPassword.addEventListener('focus', ()=>{
    checkStatus(firstName, fnameDanger);
    checkStatus(surname, surnameDanger);
    checkStatus(emailNo, emailNoDanger);
    defaultState(newPassword, newPwdDanger);
    newPassword.setAttribute('placeholder', 'New Password');
})

month.addEventListener('focus', () => {
    checkStatus(firstName, fnameDanger);
    checkStatus(surname, surnameDanger);
    checkStatus(emailNo, emailNoDanger);
    checkStatus(newPassword, newPwdDanger);
    defaultState(month, dobDanger);
});

year.addEventListener('focus', () => {
    checkStatus(firstName, fnameDanger);
    checkStatus(surname, surnameDanger);
    checkStatus(emailNo, emailNoDanger);
    checkStatus(newPassword, newPwdDanger);
    if(month.value == 'month') {
        showDanger(month, dobDanger);
    }
    defaultState(year, dobDanger);
});

/*
    Loop is carried out to see if inputs before the gender selection is filled
    and also add an extra input:text if custom option is selected.
*/
genders.forEach(gender=>{
    gender.addEventListener('click',()=> {
        if(gender.value == 'male') {
            statusBeforeGender();
            customGender.classList.add('off-display');
        }
        if(gender.value == 'female') {
            statusBeforeGender();
            customGender.classList.add('off-display');
        }
        if(gender.value == 'custom') {
            statusBeforeGender();
            customGender.classList.remove('off-display');
        }
    }) 
});
/*
    for making warning display to disappear once a gender option has been selectee
*/
genders.forEach(gender=> {
    gender.addEventListener('click', ()=> {
        genders.forEach(gender=> {
            gender.parentNode.style.border = '1px solid #ddd';
        });
    }) 
})

customGender.addEventListener('focus', ()=> {
    statusBeforeGender();
    customGender.style.border = '1px solid #ddd'
    // if()
})

/*-----------------------------------------------------------------*/
/*-----------------------------------------------------------------*/
/*-----------------------------------------------------------------*/
/*-----------------------------------------------------------------*/
/*-----------------------------------------------------------------*/

/**
 * SIGN-UP FORM VALIDATION
 */

signForm.addEventListener('submit', (e)=>{
    // e.preventDefault();
    /*
        container for input/select fields error
    */
    let errorTickets = [];

    if(firstName.value == '' || firstName.value == null) {
        showDanger(firstName,fnameDanger);
        
        errorTickets.push('firstname not set');
    };

    if(surname.value == '' || surname.value == null) {
        showDanger(surname,surnameDanger);
        errorTickets.push('surname not set');
    };

    //test input for correct email address or phone no
    if (!(regxp.test(emailNo.value))) { 
        if(!(regxp2.test(emailNo.value))) {
            errorTickets.push('email not valid');
            showDanger(emailNo, emailNoDanger);
        }
    }
    //test input for correct email address or phone no
    if(!(regxp2.test(emailNo.value))) {
        if (!(regxp.test(emailNo.value))) {
            errorTickets.push('phoneNo not valid');
            showDanger(emailNo, emailNoDanger);
        }    
    }

    if(newPassword.value == '' || newPassword.value == null) {
        errorTickets.push('password not valid');
        showDanger(newPassword, newPwdDanger);
    }
    if(newPassword.value.length < 6) {
        errorTickets.push('password length too short');
        showDanger(newPassword,newPwdDanger);
        newPassword.value = '';
        newPassword.setAttribute('placeholder', 'Password must contain atleast 6 characters');
    }
    if(month.value == 'month') {
        errorTickets.push('month value not given');
        showDanger(month, dobDanger);
    }
    if(year.value == 'year') {
        errorTickets.push('year value not given');
        showDanger(year, dobDanger);
    }

    /*
        counter loop to check if none of the gender selection is chosen
    */
    let genderCount = 0
    for(let i = 0; i < genders.length; i++) {
        if(genders[i].checked == false) {
            genderCount++;
        } else {
            genderCount = genderCount;
        }
    }
    if (genderCount == 3) {
        errorTickets.push('no gender selected');
        genders.forEach(gender=>{
            gender.parentNode.style.border = '1px solid red';
        })
    }
    
    /*
        Checks if the custom gender radio is clicked and the customGender input is empty
    */
    if (genders[2].checked == true && (customGender.value == '' || customGender.value == null)) {
        errorTickets.push('custom gender field is empty');
        customGender.style.border = '1px solid red';
    }
    /*
        Checks to see if the error container has errors in it; if its more than zero,
        the form doesn't submit until/unless the error container has no occupier. 
    */
    if(errorTickets.length > 0) {
        e.preventDefault();
    } else {
        e.preventDefault();
        signInContainer.classList.remove('active');
        welcome.innerText = 'Welcome to Facebook';
        welcome.classList.remove('hide2');
        setTimeout(()=> {
            welcome.classList.add('hide2');
        }, 3000);
        firstName.value = '';
        surname.value = '';
        emailNo.value = '';
        newPassword.value = '';
        month.value = 'month';
        year.value = 'year';
        genders[0].checked = false;
        genders[1].checked = false;
        genders[2].checked = false;
    }
})