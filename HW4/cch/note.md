
1. What is the DOM?

The DOM document Object Model is a tree-like object representation of an HTML document created by the browser. belongs to Web API
It allows JavaScript to access, modify, and interact with elements and content on the web page.

2. How can you select an HTML element using JS?

You can select HTML elements using methods like
getElementById, getElementsByClassName, getElementsByTagName, and querySelector / querySelectorAll PART of dom API

3. What is a DOM event?

A DOM event is an action that happens in the browser that JavaScript can listen to and respond to.


4. How do we register event handlers for a selected element?

We register event handlers using addEventListener on the selected element. 


5. Explain event delegation. Why is it important?

Event delegation is a technique where we attach a single event listener to a parent element instead of multiple listeners to each child.
It works because events bubble up, and we can use event.target to determine which child triggered the event.

6. What is event propagation? How many phases are there? In what order does it occur?

Event propagation is the process that defines how an event travels through the DOM tree.
There are three phases: capturing phase, target phase, and bubbling phase.
The order is: capturing → target → bubbling.

7. Explain event bubbling and event capturing.

Event capturing is when the event travels from the root element down to the target element.
Event bubbling is when the event travels from the target element up to its parent elements.

Event propagation describes how events travel through the DOM.
There are three phases: capturing, target, and bubbling.
In the capturing phase, the event travels from the root down to the target element.
In the bubbling phase, it travels from the target back up to the root.
By default, event listeners are triggered during the bubbling phase, unless capturing is explicitly enabled.

8. What function prevents the bubbling behavior？

event.stopPropagation() prevents event bubbling.


9. What is an IIF？

An IIFE is a function that is defined and executed immediately after it is created.

10. What is the use of the preventDefault method?

preventDefault() is used to prevent the browser’s default behavior of an event.

11. Can you name some of the new ES6 features?

arrow function spreads tem

