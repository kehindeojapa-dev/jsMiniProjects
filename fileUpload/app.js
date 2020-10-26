const auth = document.getElementById('auth-keys');
const title = document.getElementById('title');
const description = document.getElementById('description');
const tag = document.getElementById('tag');
const software = document.getElementById('software')
const thumbfile = document.querySelector('#thumb');
const sourcefile = document.querySelector('#source')
const noFile = document.querySelector('#nofile1');
const noFile2 = document.querySelector('#nofile2');
const form = document.querySelector('.form-container form');
const authError = document.querySelector('#authError');
const titleError = document.querySelector('#titleError');
const tagError = document.querySelector('#tagError');
const dateError = document.querySelector('#dateError');
const softwareError = document.querySelector('#softwareError');
const thumbError = document.querySelector('#thumbError');
const sourceError = document.querySelector('#sourceError');
const para = document.querySelectorAll('p');

function siblings(paraError) {
    return paraError.previousSibling.previousSibling;
}

form.addEventListener('submit', (e)=> {
    let messages = [];
    if (auth.value === '' || auth.value === null ) {
        messages.push('Auth key is not provided')
        authError.textContent = 'Auth key is not provided'        
        siblings(authError).style.border = '1px solid red'
        setTimeout(()=> {
            siblings(authError).style.border = '1px solid rgba(17, 15, 19, 0.267)';
            authError.textContent = '';    
        }, 30000)
    }

    if (title.value === '' || title.value.length<=5) {
        messages.push('title is not valid');
        titleError.textContent = 'Title is not valid';
        siblings(titleError).style.border = '1px solid red'
        setTimeout(()=> {
            siblings(titleError).style.border = '1px solid rgba(17, 15, 19, 0.267)';
            titleError.textContent = '';    
        }, 30000)
    }

    if (tag.value === '') {
        messages.push('at least one tag must be given');
        tagError.textContent = 'tag is not not set';
        siblings(tagError).style.border = '1px solid red'
        setTimeout(()=> {
            siblings(tagError).style.border = '1px solid rgba(17, 15, 19, 0.267)';
            tagError.textContent = '';    
        }, 30000);
    }

    if (software.value == 'select') {
        messages.push('software selection not valid');
        softwareError.textContent = 'Select the proper software';
        siblings(softwareError).style.border = '1px solid red'
        setTimeout(()=> {
            siblings(softwareError).style.border = '1px solid rgba(17, 15, 19, 0.267)';
            softwareError.textContent = '';    
        }, 30000);
    }
    
    if (date.value == '') {
        messages.push('date not set');
        dateError.textContent = 'Date is required';
        siblings(dateError).style.border = '1px solid red'
        setTimeout(()=> {
            siblings(dateError).style.border = '1px solid rgba(17, 15, 19, 0.267)';
            dateError.textContent = '';    
        }, 30000);
    }

    if(thumbfile.value == '' ) {
        messages.push('no thumbfile uploaded');
        thumbError.textContent = 'thumbnail file required'
        setTimeout(()=> {
            thumbError.textContent = '';    
        }, 30000);
    }
    if(sourcefile.value == '' ) {
        messages.push('no sourcefile uploaded');
        sourceError.textContent = 'source file required'
        setTimeout(()=> {
            sourceError.textContent = '';    
        }, 30000);
    }

    if (messages.length > 0) {
        e.preventDefault();
        console.log(messages);
    } else {
        alert('Well done, success is yours')
    }

})


setInterval(() => {
    if (thumbfile.value != '') {
        noFile.innerText = 'File(s) uploaded';
    }
    if (sourcefile.value != '') {
        noFile2.innerText = 'File(s) uploaded'
    }
    clearInterval();
}, 3000);


