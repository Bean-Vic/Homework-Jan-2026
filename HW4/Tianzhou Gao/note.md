<pre>
1. What is the DOM?<br>
The DOM (Document Object Model) is a programming interface for web documents. It represents the HTML document as a tree of nodes, where each node corresponds to an element, attribute, or text. JavaScript can use the DOM to read, modify, add, or remove content and structure dynamically.

2. How can you select an HTML element using JS?<br>
You can select elements using methods such as:
- document.getElementById("id")
- document.getElementsByClassName("className")
- document.getElementsByTagName("tagName")
- document.querySelector("CSS selector")
- document.querySelectorAll("CSS selector")

3. What is a DOM event?<br>
A DOM event is an action or occurrence that happens in the browser, such as a click, key press, mouse movement, or page load, which JavaScript can listen to and respond to.

4. How do we register event handlers for a selected element?<br>
Event handlers can be registered using:
- element.addEventListener("event", handlerFunction)
- element.onevent = handlerFunction (e.g., element.onclick = function() {})

5. Explain event delegation. Why is it important?<br>
Event delegation is a technique where a single event listener is attached to a parent element instead of multiple child elements. It relies on event bubbling to handle events from child elements. It is important because it improves performance, reduces memory usage, and works well with dynamically added elements.

6. What is event propagation? How many phases are there? In what order does it occur?<br>
Event propagation describes how an event travels through the DOM. There are three phases:
1. Capturing phase
2. Target phase
3. Bubbling phase
The order is: capturing → target → bubbling.

7. Explain event bubbling and event capturing.<br>
Event capturing occurs when the event travels from the root of the DOM down to the target element.  
Event bubbling occurs when the event travels from the target element back up to the root.

8. What function prevents the bubbling behavior？<br>
The stopPropagation() method prevents the event from bubbling up the DOM.

9. What is an IIF？<br>
An IIFE (Immediately Invoked Function Expression) is a function that runs immediately after it is defined. It is commonly used to create a private scope and avoid polluting the global namespace.

10. What is the use of the preventDefault method?<br>
The preventDefault() method stops the browser’s default behavior for an event, such as preventing a form from submitting or a link from navigating.

11. Can you name some of the new ES6 features?<br>
Some ES6 features include:
- let and const
- Arrow functions
- Template literals
- Destructuring
- Spread and rest operators
- Classes
- Modules (import/export)
- Promises
- Default parameters
</pre>
