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
        data: [2235, 3250, 1890, 5400, 20240, 6254,  12325, 4856, 10325, 2254, 22356, 8486],
        backgroundColor: "white",
        borderColor: "#7a3fdf",
        borderRadius: 6,
        cubicInterpolationMode: 'monotone',
        fill: false,
        borderSkipped: false,
      },
    ],
  },
  options: {
    interaction: {
      intersect: false,
      mode: 'index'
    },
    elements: {
      point:{
          radius: 0
      }
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
          label: function(context) {
              if (context.parsed.y !== null) {
                const label = new Intl.NumberFormat().format(context.parsed.y);
                return label;
              }
              return null;
          },
        }
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
  },  {
    src: "assets/profile.jpg",
    name: "Joseph MUGISHA",
    alias: "@joseph",
    email: "mugisha092@gmail.com",
    status: "inactive",
  },  {
    src: "assets/profile.jpg",
    name: "Joseph MUGISHA",
    alias: "@joseph",
    email: "mugisha092@gmail.com",
    status: "active",
  },  {
    src: "assets/profile.jpg",
    name: "Joseph MUGISHA",
    alias: "@joseph",
    email: "mugisha092@gmail.com",
    status: "active",
  },  {
    src: "assets/profile.jpg",
    name: "Joseph MUGISHA",
    alias: "@joseph",
    email: "mugisha092@gmail.com",
    status: "active",
  },  {
    src: "assets/profile.jpg",
    name: "Joseph MUGISHA",
    alias: "@joseph",
    email: "mugisha092@gmail.com",
    status: "active",
  },  {
    src: "assets/profile.jpg",
    name: "Joseph MUGISHA",
    alias: "@joseph",
    email: "mugisha092@gmail.com",
    status: "active",
  },  {
    src: "assets/profile.jpg",
    name: "Joseph MUGISHA",
    alias: "@joseph",
    email: "mugisha092@gmail.com",
    status: "active",
  },  {
    src: "assets/profile.jpg",
    name: "Joseph MUGISHA",
    alias: "@joseph",
    email: "mugisha092@gmail.com",
    status: "active",
  },  {
    src: "assets/profile.jpg",
    name: "Joseph MUGISHA",
    alias: "@joseph",
    email: "mugisha092@gmail.com",
    status: "active",
  },  {
    src: "assets/profile.jpg",
    name: "Joseph MUGISHA",
    alias: "@joseph",
    email: "mugisha092@gmail.com",
    status: "active",
  },  {
    src: "assets/profile.jpg",
    name: "Joseph MUGISHA",
    alias: "@joseph",
    email: "mugisha092@gmail.com",
    status: "active",
  },  {
    src: "assets/profile.jpg",
    name: "Joseph MUGISHA",
    alias: "@joseph",
    email: "mugisha092@gmail.com",
    status: "active",
  },  {
    src: "assets/profile.jpg",
    name: "Joseph MUGISHA",
    alias: "@joseph",
    email: "mugisha092@gmail.com",
    status: "active",
  },  {
    src: "assets/profile.jpg",
    name: "Joseph MUGISHA",
    alias: "@joseph",
    email: "mugisha092@gmail.com",
    status: "active",
  },  {
    src: "assets/profile.jpg",
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
            <img src="${users.src}" alt="${users.name}">
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
