// ===== Constants =====
const BASE_URL = "https://jsonplaceholder.typicode.com";

// ===== Helpers =====
function setText(el, text) {
  el.textContent = text;
}

function clearTableBody(tbody) {
  tbody.innerHTML = "";
}

function renderUsersTable(users) {
  const tbody = document.getElementById("usersTbody");
  clearTableBody(tbody);

  users.forEach((u) => {
    const tr = document.createElement("tr");

    const tdId = document.createElement("td");
    tdId.textContent = u.id;

    const tdName = document.createElement("td");
    tdName.textContent = u.name;

    const tdEmail = document.createElement("td");
    tdEmail.textContent = u.email;

    const tdCity = document.createElement("td");
    tdCity.textContent = u.address?.city ?? "";

    tr.append(tdId, tdName, tdEmail, tdCity);
    tbody.appendChild(tr);
  });
}

function pretty(obj) {
  return JSON.stringify(obj, null, 2);
}

function clearSearchOutputs() {
  setText(document.getElementById("userResult"), "No data");
  setText(document.getElementById("postsResult"), "No data");
  setText(document.getElementById("todosResult"), "No data");
}

// ===== Part 1: Load Users =====
document.getElementById("loadUsersBtn").addEventListener("click", async () => {
  const statusEl = document.getElementById("usersStatus");
  setText(statusEl, "Loading users...");

  try {
    const res = await fetch(`${BASE_URL}/users`);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);

    const users = await res.json();
    renderUsersTable(users);

    setText(statusEl, `Loaded ${users.length} users.`);
  } catch (err) {
    setText(statusEl, `Failed to load users: ${err.message}`);
    clearTableBody(document.getElementById("usersTbody"));
  }
});

// ===== Part 2: Search User by ID (Promise.all) =====
document.getElementById("searchForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const input = document.getElementById("userIdInput");
  const statusEl = document.getElementById("searchStatus");
  const userId = Number(input.value);

  // Basic validation
  if (!Number.isInteger(userId) || userId <= 0) {
    setText(statusEl, "Please enter a valid user ID (positive integer).");
    input.value = "";
    clearSearchOutputs();
    return;
  }

  setText(statusEl, "Searching...");
  clearSearchOutputs();

  const userUrl = `${BASE_URL}/users/${userId}`;
  const postsUrl = `${BASE_URL}/posts?userId=${userId}`;
  const todosUrl = `${BASE_URL}/todos?userId=${userId}`;

  try {
    // Promise.all required by assignment
    const [userRes, postsRes, todosRes] = await Promise.all([
      fetch(userUrl),
      fetch(postsUrl),
      fetch(todosUrl),
    ]);

    // Check response status
    if (!userRes.ok) throw new Error(`User request failed (HTTP ${userRes.status})`);
    if (!postsRes.ok) throw new Error(`Posts request failed (HTTP ${postsRes.status})`);
    if (!todosRes.ok) throw new Error(`Todos request failed (HTTP ${todosRes.status})`);

    const [user, posts, todos] = await Promise.all([
      userRes.json(),
      postsRes.json(),
      todosRes.json(),
    ]);

    // jsonplaceholder: invalid userId returns {} for /users/:id
    if (!user || !user.id) {
      throw new Error("Invalid user id.");
    }

    setText(document.getElementById("userResult"), pretty(user));
    setText(document.getElementById("postsResult"), pretty(posts));
    setText(document.getElementById("todosResult"), pretty(todos));
    setText(statusEl, "Success.");
  } catch (err) {
    setText(statusEl, `Error: ${err.message}`);
    input.value = ""; // requirement: clear invalid ID input
    clearSearchOutputs();
  }
});

// ===== Part 3: delayedRequest(url) =====
function delayedRequest(url) {
  const statusEl = document.getElementById("delayStatus");
  setText(statusEl, "Waiting...");

  setTimeout(async () => {
    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);

      const data = await res.json();
      console.log(JSON.stringify(data)); // requirement: console.log(JSON.stringify(data))
      setText(statusEl, "Check console for the data");
    } catch (err) {
      setText(statusEl, `Request failed: ${err.message}`);
    }
  }, 2000);
}

document.getElementById("delayBtn").addEventListener("click", () => {
  const url = document.getElementById("delayUrlInput").value.trim();
  if (!url) {
    setText(document.getElementById("delayStatus"), "Please enter a URL.");
    return;
  }
  delayedRequest(url);
});
