const expand_btn = document.querySelector(".expand-btn");

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
const teamMembers = [
  {
    src: "assets/profile.jpg",
    name: "Joseph MUGISHA",
    alias: "@joseph",
    email: "mugisha092@gmail.com",
    status: "offline",
  },
  {
    src: "../assets/profile.jpg",
    name: "Joseph MUGISHA",
    alias: "@joseph",
    email: "mugisha092@gmail.com",
    status: "inactive",
  },
  {
    src: "/assets/profile.jpg",
    name: "Joseph MUGISHA",
    alias: "@joseph",
    email: "mugisha092@gmail.com",
    status: "active",
  },
  {
    src: "/assets/profile.jpg",
    name: "Joseph MUGISHA",
    alias: "@joseph",
    email: "mugisha092@gmail.com",
    status: "active",
  },
  {
    src: "/assets/profile.jpg",
    name: "Joseph MUGISHA",
    alias: "@joseph",
    email: "mugisha092@gmail.com",
    status: "active",
  },
  {
    src: "/assets/profile.jpg",
    name: "Joseph MUGISHA",
    alias: "@joseph",
    email: "mugisha092@gmail.com",
    status: "active",
  },
  {
    src: "/assets/profile.jpg",
    name: "Joseph MUGISHA",
    alias: "@joseph",
    email: "mugisha092@gmail.com",
    status: "active",
  },
  {
    src: "/assets/profile.jpg",
    name: "Joseph MUGISHA",
    alias: "@joseph",
    email: "mugisha092@gmail.com",
    status: "active",
  },
  {
    src: "/assets/profile.jpg",
    name: "Joseph MUGISHA",
    alias: "@joseph",
    email: "mugisha092@gmail.com",
    status: "active",
  },
  {
    src: "/assets/profile.jpg",
    name: "Joseph MUGISHA",
    alias: "@joseph",
    email: "mugisha092@gmail.com",
    status: "active",
  },
  {
    src: "/assets/profile.jpg",
    name: "Joseph MUGISHA",
    alias: "@joseph",
    email: "mugisha092@gmail.com",
    status: "active",
  },
  {
    src: "/assets/profile.jpg",
    name: "Joseph Ishimwe",
    alias: "@joseph",
    email: "mugisha092@gmail.com",
    status: "offline",
  },
  {
    src: "/assets/profile.jpg",
    name: "Joseph MUGISHA",
    alias: "@joseph",
    email: "mugisha092@gmail.com",
    status: "active",
  },
  {
    src: "/assets/profile.jpg",
    name: "Joseph MUGISHA",
    alias: "@joseph",
    email: "mugisha092@gmail.com",
    status: "active",
  },
  {
    src: "/assets/profile.jpg",
    name: "Joseph MUGISHA",
    alias: "@joseph",
    email: "mugisha092@gmail.com",
    status: "active",
  },
  {
    src: "/assets/profile.jpg",
    name: "Joseph MUGISHA",
    alias: "@joseph",
    email: "mugisha092@gmail.com",
    status: "active",
  },
];

// users
let tableRowCount = document.getElementsByClassName("table-row-count");
tableRowCount[0].innerHTML = `(${teamMembers.length}) Users`;
console.log(tableRowCount);

let tableBody = document.getElementById("user");

const mappedRecords = teamMembers.map((users) => {
  return `<tr>
        <td class="user-profile">
            <img src='${users.src}' alt="${users.name}">
            <span class="profile-info">
                <span class="profile-info__name">
                    ${users.name}
                </span>
                <span class=profile-info__alias>
                    ${users.alias}
                </span>
            </span>
        </td>
        <td>
            <span class="status status--${users.status}">
                ${users.status}
            </span>
        </td>
        <td>${users.email}</td>
        <td>************</i></td>
        <td><i class='bx bxs-trash'></i></td>
        <td><i class='bx bxs-edit'></i></td>
    </tr>`;
});

tableBody.innerHTML = mappedRecords.join("");

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
  const Message = "Logged out";
  showNotification(Message);
  console.log("logged out");
  setTimeout(() => {
    localStorage.removeItem("userToken");
    localStorage.removeItem("currentUser");
    window.location.href = "../index.html";
  }, 2000);
}
var messageinput = document.getElementById("messageinput");
function showNotification(message) {
  var notification = document.querySelector(".notifications");
  messageinput.innerHTML = message;
  notification.style.display = "block";
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

document.addEventListener("DOMContentLoaded", function() {
  const message = [
    {
        src: "./assets/profile.jpg",
        name: "Joseph MUGISHA",
        alias: "@joseph",
        message: "Hey, how's it going?"
    },
    {
        src: "./assets/profile.jpg",
        name: "Emily Smith",
        alias: "@emily",
        message: "I'm good, thanks! How about you?"
    },
    {
        src: "./assets/profile.jpg",
        name: "John Doe",
        alias: "@john",
        message: "Anyone up for a game of basketball?"
    },
    {
        src: "./assets/profile.jpg",
        name: "Alice Johnson",
        alias: "@alice",
        message: "Just finished my work, time for a coffee break!"
    },
    {
        src: "./assets/profile.jpg",
        name: "Michael Brown",
        alias: "@michael",
        message: "Happy birthday to our colleague, Sarah!"
    },
    {
        src: "./assets/profile.jpg",
        name: "Sophia Lee",
        alias: "@sophia",
        message: "Does anyone know where the meeting room is?"
    },
    {
        src: "./assets/profile.jpg",
        name: "David Wilson",
        alias: "@david",
        message: "Looking forward to the weekend!"
    },
    {
        src: "./assets/profile.jpg",
        name: "Emma Garcia",
        alias: "@emma",
        message: "Just submitted my project proposal, fingers crossed!"
    },
    {
        src: "./assets/profile.jpg",
        name: "Daniel Martinez",
        alias: "@daniel",
        message: "Has anyone seen my phone?"
    },
    {
        src: "./assets/profile.jpg",
        name: "Olivia Taylor",
        alias: "@olivia",
        message: "Excited about the upcoming team outing!"
    }
];

  let tableRowCount = document.querySelector(".message-row-count");
  tableRowCount.innerHTML = `(${message.length}) Messages`;

  let messageBody = document.getElementById("messages");

  const mappedMessage = message.map((message) => {
      return `<tr>
          <td class="user-profile">
              <img src='profile.jpg' alt="${message.name}">
              <span class="profile-info">
                  <span class="profile-info__name">${message.name}</span>
                  <span class="profile-info__alias">${message.alias}</span>
              </span>
          </td>
          <td>
              <span class="status status--${message.status}">${message.message}</span>
          </td>
          <td><i class='bx bxs-trash' style="color: var(--logout);"></i></td> 
      </tr>`;
  });

  messageBody.innerHTML = mappedMessage.join("");
});





