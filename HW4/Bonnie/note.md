
1. What is the DOM?
The DOM (Document Object Model) is a programming interface for HTML and XML documents.  
It represents the page as a tree of nodes so that JavaScript can read, change, and manipulate the content, structure, and styles of a webpage.


2. How can you select an HTML element using JS?
Common ways to select elements include:
- document.getElementById()
- document.getElementsByClassName()
- document.getElementsByTagName()
- document.querySelector()
- document.querySelectorAll()


3. What is a DOM event?
A DOM event is an action that happens in the browser, such as a click, key press, or page load.  
JavaScript can listen for these events and execute code in response.


4. How do we register event handlers for a selected element?
We register event handlers using the `addEventListener` method.

Example:
element.addEventListener("click", function () {
  console.log("Clicked");
});

5. Explain event delegation. Why is it important?

Event delegation is a technique where a single event listener is added to a parent element instead of multiple child elements.
It works by using event bubbling to handle events from child elements.

It is important because it:
Improves performance
Reduces memory usage
Works well for dynamically added elements

6. What is event propagation? How many phases are there?

Event propagation describes how an event travels through the DOM.
There are three phases:
Capturing phase
Target phase
Bubbling phase

The order is:
Capturing → Target → Bubbling

7. Explain event bubbling and event capturing.

Event bubbling: the event starts from the target element and bubbles up to parent elements.
Event capturing: the event starts from the root and goes down to the target element.
By default, events use bubbling.

8. What function prevents the bubbling behavior?
The event.stopPropagation() method prevents the event from bubbling up to parent elements.

9. What is an IIFE?

An IIFE (Immediately Invoked Function Expression) is a function that runs immediately after it is defined.

Example:
(function () {
  console.log("IIFE runs immediately");
})();
It is commonly used to avoid polluting the global scope.

10. What is the use of the preventDefault method?

The event.preventDefault() method prevents the browser’s default behavior.
Preventing a form from submitting
Preventing a link from navigating to another page

11. Can you name some of the new ES6 features?

let and const
Arrow functions
Template literals
Destructuring
Spread and rest operators
Classes
Modules (import / export)
Promises