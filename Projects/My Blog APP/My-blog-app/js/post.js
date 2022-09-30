const API_URL = "http://localhost:4000/api/posts/";
const API_BASE_URL = "http://localhost:4000/";

window.onload = () => {
    getPost();
}

const getPostIdParam = () => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    return urlParams.get("id");
}

const getPost = () => {
    const postId = getPostIdParam();
    const url = `${API_URL}${postId}`;
    fetch(url, {
        method: 'GET'
    }).then((response) => {
        return response.json();
    }).then((data) => {
        buildPost(data);
    })
}

const buildPost = (data) => {
    const postImage = `${API_BASE_URL}${data.post_image}`;
    const postData = new Date(parseInt(data.added_date)).toDateString();
    document.querySelector('header').style.backgroundImage = `url(${postImage})`;
    document.querySelector('#individual-post-title').innerText = data.title;
    document.querySelector('#individual-post-date').innerText = `Publishe on ${postData}`
    document.querySelector('#individual-post-content').innerText = data.content;
}

