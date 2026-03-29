// part1
const API_URL ="https://jsonplaceholder.typicode.com/users";
const loadUserButton = document.getElementById("part1-button");
const tableBody = document.getElementById("part1-users-table-body");

function clearTable(){
    tableBody.innerHTML = "";
}

/**
 * Render users into the table
 * @param {Array} users
 */
function renderUsers(users){
    const fragment = document.createDocumentFragment();
    users.forEach(user => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td>${user.id}</td>
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>${user.address.city}</td>
        `;
        fragment.appendChild(tr);
    });
    tableBody.appendChild(fragment);
}


async function fetchUsers(){
    clearTable();

    try {
        const response = await fetch(API_URL);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const users = await response.json();
        renderUsers(users);
    } catch (error) {
        console.error("Error fetching users:", error);
    }
}

loadUserButton.addEventListener("click", fetchUsers);

// part2

const BASE_URL = "https://jsonplaceholder.typicode.com";

const userIdInput = document.getElementById("part2-userID-input");
const searchButton = document.getElementById("part2-search-button");
const userInfoEl = document.getElementById("part2-userInfo");
const userPostsEl = document.getElementById("part2-userPosts");
const userTodosEl = document.getElementById("part2-userTodos");
const statusEl = document.getElementById("part2-status");

function showStatus(message, type=""){
    statusEl.textContent = message;
    statusEl.className = `status ${type}`.trim();
}

function clearInput(){
    userIdInput.value = "";
    userIdInput.focus();
}

function clearUserData(){
    userInfoEl.innerHTML = "";
    userPostsEl.innerHTML = "";
    userTodosEl.innerHTML = "";
}

function isPositiveIntegerString(value) {
    return /^[1-9]\d*$/.test(value.trim());;
}

async function fetchJson(url){
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
}

function flattenObject(obj){
    const pairs = [];

    function check(value, path){
        if (value === null || value === undefined){
            pairs.push([path, String(value)]);
            return;
        }

        if (Array.isArray(value)){
            pairs.push([path, `Array(${value.length})`]);
            return;
        }

        if (typeof value === "object"){
            for (const [k,v] of Object.entries(value)){
                check(v,path ? `${path}.${k}` : k);
            }
            return;
        }  
        pairs.push([path, String(value)]);
    }
    check(obj, "");
    return pairs;
}

function renderKeyValueList(targetEl, obj){
    const pairs = flattenObject(obj);
    const ul = document.createElement("ul");
    ul.className="key-value-list";

    for (const[key, value] of pairs){
        const li = document.createElement("li");
        li.innerHTML = `<span class="kv-key">${escapeHtml(key)}:</span> ${escapeHtml(value)}`
        ul.appendChild(li);
    }

    targetEl.innerHTML = "";
    targetEl.appendChild(ul);
}


function renderItemsAsCards(targetEl, items){
    targetEl.innerHTML = "";
    if (!items || items.length === 0){
        const p = document.createElement("p");
        p.className = "no-data";
        p.textContent = "No data available.";
        targetEl.appendChild(p);
        return;
    }

    const fragment = document.createDocumentFragment();
    items.forEach(item => {
        const card = document.createElement("div");
        card.className = "item-card";

        const ul = document.createElement("ul");
        ul.className = "key-value-list";  
        
        flattenObject(item).forEach(([key, value]) => {
            const li = document.createElement("li");
            li.innerHTML = `<span class="kv-key">${escapeHtml(key)}:</span> ${escapeHtml(value)}`;
            ul.appendChild(li);
        });

        card.appendChild(ul);
        fragment.appendChild(card);
    });
    targetEl.appendChild(fragment);
}

function escapeHtml(str) {
    return String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

async function handleSearch(){
    const userId = userIdInput.value.trim();
    console.log("Searching for user ID:", userId);

    clearUserData();
    showStatus("", "");

    if (!isPositiveIntegerString(userId)){
        showStatus("Please enter a valid positive integer for User ID.", "error");
        return;
    }

    const userUrl = `${BASE_URL}/users/${userId}`;
    const postsUrl = `${BASE_URL}/posts?userId=${userId}`;
    const todosUrl = `${BASE_URL}/todos?userId=${userId}`;

    const [user, posts, todos] = await Promise.allSettled([
        fetchJson(userUrl),
        fetchJson(postsUrl),
        fetchJson(todosUrl)
    ]);

    if (user.status === "fulfilled"){
        renderKeyValueList(userInfoEl, user.value);
    } else {
        showStatus(`User was not found. Please try another user ID`, "error");
        clearInput();
        return;
    }

    if (posts.status === "fulfilled"){
        renderItemsAsCards(userPostsEl, posts.value);
    } else {
        showStatus(`Error fetching user posts: ${posts.reason}`, "error");
        clearInput();
    }

    if (todos.status === "fulfilled"){
        renderItemsAsCards(userTodosEl, todos.value);
    } else {
        showStatus(`Error fetching user todos: ${todos.reason}`, "error");
        clearInput();
    }
}

searchButton.addEventListener("click", handleSearch);
userIdInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter"){
        handleSearch();
    }
})


// part3
const delayButton = document.getElementById("part3-button");
const part3ResEl = document.getElementById("part3-response");

function setPart3Response(message){
    part3ResEl.textContent = message;
}

function sleep(ms){
    return new Promise((resolve => setTimeout(resolve, ms)));
}

async function delayedResponse(url){
    const data = await fetchJson(url);
    await sleep(2000);
    console.log(JSON.stringify(data));
    return data;
}

async function handleDelayedRequest(){
    setPart3Response("Waiting...");
    delayButton.disabled = true;

    try {
        await delayedResponse(`${BASE_URL}/users/5`)
        setPart3Response("Check console for the data");
    }catch (error){
        setPart3Response(`Error: ${error.message}`);
    } finally {
        delayButton.disabled = false;
    }
}

delayButton.addEventListener("click", handleDelayedRequest);
