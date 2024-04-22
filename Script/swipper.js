var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  centeredSlides: false,

  slidesPerGroup: 1,
  slidesPerGroupSkip: 0,
  slidesGrab: true,
  keyboard: {
    enabled: true,
  },
  breakpoints: {
    769: {
      slidesPerView: 2,
      slidesPerGroup: 1,
    },
  },
  scrollbar: {
    el: ".swiper-scrollbar",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

document.addEventListener("DOMContentLoaded", async () => {
  // Get all blog elements
  const blogElements = document.querySelectorAll(".swiper-slide");

  // Sample blog data
  const blog1 = {
    date: "Mon Jan 16 2023",
    description:
      "The Best Apple MacBook Air And MacBook Pro Laptops For 2023, 58% OFF",
    likeCount: "12k",
    commentCount: "23k",
    link: "./singleBlog.html",
  };

  const blog2 = {
    date: "Tue Feb 28 2023",
    description:
      "Top 10 Tips for Improving Productivity While Working from Home",
    likeCount: "8k",
    commentCount: "15k",
    link: "./singleBlog2.html",
  };

  const blog3 = {
    date: "Thu Apr 13 2023",
    description: "A Beginner's Guide to Machine Learning Algorithms",
    likeCount: "20k",
    commentCount: "30k",
    link: "./singleBlog3.html",
  };

  // Push the blog objects into the blogs array
  // blogs.push(blog1, blog2, blog3);

  const response = await axios({
    method: "GET",
    url: "https://my-brand-be-1-p2x5.onrender.com/api/blog",
  });
  const blogs = response.data.data.Blogs;
  console.log(blogs);

  // Loop through each blog element and extract data
  blogElements.forEach(function (blogElement) {
    const date = blogElement.querySelector(".date").textContent.trim();
    const description = blogElement.querySelector(".desc p").textContent.trim();
    const likeCount = blogElement
      .querySelector(".like-comment .item:nth-child(1) p")
      .textContent.trim();
    const commentCount = blogElement
      .querySelector(".like-comment .item:nth-child(2) p")
      .textContent.trim();
    const link = blogElement.querySelector(".desc p a").getAttribute("href");

    // Create a blog object and push it to the array
    const blog = {
      date: date,
      description: description,
      likeCount: likeCount,
      commentCount: commentCount,
      link: link,
    };
    blogs.push(blog);
  });


  function displayBlogs() {
    const blogContainer = document.getElementById("blogContainer");
    blogContainer.innerHTML = "";

    blogs.forEach(function (blog) {
      const date = new Date(blog.CreateAt);
      const formattedDate = date.toLocaleDateString("en-US", {
        day: "numeric",
        month: "short",
        year: "numeric",
      });

      const blogContainer = document.getElementById("blogContainer");

      blogContainer.addEventListener("click", (event) => {
        
        if (event.target.classList.contains("blogLink")) {
          localStorage.removeItem("loginToastShown");
            event.stopPropagation(); // Stop event propagation here
            const blogId = event.target.dataset.blogId;
            if (localStorage.getItem("jwt")) {
                window.location.href = `singleBlog.html?blogId=${blogId}`;
            } else {
              localStorage.removeItem("loginToastShown");
                if (!localStorage.getItem("loginToastShown")) {
                  iziToast.error({
                    message: "Please login to view single blog",
                    position: "topRight",
                    progressBarColor: "red",
                    timeout: 2000,
                  });
                    
                    localStorage.setItem("loginToastShown", "true");
                }
            }
        }
    });
    

      const blogHTML = `
          <div class="swiper-slide">
            <div class="blog">
            <div class="cover"><img class="cover" src="${blog.cover}" alt="COver"/></div>
              <div class="blog-content">
                <div class="date">${formattedDate}</div>
                <div class="desc">
                  <p class="blogLink" data-blog-id="${blog._id}">${blog.title}</p>
                </div>
                <div class="like-comment">
                  <div class="item">
                    <i class='bx bx-heart'></i>
                    <p>${blog.likes}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        `;
      blogContainer.innerHTML += blogHTML;
    });
  }

  displayBlogs();
});
