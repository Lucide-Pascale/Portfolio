const mobile_links = document.getElementsByClassName('mobile-links')
console.log(mobile_links);
const desktop_links = document.getElementsByClassName('hideOnMobile');
console.log(desktop_links);

const clicked_links = (a) => {
    if (!a.classList.value.split(" ").includes("active")) {
      for (let i = 0; i <= 8; i++) {
        mobile_links[i].classList.remove("active");
        a.classList.add("active")
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


document.getElementById('downloadButton').addEventListener('click', function() {
    var downloadLink = document.createElement('a');
    downloadLink.setAttribute('href', 'assets/resume.pdf');
    downloadLink.setAttribute('download', 'resume.pdf');
    downloadLink.click();
});



document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});


function postComment() {
  var commentInput = document.getElementById('editor');
  var namesInput = document.getElementById('names');
  
  var commentList = document.getElementById('comments-container');
  var commentText = commentInput.value;
  commentInput.value = '';
  console.log(commentText);

  var newComment = document.createElement('li');
  newComment.innerHTML = `    <div id="comments-container">
  <div id="comment-item" style="background-color: var(--back-color); border-radius: 2px; padding: 5px; display: flex; align-items: center; width: 30%; margin: 10px 0px;">
      <div class="imagec" style="width: 60px;">
          <img src="./Assets/profile.JPG" alt="" style="width: 100%; border-radius: 50%;">
      </div>
      <div class="comment-content">
          <div class="div" style="display: flex; justify-content: space-between;">
              <p style="margin: 3px; font-size: .8rem;">MUGISHA Joseph</p>
              <p style="margin: 3px; font-size: .6rem;">12:00pm 1 jan 2024</p>
          </div>
          <p style="margin: 3px; font-size: .7rem;">${newComment}</p>
      </div>
  </div>`;
  commentList.appendChild(newComment);
}


const redirectButton = document.getElementById('redirectButton');

    // Add a click event listener to the button
    redirectButton.addEventListener('click', function() {
      // Specify the URL of the page you want to redirect to
      const targetPageURL = './singleBlog.html';

      // Redirect to the specified URL
      window.location.href = targetPageURL;
    });


