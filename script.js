let posts = [];
let friends = ['Alice', 'Bob', 'Charlie'];
let groupChatMessages = [];
let currentUser = 'Guest';

function addPost() {
    const text = document.getElementById('post-text').value;
    const image = document.getElementById('post-image').files[0];
    let imageURL = '';

    if (image) {
        const reader = new FileReader();
        reader.onload = function(e) {
            imageURL = e.target.result;
            addPostToFeed(text, imageURL);
        };
        reader.readAsDataURL(image);
    } else {
        addPostToFeed(text, '');
    }

    document.getElementById('post-text').value = '';
    document.getElementById('post-image').value = '';
}

function addPostToFeed(text, imageURL) {
    const post = { text, imageURL, likes: 0, dislikes: 0, comments: [] };
    posts.push(post);
    displayPosts();
}

function displayPosts() {
    const feed = document.getElementById('main-feed');
    feed.innerHTML = '';

    posts.forEach((post, index) => {
        const postElement = document.createElement('div');
        postElement.className = 'post';

        postElement.innerHTML = `
            <p>${post.text}</p>
            ${post.imageURL ? `<img src="${post.imageURL}" alt="Post Image">` : ''}
            <button onclick="likePost(${index})">Like (${post.likes})</button>
            <button onclick="dislikePost(${index})">Dislike (${post.dislikes})</button>
            <div class="comment-box">
                <input type="text" placeholder="Add a comment" id="comment-${index}">
                <button onclick="addComment(${index})">Comment</button>
            </div>
            <div class="comments">
                ${post.comments.map(comment => `<p>${comment}</p>`).join('')}
            </div>
        `;

        feed.appendChild(postElement);
    });
}

function likePost(index) {
    posts[index].likes += 1;
    displayPosts();
}

function dislikePost(index) {
    posts[index].dislikes += 1;
    displayPosts();
}

function addComment(index) {
    const commentText = document.getElementById(`comment-${index}`).value;
    posts[index].comments.push(commentText);
    displayPosts();
}

function showFriends() {
    const friendsList = document.getElementById('friends-list');
    const friendsDiv = document.getElementById('friends');
    friendsDiv.innerHTML = friends.map(friend => `<p>${friend}</p>`).join('');
    friendsList.style.display = 'block';
}

function hideFriends() {
    document.getElementById('friends-list').style.display = 'none';
}

function showGroupChat() {
    const groupChat = document.getElementById('group-chat');
    displayGroupChatMessages();
    groupChat.style.display = 'block';
}

function hideGroupChat() {
    document.getElementById('group-chat').style.display = 'none';
}

function sendMessage() {
    const message = document.getElementById('chat-input').value;
    groupChatMessages.push(message);
    document.getElementById('chat-input').value = '';
    displayGroupChatMessages();
}

function displayGroupChatMessages() {
    const chatMessagesDiv = document.getElementById('chat-messages');
    chatMessagesDiv.innerHTML = groupChatMessages.map(msg => `<p>${msg}</p>`).join('');
}

function showSignIn() {
    document.getElementById('sign-in-modal').style.display = 'block';
}

function hideSignIn() {
    document.getElementById('sign-in-modal').style.display = 'none';
}

function signIn() {
    const username = document.getElementById('sign-in-username').value;
    if (username) {
        currentUser = username;
        document.getElementById('username').innerText = currentUser;
        hideSignIn();
    }
}
