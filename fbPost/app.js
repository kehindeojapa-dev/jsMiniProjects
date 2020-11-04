
// SELECTORS
const images = document.querySelectorAll('.image-container img');
const myMind = document.querySelector('#myMind');
const upload = document.querySelector('#upload');
const postBtn = document.querySelector('.postBtn');
const postContainer = document.querySelector('.posts');

// fixing carousel Slides
setTimeout(() => {
    carouselContainer.classList.add('hide');
}, 20);

//shows postBtn when myMind field receives focus, and clear red border also 
myMind.addEventListener('focus', () => {
    postBtn.classList.remove('hide');
    myMind.style.border = '1px solid #ddd';
})

//creates post card when postBtn is clicked and myMind field isn't empty.
postBtn.addEventListener('click', (e)=> {
    if(myMind.value.length == '' || myMind.value.length == null) {
        myMind.style.border = '1px solid red';
    }
    else if(myMind.value.length > 1) {
        
        const post = document.createElement('div');
        post.classList.add('post');
        post.innerHTML = `
        <div class="post-content">
            <div class="image-grid">
                <img src="${images[0].src}" alt="post-img">
                <img src="${images[1].src}" alt="post-img">
            </div>
            <a href="#" class="showAll">Show All (${images.length})</a>
            <p>${myMind.value}</p>
        </div>
            

            <div class="post-engage">
                <button class="likeBtn"><i class='fas fa-thumbs-up'>Like</i></button>
                <button class="dislikeBtn"><i class="fas fa-thumbs-down">Dislike</i></button>
                <button class="commentBtn"><i class="fas fa-comment">Comment</i></button>
            </div>
            <div class="totalComment">
                <p class="noOfComment">0 comment(s)</p>
                <button class='showComment'><i class="fas fa-chevron-down"></i></button>
            </div>
            <div class="create-comment hide">
                <form action="">
                    <textarea name="comment" id="commentBox"></textarea>
                    <button type="submit" class='addComment'>comment</button>
                </form>
            </div>
        `
        postContainer.prepend(post);
        myMind.value = '';
        postBtn.classList.add('hide');
    } 
    
});

//when an item is clicked, this returns a standard array of the classlist existing for such item
function arrayedClassLIst(e) {
    let item = e.target;
    arrayedItem = Array.from(item.classList);
}

//function checks if item is a comment button, and shows the commentBox(toggles)
postContainer.addEventListener('click', openComment);
function openComment(e) {
    arrayedClassLIst(e);
    if(arrayedItem.includes('commentBtn')) {
        let item = e.target;
        commentItem = item.parentElement.nextSibling.nextSibling.nextSibling.nextSibling;
        commentItem.classList.toggle('hide');
        // alert('clicked');
    }
}

//clicking showAll reveals the slider
postContainer.addEventListener('click', openSlider);
function openSlider(e) {
    arrayedClassLIst(e);
    if(arrayedItem.includes('showAll')) {
        carouselContainer.classList.remove('hide');
    }
}


//function make the like and disline button to change appearance when clicked.
postContainer.addEventListener('click', likePost);
function likePost(e) {
    arrayedClassLIst(e);
    if(arrayedItem.includes('likeBtn')) {
        let likeItem = e.target;
        let dislikeItem = likeItem.nextSibling.nextSibling
        likeItem.classList.toggle('like');
        dislikeItem.classList.remove('dislike');
    }
}
postContainer.addEventListener('click', dislikePost);
function dislikePost(e) {
    arrayedClassLIst(e);
    if(arrayedItem.includes('dislikeBtn')) {
        let dislikeItem = e.target;
        let likeItem = dislikeItem.previousSibling.previousSibling;
        dislikeItem.classList.toggle('dislike');
        likeItem.classList.remove('like');
    }
}


//  Function adds comment to the postcard, the previousSibling and previousElements usage is to get the each components in the post card,
//  to be used for showing the comment.
postContainer.addEventListener('click', createComment)
function createComment(e) {
    e.preventDefault();
    arrayedClassLIst(e);
    if(arrayedItem.includes('addComment')) {
        let addCommentBtn = e.target;   //gets the commentBtn
        let commentBox = addCommentBtn.previousSibling.previousSibling;     //gets the commentTextarea
        let post = commentBox.parentElement.parentElement.parentElement;    //gets the post card
        let commentForm = commentBox.parentElement.parentElement;       //get the form field for the addComment
        const postComment = document.createElement('div');              //commentpost container
        postComment.classList.add('post-comment');
        postComment.innerHTML = `
            <main class="main-comment">
                <p>${commentBox.value}</p>
            </main>
            <div class="post-engage post-engage2">
                <button id="likeBtn" class = 'likeBtn'><i class='fas fa-thumbs-up'>Like</i></button>
                <button id="dislikeBtn" class = 'dislikeBtn'><i class="fas fa-thumbs-down">Dislike</i></button>
            </div>
        `;
        if(commentBox.value.length > 0) {
            post.appendChild(postComment);
            commentBox.value = '';
            commentForm.classList.add('hide');
        }
        

        //function checks for the numbers of comment available.
        function getComment() {
            let count = 0;
            let children = Array.from(post.children);
            children.forEach(child=> {
                let arrayedItem2 = Array.from(child.classList)
                if(arrayedItem2.includes('post-comment')) {
                    count++;
                }
            });
            children.forEach(child=> {
                let arrayedItem2 = Array.from(child.classList)
                if(arrayedItem2.includes('totalComment')) {
                    child.children[0].innerHTML = `${count} comment(s)`;
                }
            });
            // return console.log();
            return count;
        }


        setInterval(()=> {
            getComment();
        }, 1000);
    }
}


//  function gives the arrow(down) button show/hide feature.
postContainer.addEventListener('click', hideShowComment);
function hideShowComment(e) {
    let item = e.target;
    let post = item.parentElement.parentElement;
    let children = Array.from(post.children);
    
    if(arrayedItem.includes('showComment')) {
        children.forEach(child=> {
            let arrayedItem2 = Array.from(child.classList)
            if(arrayedItem2.includes('post-comment')) {
                child.classList.toggle('hide');
            }
        });
    }
}
