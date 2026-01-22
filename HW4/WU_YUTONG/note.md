### 1. What is the DOM?

The DOM stands for Document Object Model. It is a tree structure that represents an HTML document. It provides APIs that allow JavaScript to dynamically modify the page content and structure.


---

### 2. How can you select an HTML element using JavaScript?

You can select HTML elements in JavaScript using methods like getElementById, getElementsByClassName, getElementsByTagName, getElementsByName, querySelector, or querySelectorAll. These methods allow you to find elements by id, class, tag name, or CSS selectors.

---

### 3. What is a DOM event?

A DOM event is something that happens in the browser, such as a click, a key press, or a page load. JavaScript can respond to it using event listeners.

---

### 4. How do we register event handlers for a selected element?

We can register event handlers by using the `addEventListener` method. It allows us to listen for an event and run a function when it happens.

---

### 5. Explain event delegation. Why is it important?

Event delegation is a technique that uses event bubbling by attaching one event listener to a parent element instead of each child.
It is important because it improves performance and allows us to handle events for elements that are added dynamically.

---

### 6. What is event propagation? How many phases are there? In what order does it occur?

Event propagation describes how an event moves through the DOM. There are three phases: capturing, target, and bubbling. The event first goes down to the target element, then runs on the target, and finally moves up to the root.

---

### 7. Explain event bubbling and event capturing.

Event bubbling means the event starts at the target element and then moves up to the root.
Event capturing means the event moves from the root to the target element.

---

### 8. What function prevents the bubbling behavior?

We can use stopPropagation() to stop the event from bubbling.

---

### 9. What is an IIF?

IIF stands for Immediately Invoked Function. It runs as soon as it is defined. It is often used to create a private scope and avoid polluting the global namespace.

---

### 10. What is the use of the preventDefault method?

preventDefault stops the browser’s default behavior, such as submitting a form or opening a link.

---

### 11. Can you name some of the new ES6 features?

ES6 introduced features like let and const, arrow functions, template strings, destructuring, spread operator, and classes. 
