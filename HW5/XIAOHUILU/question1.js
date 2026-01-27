//  part1
const button = document.getElementById("fetchButton");
const tbody = document.getElementById("output");          // tbody
const table = document.getElementById("usersTable");      // table
const url = "https://jsonplaceholder.typicode.com/users";

button.addEventListener("click", fetchUsers);

async function fetchUsers() {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("Failed to fetch users");

    const users = await response.json();
    displayUsers(users);
  } catch (error) {
    console.error(error);
  }
}

function displayUsers(users) {
  // clear old rows
  tbody.replaceChildren();
  // Fill rows
  users.forEach((user) => {
    const row = document.createElement("tr");

    const id = document.createElement("td");
    id.textContent = user.id;

    const name = document.createElement("td");
    name.textContent = user.name;

    const email = document.createElement("td");
    email.textContent = user.email;

    const city = document.createElement("td");
    city.textContent = user.address.city;

    row.append(id, name, email, city);
    tbody.appendChild(row);
  });
}

// part2
const input = document.getElementById("searchInput");
const btn = document.getElementById("fetchButton2");

const userInfoDiv = document.getElementById("userInfo");
const userPostsDiv = document.getElementById("userPosts");
const userTodosDiv = document.getElementById("userTodos");

btn.addEventListener("click", searchUser);

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") searchUser();
});

async function searchUser() {
  const id = input.value.trim();
  if (!id) return;

  // clear old content + show loading
  clearAll();
  userInfoDiv.appendChild(makeText("Loading..."));

  try {
    const userUrl = `https://jsonplaceholder.typicode.com/users/${id}`;
    const postsUrl = `https://jsonplaceholder.typicode.com/posts?userId=${id}`;
    const todosUrl = `https://jsonplaceholder.typicode.com/todos?userId=${id}`;

    const [userRes, postsRes, todosRes] = await Promise.all([
      fetch(userUrl),
      fetch(postsUrl),
      fetch(todosUrl),
    ]);

    const user = await userRes.json();
    const posts = await postsRes.json();
    const todos = await todosRes.json();

    // invalid user => {}
    if (!user || Object.keys(user).length === 0) {
      showError("User was not found. Please try another user ID.");
      input.value = "";
      return;
    }

    // user info
    userInfoDiv.replaceChildren(
      makeKVList([
        ["id", user.id],
        ["name", user.name],
        ["email", user.email],
        ["phone", user.phone],
        ["city", user.address.city],
      ])
    );

    //  posts 
    userPostsDiv.replaceChildren(
      makeKVListFromArray(posts, (p) => [
        ["title", p.title],
      ])
    );

    // todos
    userTodosDiv.replaceChildren(
      makeKVListFromArray(todos, (t) => [
        ["title", t.title],
        ["completed", String(t.completed)],
      ])
    );
  } catch (err) {
    showError("Error: " + err.message);
    input.value = "";
  }
}

// -------- helpers --------

function clearAll() {
  userInfoDiv.replaceChildren();
  userPostsDiv.replaceChildren();
  userTodosDiv.replaceChildren();
}

function showError(msg) {
  clearAll();
  const p = document.createElement("p");
  p.style.color = "red";
  p.textContent = msg;
  userInfoDiv.appendChild(p); // show error under User Info area
}

function makeText(text) {
  const p = document.createElement("p");
  p.textContent = text;
  return p;
}

function makeKVList(pairs) {
  const ul = document.createElement("ul");
  pairs.forEach(([k, v]) => {
    const li = document.createElement("li");
    li.textContent = `${k}: ${v}`;
    ul.appendChild(li);
  });
  return ul;
}

function makeKVListFromArray(arr, toPairs) {
  const wrap = document.createElement("div");

  if (!arr || arr.length === 0) {
    wrap.appendChild(makeText("No data."));
    return wrap;
  }

  arr.forEach((item) => {
    wrap.appendChild(makeKVList(toPairs(item)));
  });

  return wrap;
}

//part3 we use example user1
const delayBtn = document.getElementById("delayBtn");
const delayOutput = document.getElementById("delayOutput");

delayBtn.addEventListener("click", () => {
  delayedRequest();
});

async function delayedRequest(
  url = "https://jsonplaceholder.typicode.com/users/1"
) {
  // Step 1: show waiting message immediately
  delayOutput.textContent = "Waiting ...";

  try {
    const response = await fetch(url);
    const data = await response.json();

    // Step 2: delay 2 seconds
    setTimeout(() => {
      console.log(JSON.stringify(data));
      delayOutput.textContent = "Check console for the data";
    }, 2000);
  } catch (err) {
    delayOutput.textContent = "Error occurred";
  }
}