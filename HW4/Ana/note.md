1. What is the DOM?
The DOM (Document Object Model) is a programming interface that represents an HTML document as a tree of objects. It allows JavaScript to access, modify, and update the structure, content, and styles of a webpage.

2. How can you select an HTML element using JS?
You can select elements using methods like getElementById, getElementsByClassName, and getElementsByTagName. Modern JavaScript commonly uses querySelector and querySelectorAll for CSS-style selectors.

3. What is a DOM event?
A DOM event is an action or occurrence that happens in the browser, such as a click, keypress, or page load. Events allow JavaScript to respond to user interactions dynamically.

4. How do we register event handlers for a selected element?
Event handlers can be registered using the addEventListener method. This allows multiple handlers for the same event type without overwriting existing ones.

5. Explain event delegation. Why is it important?
Event delegation is a technique where a single event listener is attached to a parent element instead of multiple child elements. It improves performance and works well for dynamically added elements.

6. What is event propagation? How many phases are there? In what order does it occur?
Event propagation is the process by which an event travels through the DOM. It has three phases: capturing, target, and bubbling, occurring in that order.

7. Explain event bubbling and event capturing.
Event capturing occurs when the event travels from the root down to the target element. Event bubbling occurs after the target phase, when the event bubbles up from the target back to the root.

8. What function prevents the bubbling behavior?
The stopPropagation() method prevents an event from continuing to bubble up the DOM. It stops the event from reaching parent elements.

9. What is an IIFE?
An IIFE (Immediately Invoked Function Expression) is a function that runs immediately after it is defined. It is commonly used to create a private scope and avoid polluting the global namespace.

10. What is the use of the preventDefault method?
The preventDefault() method stops the browser’s default behavior for an event. For example, it can prevent a form from submitting or a link from navigating.

11. Can you name some of the new ES6 features?
ES6 introduced features like let and const, arrow functions, template literals, and destructuring. It also added classes, modules, promises, and the spread/rest operators.