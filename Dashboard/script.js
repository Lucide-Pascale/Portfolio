const expand_btn = document.querySelector(".expand-btn");
if(!localStorage.getItem('jwt')){
  window.location.href='/my-brand'
}
const currentUserString = localStorage.getItem("user");
const currentUser = JSON.parse(currentUserString);
if(currentUser.role=='user'){
  window.location.href='/'
}

let activeIndex;

expand_btn.addEventListener("click", () => {
  document.body.classList.toggle("collapsed");
});

const allLinks = document.querySelectorAll(".sidebar-links a");

allLinks.forEach((elem) => {
  elem.addEventListener("click", function () {
    const hrefLinkClick = elem.href;

    allLinks.forEach((link) => {
      if (link.href == hrefLinkClick) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
  });
});

ctx = document.getElementById("chart");

Chart.defaults.color = "#0d2030";
Chart.defaults.font.family = "Poppins";

new Chart(ctx, {
  type: "line",
  data: {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Monthly Mybrand performance",
        data: [
          2235, 3250, 1890, 5400, 20240, 6254, 12325, 4856, 10325, 2254, 22356,
          8486,
        ],
        backgroundColor: "white",
        borderColor: "#7a3fdf",
        borderRadius: 6,
        cubicInterpolationMode: "monotone",
        fill: false,
        borderSkipped: false,
      },
    ],
  },
  options: {
    interaction: {
      intersect: false,
      mode: "index",
    },
    elements: {
      point: {
        radius: 0,
      },
    },
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: "Monthly Mybrand performance",
        padding: {
          bottom: 16,
        },
        color: "#0d2030",
        font: {
          size: 16,
          weight: "normal",
        },
      },
      tooltip: {
        backgroundColor: "#7a3fdf",
        bodyColor: "#fff",
        yAlign: "bottom",
        cornerRadius: 4,
        titleColor: "#fff",
        usePointStyle: true,
        color: "red",
        callbacks: {
          label: function (context) {
            if (context.parsed.y !== null) {
              const label = new Intl.NumberFormat().format(context.parsed.y);
              return label;
            }
            return null;
          },
        },
      },
    },
    scales: {
      x: {
        border: {
          dash: [2, 7],
        },
        title: {
          text: "2023",
          color: "red",
        },
      },
      y: {
        grid: {
          color: "#0d2030",
        },
        border: {
          dash: [4, 2],
        },

        title: {
          display: true,
          text: "Vistors",
          color: "#0d2030",
        },
      },
    },
  },
});

// users

const deleteUser = async (userId, authToken) => {
  try {
    const res = await axios({
      method: "DELETE",
      url: `https://my-brand-be-1-p2x5.onrender.com/api/users/${userId}`,
      headers: { Authorization: `Bearer ${authToken}` },
    });
    console.log(res.data);
    iziToast.show({
      message: "User deleted successful",
      position: "topRight",
      progressBarColor: "#7a3fdf",
      timeout: 2000,
    });
    console.log(userId);
    setTimeout(() => {
      window.location.reload();
    }, 2000);
  } catch (error) {
    console.error("Error deleting user:", error);
  }
};

document.addEventListener("DOMContentLoaded", async () => {
  const authToken = localStorage.getItem("jwt");
  try {
    const teamMember = await axios({
      method: "GET",
      url: "https://my-brand-be-1-p2x5.onrender.com/api/users",
      headers: { Authorization: `Bearer ${authToken}` },
    });
    let userCount = document.querySelector(".table-row-count");
    userCount.innerHTML = `(${teamMember.data.results}) User`;
    const teamMembers = teamMember.data.data.User;
    console.log(teamMembers);

    const tableBody = document.getElementById("user");
    const userStatus = "active";
    const mappedRecords = teamMembers.map((user) => {
      return `<tr>
        <td class="user-profile">
            <img src='https://i.postimg.cc/6pJTyyVn/profile.jpg' alt="${user.name}">
            <span class="profile-info">
                <span class="profile-info__name">
                    ${user.name}
                </span>
            </span>
        </td>
        <td>
            <span class="status status--${userStatus}">
                ${userStatus}
            </span>
        </td>
        <td>${user.email}</td>
        <td>${user.role}</td>
        <td><i class='bx bxs-trash delete-icon' data-userid="${user._id}"></i></td>
        <td><i class='bx bxs-edit'></i></td>
    </tr>`;
    });

    tableBody.innerHTML = mappedRecords.join("");
    const deleteIcons = document.querySelectorAll(".delete-icon");
    deleteIcons.forEach((icon) => {
      icon.addEventListener("click", (event) => {
        const userId = event.target.dataset.userid;
        console.log(userId); // Get user ID from data attribute
        deleteUser(userId, authToken); // Pass user ID to deleteUser function
      });
    });
  } catch (error) {
    console.error("Error fetching or rendering users:", error);
  }
});

