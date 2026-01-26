//
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


//
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