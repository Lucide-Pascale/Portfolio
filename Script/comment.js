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
//users
const users = {
  Joseph: {
    name: "MUGISHA Joseph",
    src: "/Assets/profile.jpg",
  },
  Qasim: {
    name: "Qasim ITUZE",
    src: "../Assets/profile.jpg",
  },
  Walmond: {
    name: "Walmond",
    src: "./Assets/profile.jpg",
  },
  Fabrice: {
    name: "Fabrice MUKUNZI",
    src: "./Assets/profile.jpg",
  },
};
//logged use
const loggedUser = users["Joseph"];

const authedUser = document.querySelector(".authed-user");
authedUser.innerHTML = `<img class="avatar" src='https://i.postimg.cc/6pJTyyVn/profile.jpg' alt="${loggedUser.name}">`;

const commentsWrapper = document.querySelector(".discussion__comments");

const createComment = (comment) => {
  const newDate = new Date(comment.createdAt);
  return `<div class="comment">
        <div class="avatar">
            <img class="avatar" src='${comment.picture}' alt="pic">
        </div>
        <div class="comment__body">
            <div class="comment__author">
                ${comment.name}
                <time datetime="${comment.createdAt}" class="comment__date">
                    ${timeSince(newDate)}
                </time>
            </div>
            <div class="comment__text">
                <p>${comment.comment}</p>
            </div>
        </div>
    </div>`;
};
const urlParams = new URLSearchParams(window.location.search);
const blogId = urlParams.get('blogId');
console.log(blogId);
const authtoken = localStorage.getItem("jwt");
let comments = [];
let comment;
const comment_func1 = async () => {
  try {
    const res = await axios({
      method: "GET",
      url: `http://localhost:8081/api/${blogId}/comment`,
      headers: { Authorization: `Bearer ${authtoken}` },
    });
    comment = res.data.data.comments;
    const commentsMapped = comment.map((comment) => createComment(comment));
    const innerComments = commentsMapped.join("");
    commentsWrapper.innerHTML = innerComments;
  } catch (e) {
    console.log(e);
  }
};
comment_func1();

const newCommentForm = document.getElementById("newcomment__form");
const newCommentTextarea = newCommentForm.querySelector("textarea");

document.getElementById("reset-button").addEventListener("click", () => {
  newCommentForm.reset();
});



const posting_comment_func = async (comment) => {
  try {
    const res = await axios({
      method: "POST",
      url: `http://localhost:8081/api/${blogId}/comment`,
      data: {
        comment: comment,
      },
      headers: { Authorization: `Bearer ${authtoken}` },
    });
  } catch (e) {
    console.log(e.response);
  }
};

newCommentForm.addEventListener("submit", (e) => {
  console.log(e);
  const newCommentTextareaValue = newCommentTextarea.value;
  posting_comment_func(newCommentTextareaValue);
  newCommentForm.reset();
  window.location.href='www.google.com'
});

const fetchBlogPosts=async()=> {
  try {
    const response = await axios({
        url:`http://localhost:8081/api/blog/${blogId}`,
        method: 'GET',
    });
    const blog=response.data.data.Blog
    console.log(blog.content);
    const singleBlog_Date=document.getElementById('single-date');
    const singleBlog_content=document.getElementById('singleblog_content');
    const singleBlog_title=document.getElementById('singleBlog_title');
    const imageElement = document.getElementById('image');
    singleBlog_Date.innerHTML=blog.CreateAt
    singleBlog_content.innerHTML = blog.content;
    singleBlog_title.innerHTML=blog.title;
    imageElement.src = `${blog.cover}`;
  } catch (error) {
    console.log("hello");
    console.error('Error fetching blog posts:', error);
    throw error; 
  }
}

fetchBlogPosts()
const like = document.getElementById("like-img");
var likesElement = document.getElementById("no-likes");
var likesCount = 0;
let commentCount = comments.length;
var nocomments = document.getElementById("no-comments");
nocomments.innerHTML = commentCount;

function incrementLikes() {
  if (likesCount == 0) {
    likesCount++;
  } else {
    likesCount--;
  }
  likesElement.innerHTML = likesCount;
}

const handleLike = () => {
  like.style.color = "#7a3fdf";

  like.addEventListener("click", () => {
    like.classList.toggle("bxs-heart");
    like.style.color = like.classList.contains("bxs-heart") ? "#d82323" : "";
    incrementLikes();
    const noLikesValue = noLikesInput.value;
  });
};

handleLike();
