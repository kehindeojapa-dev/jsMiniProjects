
// SELECTORS
const images = document.querySelectorAll('.postImages img');
const myMind = document.querySelector('#myMind');
const upload = document.querySelector('#upload');
const postBtn = document.querySelector('.postBtn');
const postContainer = document.querySelector('.posts');


myMind.addEventListener('focus', () => {
    postBtn.classList.remove('hide');
})
postBtn.addEventListener('click', (e)=> {
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
                <p>100 comments</p>
                <button><i class="fas fa-chevron-down"></i></button>
            </div>
            <div class="create-comment hide">
                <form action="">
                    <textarea name="comment" id="commentBox"></textarea>
                    <button type="submit">comment</button>
                </form>
            </div>
    `
    postContainer.prepend(post);
    myMind.value = '';
    postBtn.classList.add('hide');
});

postContainer.addEventListener('click', openComment);
function openComment(e) {
    let item = e.target;
    arrayedItem = Array.from(item.classList);
    if(arrayedItem.includes('commentBtn')) {
        // const commentContainer = document.querySelector('.create-comment');
        commentItem = item.parentElement.nextSibling.nextSibling.nextSibling.nextSibling;
        commentItem.classList.toggle('hide');
        // alert('clicked');
    }
}
let getComponents = setInterval(() => {
    const commentContainer = document.querySelector('.create-comment');
    const commentBtn = document.querySelector('.commentBtn');
    if(commentBtn != null && commentContainer != null) {
        // commentBtn.addEventListener('click', () => {
        //     commentContainer.classList.toggle('hide');
        //     console.log('clicked');
        // });
        clearTimeout(getComponents);
    }
}, 1000);
