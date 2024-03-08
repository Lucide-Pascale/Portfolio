const mobile_links = document.getElementsByClassName("mobile-links");
console.log(mobile_links);
const desktop_links = document.getElementsByClassName("hideOnMobile");
console.log(desktop_links);

const clicked_links = (a) => {
  if (!a.classList.value.split(" ").includes("active")) {
    for (let i = 0; i <= 8; i++) {
      mobile_links[i].classList.remove("active");
      a.classList.add("active");
      hideSidebar();
    }
  }
  console.log(a.classList.value.split(" ").includes("active"));
};

const clicked_link = (a) => {
  if (!a.classList.value.split(" ").includes("active")) {
    for (let i = 0; i <= 8; i++) {
      desktop_links[i].classList.remove("active");
      desktop_links[1].classList.remove("active");
      hideSidebar();
    }

    a.classList.add("active");
  }
  console.log(a.classList.value.split(" ").includes("active"));
};
const showSidebar = () => {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "flex";
  console.log("okay=================");
};
const hideSidebar = () => {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "none";
};

function getCurrentYear() {
  return new Date().getFullYear();
}

function updateCopyright() {
  var copyrightElement = document.getElementById("copyright");
  if (copyrightElement) {
    var startYear = 2022;
    var currentYear = getCurrentYear();
    var copyrightText =
      startYear === currentYear
        ? "© " + startYear + " All Rights Reserved by MUGISHA Joseph."
        : "© " +
          startYear +
          "-" +
          currentYear +
          " All Rights Reserved by MUGISHA Joseph.";

    copyrightElement.textContent = copyrightText;
  }
}
window.onload = updateCopyright;

document
  .getElementById("downloadButton")
  .addEventListener("click", function () {
    var downloadLink = document.createElement("a");
    downloadLink.setAttribute("href", "assets/resume.pdf");
    downloadLink.setAttribute("download", "resume.pdf");
    downloadLink.click();
  });

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

function postComment() {
  var commentInput = document.getElementById("editor");
  var namesInput = document.getElementById("names");

  var commentList = document.getElementById("comments-container");
  var commentText = commentInput.value;
  var nameText = namesInput.value;
  commentInput.value = "";
  console.log(commentText);

  var newComment = document.createElement("li");
  newComment.innerHTML = `    <div id="comments-container">
  <div id="comment-item" style="background-color: var(--back-color); border-radius: 2px; padding: 5px; display: flex; align-items: center; width: 30%; margin: 10px 0px;">
      <div class="imagec" style="width: 60px;">
          <img src="./Assets/profile.JPG" alt="" style="width: 100%; border-radius: 50%;">
      </div>
      <div class="comment-content">
          <div class="div" style="">
              <p style="margin: 3px; font-size: .8rem;">${nameText}</p>
              <p style="margin: 3px; font-size: .6rem;">12:00pm 1 jan 2024</p>
          </div>
          <p style="margin: 3px; font-size: .7rem;">${commentText}</p>
      </div>
  </div>`;
  commentList.appendChild(newComment);
}

const redirectButton = document.getElementById("redirectButton");

// Add a click event listener to the button
redirectButton.addEventListener("click", function () {
  // Specify the URL of the page you want to redirect to
  const targetPageURL = "./singleBlog.html";

  // Redirect to the specified URL
  window.location.href = targetPageURL;
});

var nameError = document.getElementById("name-error");
var lnameError = document.getElementById("lname-error");
var phoneError = document.getElementById("phone-error");
var emailError = document.getElementById("email-error");
var messageError = document.getElementById("message-error");
var submitError = document.getElementById("submit-error");
submitError.disabled = true;
function validateName() {
  var name = document.getElementById("contact-name").value;

  if (name.length == 0) {
    nameError.innerHTML = `<i class='bx bxs-x-circle'></i>Name is required`;
    submitError.disabled = true;
    return false;
  }
  if (name.split(" ").length > 1) {
    nameError.innerHTML = `<i class='bx bxs-x-circle'></i>Remove space in name`;
    return false;
  }
  nameError.innerHTML = '<i class="fas fa-check-circle" style="color:green;">';
  return true;
}
function validatelName() {
  var name = document.getElementById("contact-lname").value;

  if (name.length == 0) {
    lnameError.innerHTML = `<i class='bx bxs-x-circle'></i>Name is required`;
    submitError.disabled = true;
    return false;
  }
  if (name.split(" ").length > 1) {
    lnameError.innerHTML = `<i class='bx bxs-x-circle'></i>Remove space in name`;
    return false;
  }
  lnameError.innerHTML = '<i class="fas fa-check-circle" style="color:green;">';
  return true;
}

var name = document.getElementById("contact-name").value;
if (nameError.length === 0) {
  submitError.disabled = true;
} else {
  submitError.disabled = false;
}

function validatePhone() {
  var phone = document.getElementById("contact-phone").value;
  if (phone.length == 0) {
    phoneError.innerHTML = `<i class='bx bxs-x-circle'></i>Phone is reqired`;
    return false;
  }
  if (phone.length !== 10) {
    phoneError.innerHTML = `<i class='bx bxs-x-circle'>Phone should be 10 digits`;
    return false;
  }
  phoneError.innerHTML = '<i class="fas fa-check-circle" style="color:green;">';
  return true;
}
function validateEmail() {
  var email = document.getElementById("contact-email").value;

  if (email.length == 0) {
    emailError.innerHTML = `<i class='bx bxs-x-circle'>Email is required`;
    return false;
  }
  if (!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
    emailError.innerHTML = `<i class='bx bxs-x-circle'>Invalid email`;
    return false;
  }
  emailError.innerHTML = '<i class="fas fa-check-circle" style="color:green; ">';
  return true;
}
function validateMessage() {
  var message = document.getElementById("contact-message").value;
  var required = 30;
  var left = required - message.length;
  if (message.length == 0) {
    submitError.disabled = true;
    messageError.innerHTML = `<i class='bx bxs-x-circle'>Message is required`;
    return false;
  }
  if (left > 0) {
    submitError.disabled = true;
    messageError.innerHTML = `<i class='bx bxs-x-circle'>${left} more characters required`;
    return false;
  }
  messageError.innerHTML =
    '<i class="fas fa-check-circle" style="color:green;">';
  return true;
}
console.log(validateName());
function validateform() {
  if (
    !validateName() ||
    !validatePhone() ||
    !validateEmail() ||
    !validateMessage()
  ) {
    submitError.style.display = "block";
    submitError.innerHTML = "Please fix error";
      submitError.style.display = "none";
    return false;
  }
}



const signup = document.getElementById("Signup");

function hide() {
  var signUpSection = document.getElementById("signup");
  signUpSection.classList.toggle("hidden");

  var signinSection = document.getElementById("login");
  signinSection.classList.toggle("hidLogin"); // Corrected this line
}