//notification handlers
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
const notification = [
  {
    name: "Joseph MUGISHA",
    message: "New user is created.",
    status: "New_User",
    createdAt: "2023-09-02 10:00:00",
  },
  {
    name: "Joseph MUGISHA",
    message: "New post is added. **post title**",
    status: "Post",
    createdAt: "2023-09-02 10:00:00",
  },
  {
    name: "Joseph MUGISHA",
    message: "Liked your post",
    status: "Like",
    createdAt: "2023-05-02 10:00:00",
  },
  {
    name: "Joseph MUGISHA",
    message: "commented on your post",
    status: "Comment",
    createdAt: "2023-03-02 10:00:00",
  },
  {
    name: "Joseph MUGISHA",
    message: "Message you **Message**",
    status: "Message",
    createdAt: "2023-05-02 10:00:00",
  },
  {
    name: "Joseph MUGISHA",
    message: "commented on your post",
    status: "Comment",
    createdAt: "2023-06-02 10:00:00",
  },
  {
    name: "Joseph MUGISHA",
    message: "Message you **Message**",
    status: "Message",
    createdAt: "2023-01-02 10:00:00",
  },
];
let notificationCount = document.querySelector(".notification-count");
notificationCount.innerHTML = `Notifications (${notification.length})`;

// Update notification body
let notificationBody = document.getElementById("notification-body");
notificationBody.innerHTML = notification
  .map((notification) => {
    const newDate = new Date(notification.createdAt);
    return `<tr>
    <td class="notification-content">
        <span class="status status--${notification.status}">
          ${notification.status}
        </span>
          <span class="nat-name">
            ${notification.name}
          </span>
      <span class="nat-message">${notification.message}</span>
      <td>
      <td style="width: 20%;">
      <time datetime="${notification.createdAt}" class="comment__date">
          ${timeSince(newDate)}
      </time>
  </td>
      
  </tr>`;
  })
  .join("");

//Logout
const logout = document.getElementById("logout");

logout.addEventListener("click", logoutFunc);

function logoutFunc() {
  console.log("logged out");
  const Message = "Logged out successfully";
  iziToast.show({
    message: Message,
    position: "topRight",
    progressBarColor: "#7a3fdf",
  });
  setTimeout(() => {
    localStorage.removeItem("jwt");
    localStorage.removeItem("user");
    window.location.href = "../index.html";
  }, 2000);
}

function blogAlert(message) {
  console.log("message: " + message);
  showNotification(message);
}

const modalDialog = document.querySelector(".copy-link-dialog");
const shareBtn = document.querySelector(".share-btn");
const closeBtn = document.querySelector(".close-btn");
const copyBtn = document.querySelector(".copy-btn");

shareBtn.addEventListener("click", () => {
  modalDialog.classList.remove("copy-link-dialog--fadeout");
  modalDialog.showModal();
});

closeBtn.addEventListener("click", () => {
  modalDialog.classList.add("copy-link-dialog--fadeout");
  modalDialog.close();
});

const dropzoneBox = document.getElementsByClassName("dropzone-box")[0];

const inputFiles = document.querySelectorAll(
  ".dropzone-area input[type='file']"
);

const inputElement = inputFiles[0];

const dropZoneElement = inputElement.closest(".dropzone-area");

