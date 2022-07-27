const counter = document.getElementById ('counter');
const minus = document.getElementById ('minus');
const plus = document.getElementById ('plus');
const heart = document.getElementById('heart');
const pause= document.getElementById('pause');
const like = document.getElementById('likes');
const commentForm = document.getElementById("comment-form");
const commentValue = document.getElementById ("comment-input")
const submit = document.getElementById("submit");
const commentList = document.getElementById("moreComments");
const timerRunning = true;
const comments= document.getElementById('list');

/* counter */

function counting() {
    counter.innerHTML = parseInt(counter.innerHTML) + 1;
}
let countIndex = setInterval(counting, 1000);

function increment(){
    clearTimeout(countIndex);
    counter.innerHTML = parseInt(counter.innerHTML) + 1;
}

function decrement() {
    clearTimeout(countIndex);
    counter.innerHTML = parseInt (counter.innerHTML) -1;
}
plus.addEventListener ("click", increment);
minus.addEventListener ("click" , decrement);

/*heart section*/

function liking(){
    like.innerHTML += `<li> ${counter.innerHTML} has been liked</li>`;
}

heart.addEventListener('click', liking);


pause.addEventListener ('click', function () {
    if (pause.innerText === 'pause'){
        clearTimeout (countIndex);
        pause.innerText = 'resume';
        like.disabled = true;
        minus.disabled = true;
        plus.disabled = true;
        submit.disabled = true;
        commentForm.disabled = true;
    }else if (pause.innerHTML === 'resume'){
        pause.innerText = 'pause';
        counter.innerText = parseInt(counter.innerText) + 1;
    }
})

/*comment form */
commentForm.addEventListener ('submit', function (event){
    event.preventDefault();
    const newComment= document.createElement ("li");
    let commentDetail = document.createTextNode (`${commentValue.value}`)
    newComment.appendChild (commentDetail);
    comments.appendChild(newComment);
    commentForm.value = "";
    /*comments.innerHTML = `<li>${commentValue.value}</li>` 
    this also works however everything is on the same line */
    
})
