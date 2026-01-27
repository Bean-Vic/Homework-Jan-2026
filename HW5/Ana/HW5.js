// 1. Use HTML/CSS/JS to solve the following problems. Please follow best
// practices when you write the code so that it would be easily readable,
// maintainable, and efficient.

// 1. [Part 1] Given a url https://jsonplaceholder.typicode.com/users , send a GET
// request to display the data on the page in a table. Errors should be
// handled properly.
fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }
    return response.json();
  } )
  .then(data => {
    const table = document.createElement('table');
    const headerRow = document.createElement('tr'); 

// 2. [Part 2] Create a text input box and a search button. When you input a
// user ID and click search, it should display that user’s information, posts,
// and todos all in the same page in a list with the format of key: value.
// (Hint: Promise.all() or Promise.allSettled())
// For example, when the user types 2, display the data from the
// following urls:
// https://jsonplaceholder.typicode.com/users/2
// https://jsonplaceholder.typicode.com/posts?userId=2
// https://jsonplaceholder.typicode.com/todos?userId=2
// If the user ID is invalid (no data in the response), there should be an
// error message says User was not found. Please try another user ID and then
// clear the input box.

    // Create table headers
    const headers = Object.keys(data[0]);
    headers.forEach(header => {
      const th = document.createElement('th');                          
      th.textContent = header;
      headerRow.appendChild(th);
    });
    table.appendChild(headerRow);

    // Create table body
    data.forEach(item => {
      const row = document.createElement('tr');
      headers.forEach(header => {
        const td = document.createElement('td');
        td.textContent = item[header];
        row.appendChild(td);
      });
      table.appendChild(row);
    });

    document.body.appendChild(table);
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });
    
    const input = document.createElement('input');
    input.type = 'text';
    input.id = 'userIdInput';
    input.placeholder = 'Enter user ID';
    document.body.appendChild(input);
    
    const button = document.createElement('button');
    button.textContent = 'Search';
    document.body.appendChild(button);
    
    const resultDiv = document.createElement('div');
    document.body.appendChild(resultDiv);
    
    button.addEventListener('click', () => {
      const userId = input.value;
      const userUrl = `https://jsonplaceholder.typicode.com/users/${userId}`;
      const postsUrl = `https://jsonplaceholder.typicode.com/posts?userId=${userId}`;
      const todosUrl = `https://jsonplaceholder.typicode.com/todos?userId=${userId}`;
      
      Promise.all([
        fetch(userUrl).then(res => res.json()),
        fetch(postsUrl).then(res => res.json()),
        fetch(todosUrl).then(res => res.json())
      ])
      .then(([userData, postsData, todosData]) => {
        resultDiv.innerHTML = '';
        if (!userData.id) {
          resultDiv.textContent = 'User was not found. Please try another user ID.';
          input.value = '';
          return;
        }
        
        const userInfo = document.createElement('div');
        userInfo.innerHTML = `<h3>User Info</h3><p>${Object.entries(userData).map(([key, value]) => `${key}: ${value}`).join('<br>')}</p>`;
        resultDiv.appendChild(userInfo);
        
        const postsInfo = document.createElement('div');
        postsInfo.innerHTML = `<h3>Posts</h3><p>${postsData.map(post => `Title: ${post.title}<br>Body: ${post.body}`).join('<br><br>')}</p>`;
        resultDiv.appendChild(postsInfo);
        
        const todosInfo = document.createElement('div');
        todosInfo.innerHTML = `<h3>Todos</h3><p>${todosData.map(todo => `Title: ${todo.title}<br>Completed: ${todo.completed}`).join('<br><br>')}</p>`;
        resultDiv.appendChild(todosInfo);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
    });
    

    //     3. [Part 3] Implement a function **delayedRequest(url)** that fetches data from the url and outputs the json string data to the **console** after 2 seconds. *(Hint: JSON.stringify(data, null, " "))*
    //         - After clicking the button, immediately display `Waiting …` on the page.
    //         - After the data is retrieved, replace the message with `Check console for the data` in the same area.
    //         - Test it with any of the “https://jsonplaceholder.typicode.com/users/${id}" urls. You may set a default value for the function parameter.
        
    //     Put the three parts on a single page, similar to the example below:
        
    //     Sample web page
    //    ![image](https://github.com/user-attachments/assets/124237ac-0247-4c2d-9edb-83743a274fc4)
    const delayButton = document.createElement('button');
    delayButton.textContent = 'Fetch with Delay';
    document.body.appendChild(delayButton);
    
    const messageDiv = document.createElement('div');
    document.body.appendChild(messageDiv);
    
    function delayedRequest(url = 'https://jsonplaceholder.typicode.com/users/1') {
      messageDiv.textContent = 'Waiting ...';
      fetch(url)
        .then(response => response.json())
        .then(data => {
          setTimeout(() => {
            console.log(JSON.stringify(data, null, " "));
            messageDiv.textContent = 'Check console for the data';
          }, 2000);
        })
        .catch(error => {
          console.error('Error fetching data:', error);
          messageDiv.textContent = 'Error fetching data';
        });
    }
    
    delayButton.addEventListener('click', () => {
      delayedRequest();
    });