inputElement.addEventListener("change", (e) => {
  if (inputElement.files.length) {
    updateDropzoneFileList(dropZoneElement, inputElement.files[0]);
  }
});

dropZoneElement.addEventListener("dragover", (e) => {
  e.preventDefault();
  dropZoneElement.classList.add("dropzone--over");
});

["dragleave", "dragend"].forEach((type) => {
  dropZoneElement.addEventListener(type, (e) => {
    dropZoneElement.classList.remove("dropzone--over");
  });
});

dropZoneElement.addEventListener("drop", (e) => {
  e.preventDefault();

  if (e.dataTransfer.files.length) {
    inputElement.files = e.dataTransfer.files;

    updateDropzoneFileList(dropZoneElement, e.dataTransfer.files[0]);
  }

  dropZoneElement.classList.remove("dropzone--over");
});

const updateDropzoneFileList = (dropzoneElement, file) => {
  let dropzoneFileMessage = dropzoneElement.querySelector(".message");

  dropzoneFileMessage.innerHTML = `
        ${file.name}, ${file.size} bytes
    `;
};

dropzoneBox.addEventListener("reset", (e) => {
  let dropzoneFileMessage = dropZoneElement.querySelector(".message");

  dropzoneFileMessage.innerHTML = `No Files Selected`;
});

dropzoneBox.addEventListener("submit", (e) => {
  e.preventDefault();
  const myFiled = document.getElementById("upload-file");
  console.log(myFiled.files[0]);
});

const deleteMessage = async (messageId, authToken) => {
  try {
    const res = await axios({
      method: "DELETE",
      url: `https://my-brand-be-1-p2x5.onrender.com/api/messages/${messageId}`,
      headers: { Authorization: `Bearer ${authToken}` },
    });
    console.log(res.data);
    console.log(messageId);
    iziToast.show({
      message: "Message deleted successfully",
      position: "topRight",
      progressBarColor: "#7a3fdf",
      timeout: 2000,
    });
  } catch (error) {
    console.error("Error deleting message:", error);
  }
};

document.addEventListener("DOMContentLoaded", async () => {
  try {
    const authtoken = localStorage.getItem("jwt");

    const messages = await axios({
      method: "GET",
      url: "https://my-brand-be-1-p2x5.onrender.com/api/messages",
      headers: { Authorization: `Bearer ${authtoken}` },
    });
    let message = messages.data.data.messages;
    console.log(message);

    let tableRowCount = document.querySelector(".message-row-count");
    tableRowCount.innerHTML = `(${message.length}) Messages`;

    let messageBody = document.getElementById("messages");

    const mappedMessage = message.map((message) => {
      return `<tr>
          <td class="user-profile">
              <img src='https://png.pngtree.com/png-vector/20191101/ourmid/pngtree-cartoon-color-simple-male-avatar-png-image_1934459.jpg' alt="${message.name}">
              <span class="profile-info">
                  <span class="profile-info__name">${message.firstname} ${message.lastname}</span>
                  <span class="profile-info__alias">${message.lastname}</span>
              </span>
          </td>
          <td>
              <span class="status status--${message.status}">${message.message}</span>
          </td>
          <td><i class='bx bxs-trash deletee-icon' data-messageid="${message._id}" style="color: var(--logout);"></i></td> 
      </tr>`;
    });

    messageBody.innerHTML = mappedMessage.join("");
    const deleteIcons = document.querySelectorAll(".deletee-icon");
    deleteIcons.forEach((icon) => {
      icon.addEventListener("click", (event) => {
        const userId = event.target.dataset.messageid;
        console.log(userId); // Get user ID from data attribute
        deleteMessage(userId, authtoken); // Pass user ID to deleteUser function
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      });
    });
  } catch (e) {
    console.log(e);
  }
});

