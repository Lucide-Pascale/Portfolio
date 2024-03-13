const timeSince = (date) => {
  const seconds = Math.floor((new Date() - date) / 1000);

  let interval = seconds / 31536000;

  if (interval > 1) {
    return Math.floor(interval) + " years ago";
  }
  interval = seconds / 2592000;
  if (interval > 1) {
    return Math.floor(interval) + " months ago";
  }
  interval = seconds / 86400;
  if (interval > 1) {
    return Math.floor(interval) + " days ago";
  }
  interval = seconds / 3600;
  if (interval > 1) {
    return Math.floor(interval) + " hours ago";
  }
  interval = seconds / 60;
  if (interval > 1) {
    return Math.floor(interval) + " minutes ago";
  }

  if (seconds < 10) {
    return "just now";
  }

  return Math.floor(seconds) + " seconds ago";
};

const users = {
  Joseph: {
    name: "MUGISHA Joseph",
    src: "../assets/profile.jpg",
  },
  Qasim: {
    name: "Qasim ITUZE",
    src: "../assets/profile.jpg",
  },
  Walmond: {
    name: "Walmond",
    src: "../assets/profile.jpg",
  },
  Fabrice: {
    name: "Fabrice MUKUNZI",
    src: "../assets/profile.jpg",
  },
};

const loggedUser = users["Joseph"];

let comments = [
  {
    id: 1,
    text: "I am on it, will get back to you at the end of the week &#128526;.",
    author: users["Fabrice"],
    createdAt: "2023-09-03 12:00:00",
  },
  {
    id: 2,
    text: "I will prepare Instagram strategy, Fabrice will take care about Facebook.",
    author: users["Qasim"],
    createdAt: "2023-09-03 11:00:00",
  },
  {
    id: 3,
    text: "I would love to get on that marketing campaign &#128522;. What are the next steps?",
    author: users["Walmond"],
    createdAt: "2023-09-02 10:00:00",
  },
];

const authedUser = document.querySelector(".authed-user");
authedUser.innerHTML = `<img class="avatar" src="${users.Joseph.src}" alt="${loggedUser.name}">`;

const commentsWrapper = document.querySelector(".discussion__comments");

const createComment = (comment) => {
  const newDate = new Date(comment.createdAt);
  return `<div class="comment">
        <div class="avatar">
            <img class="avatar" src="${comment.author.src}" alt="${
    comment.author.name
  }">
        </div>
        <div class="comment__body">
            <div class="comment__author">
                ${comment.author.name}
                <time datetime="${comment.createdAt}" class="comment__date">
                    ${timeSince(newDate)}
                </time>
            </div>
            <div class="comment__text">
                <p>${comment.text}</p>
            </div>
        </div>
    </div>`;
};

const commentsMapped = comments.map((comment) => createComment(comment));
const innerComments = commentsMapped.join("");
commentsWrapper.innerHTML = innerComments;

const newCommentForm = document.getElementById("newcomment__form");
const newCommentTextarea = newCommentForm.querySelector("textarea");

document.getElementById("reset-button").addEventListener("click", () => {
  newCommentForm.reset();
});

newCommentForm.addEventListener("submit", (e) => {
  e.stopPropagation();
  e.preventDefault();
  console.log(e);
  const newCommentTextareaValue = newCommentTextarea.value;
  console.log(newCommentTextarea);

  const newComment = {
    id: comments.length + 1,
    text: newCommentTextareaValue,
    author: loggedUser,
    createdAt: new Date().toISOString(),
  };

  const comment = document.createElement("div");
  comment.innerHTML = createComment(newComment);

  commentsWrapper.insertBefore(comment, commentsWrapper.firstChild);

  newCommentForm.reset();
});


//like functionalities
const like = document.getElementById('like-img');
var likesElement = document.getElementById('no-likes');
var likesCount = 0;
let commentCount = comments.length;
var nocomments=document.getElementById('no-comments');
nocomments.innerHTML = commentCount;

function incrementLikes() {
  if(likesCount==0){
    likesCount++;
  }
  else{
    likesCount--;
  }
  likesElement.innerHTML = likesCount;
}

const handleLike = () => {
  like.style.color = '#7a3fdf';

  like.addEventListener('click', () => {
    like.classList.toggle('bxs-heart');
    like.style.color = like.classList.contains('bxs-heart') ? '#d82323' : '';
    incrementLikes();
    const noLikesValue = noLikesInput.value;
    console.log(noLikesValue);
  });
}

handleLike();
