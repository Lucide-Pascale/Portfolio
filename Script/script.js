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
  emailError.innerHTML =
    '<i class="fas fa-check-circle" style="color:green; ">';
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

const passwordValidation = () => {
  var passwordError = document.getElementById("passwordError");
  let regex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$/;
  var password = document.getElementById("password").value;

  if (password.length < 8 || password.length > 15) {
    passwordError.innerHTML = `<i class='bx bxs-x-circle'>Password must be between 8 and 15 characters.`;
    return;
  }

  if (!/(?=.*[a-z])/.test(password)) {
    passwordError.innerHTML = `<i class='bx bxs-x-circle'>Password must contain at least one lowercase letter.`;
    return;
  }

  if (!/(?=.*[A-Z])/.test(password)) {
    passwordError.innerHTML = `<i class='bx bxs-x-circle'>Password must contain at least one uppercase letter.`;
    return;
  }

  if (!/(?=.*\d)/.test(password)) {
    passwordError.innerHTML = `<i class='bx bxs-x-circle'>Password must contain at least one digit.`;
    return;
  }

  if (!/(?=.*[@.#$!%*?&])/.test(password)) {
    passwordError.innerHTML = `Password must contain at least one special character among @.#$!%*?&.`;
    return;
  }

  passwordError.innerHTML = `'<i class="fas fa-check-circle" style="color:green; ">`;
};

function validateEmaill() {
  var email = document.getElementById("contact-emaill").value;
  var errorMessage = document.getElementById("emailError");
  if (email.length == 0) {
    errorMessage.innerHTML = `<i class='bx bxs-x-circle'>Email is required`;
    return false;
  }
  if (!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
    errorMessage.innerHTML = `<i class='bx bxs-x-circle'>Invalid email`;
    return false;
  }
  errorMessage.innerHTML =
    '<i class="fas fa-check-circle" style="color:green; ">';
  return true;
}

const signup_btn = document.getElementById("signup_btn");
const login_btn = document.getElementById("login-btn");

signup_btn.addEventListener("click", signupFunc);
login_btn.addEventListener("click", loginFunc);


function signupFunc() {
  
  const signup_email = document.getElementById("signup-email").value;
  const signup_tell = document.getElementById("signup-tel").value;
  const signup_Full_name = document.getElementById("signup-Full-name").value;
  const signup_password = document.getElementById("signup-password").value;

  let users = JSON.parse(localStorage.getItem("Allusers")) || [];

  // Check if the user with the same email already exists
  const existingUser = users.find((u) => u.userEmail === signup_email);

  if (existingUser) {
    alert("User with this email already exists. Please use a different email.");
    return;
  }

  let user = {
    username: signup_Full_name,
    usertel: signup_tell,
    userEmail: signup_email,
    userPassword: signup_password,
  };

  users.push(user);

  localStorage.setItem("Allusers", JSON.stringify(users));
  alert("User successfully inserted!");
  const Message="User successfully inserted!";
  showNotification(Message);
  
}



function loginFunc() {
  const login_email = document.getElementById("contact-emaill").value;
  const login_password = document.getElementById("password").value;

  const users = JSON.parse(localStorage.getItem("Allusers")) || [];

  const user = users.find(
    (u) => u.userEmail === login_email && u.userPassword === login_password
  );

  if (user) {
    setTimeout(()=>{
      const token = Math.random().toString(36).substring(2);
      localStorage.setItem("userToken", token);
      localStorage.setItem("currentUser", JSON.stringify(user));
  
      alert("Login successful!");
      window.location.href = './Dashboard/index.html';
    },3000)
  } else {
    alert("Invalid credentials. Please try again.");
  }
}


let toastBox=document.getElementById("toastBox");
let SuccessMsg=`<i class="fa-solid fa-circle-check"></i>successfully created`;
let errorMsg=`<i class="fa-solid fa-circle-xmark"></i>Error`;
let invalidMsg=`<i class="fa-solid fa-circle-info"></i>Invalid`;