// Attach event listener to the "Save" button
document
  .getElementById("submit-button")
  .addEventListener("click", async (event) => {
    event.preventDefault();
    let isloading = true;
    const title = document.getElementById("blog_title").value;
    const content = document.getElementById("blog_content").value;
    const image = document.getElementById("upload-file").files[0];
    console.log(title, content, image);

    if (!title || !image) {
      // isloading = false;
      // if(isloading) {
      //   document.getElementById("submit-button").style.display = "block";
      //   document.getElementById("submit-buttonn").style.display = "none";
      // }
      iziToast.error({
        message: "Please enter a title and upload a cover image.",
        position: "topRight",
        progressBarColor: "red",
        timeout: 2000,
      });
      return;
    }

    posting_Blog_func(title, content, image);
  });

const posting_Blog_func = async (title, content, cover) => {
  try {
    const authtoken = localStorage.getItem("jwt");
    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    formData.append("image", cover);
    let isloading = true;
    if (isloading) {
      document.getElementById("submit-button").style.display = "none";
      document.getElementById("submit-buttonn").style.display = "block";
    }

    const res = await axios({
      method: "POST",
      url: "https://my-brand-be-1-p2x5.onrender.com/api/blog",
      data: formData,
      headers: {
        Authorization: `Bearer ${authtoken}`,
        "Content-Type": "multipart/form-data",
      },
    });

    console.log(res.data.data.Blog);
    iziToast.show({
      message: "Blog created successfully",
      position: "topRight",
      progressBarColor: "#7a3fdf",
      timeout: 2000,
    });
    setTimeout(() => {
      window.location.reload();
    }, 2000);
  } catch (e) {
    isloading=true
    if (isloading) {
      document.getElementById("submit-button").style.display = "block";
      document.getElementById("submit-buttonn").style.display = "none";
    }
    console.log(e.response);
    iziToast.error({
      message: e.response.data.message,
      position: "topRight",
      progressBarColor: "#7a3fdf",
      timeout: 2000,
    });
  }
};

let blogs = [];
const deleteBlog = async (blogId, authToken) => {
  try {
    const res = await axios({
      method: "DELETE",
      url: `https://my-brand-be-1-p2x5.onrender.com/api/blog/${blogId}`,
      headers: { Authorization: `Bearer ${authToken}` },
    });
    iziToast.show({
      message: "Blog deleted successfully",
      position: "topRight",
      progressBarColor: "#7a3fdf",
    });
    setTimeout(() => {
      window.location.reload();
    }, 2000);
    console.log(res.data);
    console.log(messageId);
  } catch (error) {
    console.error("Error deleting blog:", error);
  }
};
function saveBlog(event) {
  event.preventDefault();

  const formData = new FormData(event.target);
  const title = formData.get("title");
  const content = formData.get("content");
  const image = formData.get("image");
  const blog = {
    title,
    content,
    image,
  };

  displayBlog(blog);
}

function displayBlog(blog) {
  const articlesDiv = document.querySelector(".articles");

  const article = document.createElement("article");
  article.innerHTML = `
    <figure>
      <img src="${blog.cover}" alt="Preview">
    </figure>
    <div class="article-preview">
      <h2>${blog.title}</h2>
      <div class="icons"><i class='bx bxs-trash' onclick="deleteBlog('${
        blog._id
      }', '${localStorage.getItem(
    "jwt"
  )}')"></i><i class='bx bx-edit' onclick="updateDirect('${
    blog._id
  }')"></i></div>
    </div>
  `;

  articlesDiv.appendChild(article);
}

const fetchBlogPosts = async () => {
  try {
    const response = await axios({
      url: `https://my-brand-be-1-p2x5.onrender.com/api/blog`,
      method: "GET",
    });
    const sampleBlogs = response.data.data.Blogs;
    console.log(sampleBlogs);
    sampleBlogs.forEach((blog) => {
      blogs.push(blog);
      displayBlog(blog);
    });
  } catch (error) {
    console.log("hello");
    console.error("Error fetching blog posts:", error);
    throw error;
  }
};

fetchBlogPosts();

const updateDirect = (blogId) => {
  window.location.href = "update.html?blog_id=" + blogId + "#blogs";
};


const user_name = document.getElementById("user-name");
user_name.innerHTML = currentUser.name;
const user_email = document.getElementById("user-email");
user_email.innerHTML = currentUser.email;

console.log(currentUser);
