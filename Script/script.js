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
