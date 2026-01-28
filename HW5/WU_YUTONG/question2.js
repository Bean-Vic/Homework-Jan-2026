//1
const load_data = document.getElementById("load");
const tbody = document.getElementById("users");

load_data.addEventListener("click", display_data);

function makeTd(text) {
  const td = document.createElement("td");
  td.textContent = text;
  return td;
}

async function display_data() {
  tbody.innerHTML = "";

  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await res.json();

    users.forEach((u) => {
      const tr = document.createElement("tr");

      tr.appendChild(makeTd(u.id));
      tr.appendChild(makeTd(u.name));
      tr.appendChild(makeTd(u.email));
      tr.appendChild(makeTd(u.address.city));

      tbody.appendChild(tr);
    });
  } catch (err) {
    console.log(err);
  }
}

//3
const delay_request = document.getElementById("delay");
const display3 = document.getElementById("display_2");

delay_request.addEventListener("click", delayedRequest);

async function delayedRequest() {
  display3.textContent = "Waiting ...";

  try {
    await new Promise((resolve) => setTimeout(resolve, 2000));

    const res = await fetch("https://jsonplaceholder.typicode.com/users/1");
    const data = await res.json();

    console.log(data);
    display3.textContent = "Check console for the data";
  } catch (err) {
    console.log(err);
    display3.textContent = "Something went wrong.";
  }
}

//2
const searchID = document.getElementById("search");
const enterID = document.getElementById("enterID");
const display1 = document.getElementById("display_1");

const userInfo = document.getElementById("userInfo");
const userPosts = document.getElementById("userPosts");
const userTodos = document.getElementById("userTodos");

searchID.addEventListener("click", searchdata);

function clear() {
  display1.textContent = "";
  userInfo.innerHTML = "";
  userPosts.innerHTML = "";
  userTodos.innerHTML = "";
}

function createLi(ul, text) {
  const li = document.createElement("li");
  li.textContent = text;
  ul.appendChild(li);
}

async function searchdata() {

  clear();
  let id = enterID.value;

  const userLink = `https://jsonplaceholder.typicode.com/users/${id}`;
  const postsLink = `https://jsonplaceholder.typicode.com/posts?userId=${id}`;
  const todosLink = `https://jsonplaceholder.typicode.com/todos?userId=${id}`;

  try {
    const [userResult, postsResult, todosResult] = await Promise.all([
      fetch(userLink),
      fetch(postsLink),
      fetch(todosLink),
    ]);

    const userData = await userResult.json();
    const postsData = await postsResult.json();
    const todosData = await todosResult.json();

    if (!userData.id) {
      display1.textContent = "User was not found. Please try another user ID";
      enterID.value = "";
      return;
    }

    createLi(userInfo, "id: " + userData.id);
    createLi(userInfo, "name: " + userData.name);
    createLi(userInfo, "email: " + userData.email);
    createLi(userInfo, "city: " + userData.address.city);

    postsData.forEach((p) => {
      createLi(userPosts, "userId: " + p.userId);
      createLi(userPosts, "id: " + p.id);
      createLi(userPosts, "title: " + p.title);
      createLi(userPosts, "body: " + p.body);
    });

    todosData.forEach((t) => {
      createLi(userTodos, "userId: " + t.userId);
      createLi(userTodos, "id: " + t.id);
      createLi(userTodos, "title: " + t.title);
      createLi(userTodos, "completed: " + t.completed);
    });
  } catch (err) {
    console.log(err);
  }
}
