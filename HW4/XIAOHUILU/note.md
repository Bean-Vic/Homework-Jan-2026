1.What are 3 ways to declare functions? What is their syntax?

function declaration.
It uses the function keyword and has a name. It can be used before it is defined.
function expression.
A function is stored in a variable. It is not available before the definition.
arrow function.
It is a shorter syntax introduced in ES6. It does not have its own this or arguments.

⸻

2.What is the DOM?

The DOM stands for Document Object Model.
It is a tree structure that represents the HTML page.
JavaScript uses the DOM to read, change, add, or remove elements on a web page.

⸻

3.How can you select an HTML element using JavaScript?

We can select HTML elements using DOM methods.
Common methods are getElementById, querySelector, and querySelectorAll.
These methods return DOM elements that JavaScript can work with.

⸻

4.What is a DOM event?

A DOM event is an action that happens in the browser.
Examples are clicking a button, typing in an input, or submitting a form.
JavaScript can listen to these events and respond to them.

⸻

5.How do we register event handlers for a selected element?

We register event handlers using the addEventListener method.
This method connects an event, like a click, with a callback function.
When the event happens, the function will run.

⸻

6.Explain event delegation. Why is it important?

Event delegation means adding one event listener to a parent element instead of many child elements.
It works because events bubble up from child to parent.
It is important because it improves performance and works well for dynamic elements.

⸻

7.What is event propagation? How many phases are there? In what order does it occur?

Event propagation describes how an event moves through the DOM.
There are three phases.
First is the capturing phase, then the target phase, and finally the bubbling phase.

⸻

8.Explain event bubbling and event capturing.

Event bubbling means the event starts from the target element and moves up to the parent elements.
Event capturing means the event starts from the root and moves down to the target element.
By default, most events use bubbling.

⸻

9.What is an IIFE?

An IIFE is an Immediately Invoked Function Expression.
It runs immediately after it is defined.
It is often used to avoid polluting the global scope.

⸻

10.What is the use of the preventDefault method?

The preventDefault method stops the browser’s default behavior.
For example, it can stop a form from submitting or a link from opening.
It allows JavaScript to fully control the behavior.

⸻

11.Can you name some of the new ES6 features?

Some ES6 features include let and const, arrow functions, and template literals.
Other features are destructuring, rest and spread operators, and classes.
ES6 makes JavaScript cleaner and easier to write.
