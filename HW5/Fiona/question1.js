// from DOM - part 1
const loadUserBtn = document.getElementById('load-User-Btn');
const tableBody = document.getElementById('table-body');
const userError = document.getElementById("user-error");
//from DOM - part 2
const searchBtn = document.getElementById('search-user-btn');
const userIdInput = document.getElementById('user-id-input');
const userInfo = document.getElementById('user-info');
const userPost = document.getElementById('user-post');
const userTodo = document.getElementById('user-todo');
const searchError = document.getElementById('search-error');
//from DOM - part 3
const delayedBtn = document.getElementById('delayed-btn');
const delayedStatus = document.getElementById('delayed-status');

//Part 1-3 add eventListener
loadUserBtn.addEventListener('click', loadUser); //part 1
searchBtn.addEventListener('click', searchUser); //part 2
delayedBtn.addEventListener('click', () => {delayedRequest()}); //part 3


//Part 1 logic - fetch from link after clicking button. If no response, return error message. If response, append table
async function loadUser() {
    userError.textContent='';
    tableBody.innerHTML='';

    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        //handle error
        if (!response.ok) {
            throw new Error('Oops! Something gets wrong. Please refresh.');
        }

        const users = await response.json();

        users.forEach(user => {
            const tr = document.createElement('tr');
            tr.innerHTML =
                `<td>${user.id}</td>
                <td>${user.name}</td>
                <td>${user.email}</td>
                <td>${user.address.city}</td>
                `;

            tableBody.append(tr);
        });
    } catch (error) {
        userError.textContent = error.message;
    }
}

//Part 2 logic
async function searchUser() {
    const userId = userIdInput.value.trim();
    clearUserData(); //clear up the previous request before each new request

    if (!userId) {
        searchError.textContent = 'Please enter a user ID';
        return;
    }
    try {
        const [userReturn, postReturn, todoReturn] = await Promise.all([
            fetch(`https://jsonplaceholder.typicode.com/users/${userId}`),
            fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`),
            fetch(`https://jsonplaceholder.typicode.com/todos?userId=${userId}`)
        ]);


        //handle error
        if (!userReturn.ok || !postReturn.ok || !todoReturn.ok) {
            throw new Error('Network error. Please try again.');
        }

        const [user, post, todo] = await Promise.all([
            userReturn.json(),
            postReturn.json(),
            todoReturn.json()
        ]);
        if (!user || !user.id) {
            throw new Error('User was not found. Please try another user ID');
        }

        //render user Info: ID, Name, Email, City
        renderUserInfo(userInfo, user);

        //render Posts: list all posts, only id and body
        renderPost(userPost, post);

        //render Todos: only render the title of the one's completed = false
        renderTodo(userTodo, todo);

    } catch (error) {
        searchError.textContent = error.message;
        userIdInput.value = ''; //clear input box on invalid
    }
}

//clear before each new request
function clearUserData() {
    searchError.textContent = '';
    userInfo.innerHTML = '';
    userPost.innerHTML = '';
    userTodo.innerHTML = '';
}
//render functions
// User info - only display ID, Name, Email and City like part 1
function renderUserInfo(container, user) {
    const data = [
        ['ID', user.id],
        ['Name', user.name],
        ['Email', user.email],
        ['City', user.address?.city ?? '']
    ];

    data.forEach(([key, value]) => {
        const li = document.createElement('li');
        li.innerHTML = `<strong>${key}:</strong> ${value}`;
        container.append(li);
    });
}

// render post - only display post id and body
function renderPost(container, post) {
    if (!Array.isArray(post) || post.length === 0) {
        const li = document.createElement('li');
        li.textContent = 'No posts found.';
        container.append(li);
        return;
    }

    post.forEach(post => {
        const li = document.createElement('li');
        li.innerHTML = `
      <div><strong>Post ID:</strong> ${post.id}</div>
      <div>${post.body}</div>
    `;
        container.append(li);
    });
}

// Render Todos: only when "completed === false" is considered as tasks that needs to be done.
// Use filter function to filter out the completed status, and only display title.
function renderTodo(container, todo) {
    const incomplete = Array.isArray(todo) ? todo.filter(t => t.completed === false) : [];

    if (incomplete.length === 0) {
        const li = document.createElement('li');
        li.textContent = 'No incomplete todos 🎉';
        container.append(li);
        return;
    }

    incomplete.forEach(todo => {
        const li = document.createElement('li');
        li.textContent = todo.title;
        container.append(li);
    });
}


//Part 3 logic - use userID=2 as default url to test.
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

//use a default url, can be replaced with any other url
async function delayedRequest(url = 'https://jsonplaceholder.typicode.com/users/2') {
    //display "loading" right after the click
    delayedStatus.textContent = 'Loading...';

    try {
        await delay(2000); //delay 2s
        const response = await fetch(url);
        if(!response.ok) {
            throw new Error('Error! No data available.')
        }
        const data = await response.json(); //parse data to DOM
        delayedStatus.textContent = 'Check console for the data';
    } catch (error) {
        delayedStatus.textContent = "Error! Check status on console.";
        console.error(error)
    }
}
