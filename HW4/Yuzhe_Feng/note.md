# HW4 Q&A

### 1. What are 3 ways to declare functions? What is their syntax?

Functions can be declared in three common ways.
A function declaration uses the function keyword and is hoisted, allowing it to be called before it is defined.
A function expression assigns a function to a variable and is only available after they are defined.
An arrow function provides a more concise syntax and does not have its own `this` or `arguments`, making it widely used in modern JavaScript.

### 2. What is the DOM?

The DOM, or Document Object Model, is a programming interface that represents an HTML document as a hierarchical tree of objects.
It allows JavaScript to dynamically access and manipulate the structure, content, and style of a web page. The DOM acts as a bridge between HTML and JavaScript.

### 3. How can you select an HTML element using JS?

HTML elements can be selected in JavaScript using DOM selection methods.
The most common approach is using `querySelector` and `querySelectorAll`, which allow elements to be selected with CSS selectors and provide a flexible way to access the DOM.
Traditional methods such as `getElementById`, `getElementsByClassName`, and `getElementsByTagName` are also can select elements based on their attributes or tag names.

### 4. What is a DOM event?

DOM events are fundamental for creating interactive web applications. It is an action that occurs in the browser, such as a user interaction or a browser-triggered behavior, that can be detected and handled by JavaScript.
Events are attached to DOM elements, and when an event occurs, JavaScript can respond by executing event handlers.

### 5. How do we register event handlers for a selected element?

Event handlers are registered by first selecting a DOM element and then attaching an event listener using methods such as addEventListener.
The event type is specified along with a callback function that runs when the event occurs.
This approach allows multiple event handlers and provides better control over event handling.

### 6. Explain event delegation. Why is it important?

Event delegation is a pattern where a single event listener is attached to a parent element instead of multiple child elements.
It works by leveraging event bubbling, allowing the parent to handle events triggered by its children using the event object.
Event delegation improves performance, simplifies code, and allows event handling for dynamically added elements.

### 7. What is event propagation? How many phases are there? In what order does it occur?

Event propagation describes how an event travels through the DOM tree when it occurs.
There are three phases of event propagation: the capturing phase, the target phase, and the bubbling phase.
The event first travels from the root down to the target element during capturing, then executes on the target, and finally bubbles back up to the root during the bubbling phase. By default, event handlers run during the bubbling phase.

### 8. Explain event bubbling and event capturing.

Event bubbling and event capturing describe the two directions in which events propagate through the DOM.
In event capturing, the event travels from the root of the DOM down to the target element. In event bubbling, the event travels from the target element back up to the root.
Bubbling is the default behavior and is commonly used for event delegation.

### 9. What is an IIFE

An IIFE, or Immediately Invoked Function Expression, is a function that is defined and executed immediately after it is created.
It creates its own scope and is commonly used to avoid polluting the global namespace.
Before ES6, IIFEs were widely used to achieve data encapsulation in JavaScript.

### 10. What is the use of preventDefault method?

The preventDefault() method is used to stop the browser’s default behavior associated with an event.
It allows developers to override actions such as form submission or link navigation while still handling the event in JavaScript.
Importantly, preventDefault() does not stop event propagation.

### 11. Can you name some of the new ES6 features?

ES6 introduced many new features to help make JavaScript code cleaner, more predictable, and easy to maintain.
Some common ES6 features include `let` and `const` provide block-scoped variable declarations, `arrow functions` offer a more concise syntax with lexical `this`, and `Promises` make asynchronous code easier to manage.
