const urlParams = new URLSearchParams(window.location.search);
const blogId = urlParams.get('blog_id');
console.log(blogId);

document.getElementById("update-button").addEventListener("click", function (event) {
  event.preventDefault(); 
  const update_title = document.getElementById("update_title").value;
  const content = document.getElementById("update_content").value;
  const image = document.getElementById("update-file").files[0];
  console.log(update_title, content, image);

  updating_Blog_func(update_title, content, image);
});

const updating_Blog_func = async (title, content, cover) => {
  try {
    const authtoken = localStorage.getItem("jwt");
    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    formData.append("image", cover);

    const config = {
      headers: {
        Authorization: `Bearer ${authtoken}`,
        "Content-Type": "multipart/form-data",
      },
    };

    const res = await axios.patch(`http://localhost:8081/api/blog/${blogId}`, formData, config);
    console.log(res.data.Blog); ;
    iziToast.show({
      message: "Blog updated successfully",
      position: "topRight",
      progressBarColor: "#7a3fdf",
      timeout: 2000,
    });
    setTimeout(()=>{
      window.location.reload();
    },2000)
  } catch (e) {
    console.error(e.response);
    alert("Error updating blog");
    iziToast.error({
      message: "Error in updating blog",
      position: "red",
      progressBarColor: "#7a3fdf",
      timeout: 2000,
    });
  }
};

const fetchBlogPost = async () => {
    console.log("Fetching blog posts");
    try {
        const response = await axios({
            url: `https://my-brand-be-1-p2x5.onrender.com/api/blog/${blogId}`,
            method: 'GET',
        });
        const blog = response.data.data.Blog;
        console.log(blog.content, 'content');
        console.log(blog.title, 'title');
        const singleBlog_content = document.getElementById('update_content');
        const singleBlog_title = document.getElementById('update_title');
        const imageElement=document.getElementById('blog_cover')
        singleBlog_content.value = blog.content;
        singleBlog_title.value = blog.title;
        imageElement.src = `${blog.cover}`;
    } catch (error) {
        console.error('Error fetching blog posts:', error);
        throw error;
    }
}
fetchBlogPost();
