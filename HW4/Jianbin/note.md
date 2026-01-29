# HW4 - JavaScript 2 Notes

## 1. What is the DOM?
The DOM (Document Object Model) is a programming interface for HTML and XML documents. It represents the structure of a web page as a tree of objects, allowing JavaScript to access, modify, add, or delete elements dynamically.

## 2. How can you select an HTML element using JS?
There are several ways:
- document.getElementById("id")
- document.getElementsByClassName("class")
- document.getElementsByTagName("tag")
- document.querySelector("selector")
- document.querySelectorAll("selector")

## 3. What is a DOM event?
A DOM event is an action or occurrence that happens in the browser, such as a click, key press, mouse movement, or page load, which JavaScript can respond to.

## 4. How do we register event handlers for a selected element?
Event handlers can be registered using:
- element.onclick = function() {}
- element.addEventListener("event", callback)

## 5. Explain event delegation. Why is it important?
Event delegation is a technique where a single event listener is attached to a parent element instead of multiple child elements. It works by using event bubbling.  
It is important because it improves performance and allows handling dynamically added elements.

## 6. What is event propagation? How many phases are there?
Event propagation describes how events travel through the DOM tree.  
There are **three phases**:
1. Capturing phase
2. Target phase
3. Bubbling phase

## 7. Explain event bubbling and event capturing.
- **Event bubbling**: The event starts from the target element and bubbles up to the root.
- **Event capturing**: The event starts from the root and goes down to the target element.

## 8. What function prevents the bubbling behavior?
`event.stopPropagation()` prevents the event from bubbling up the DOM tree.

## 9. What is an IIFE?
IIFE (Immediately Invoked Function Expression) is a function that runs immediately after it is defined.
Example:
```js
(function () {
  console.log("IIFE executed");
})();
```

## 10. What is the use of the preventDefault method?
`event.preventDefault()` prevents the browser’s **default behavior** for an event.

Examples:
- Prevent a form from submitting / reloading the page
- Prevent a link (`<a>`) from navigating
- Prevent checkbox default toggle (in some cases)

## 11. Can you name some of the new ES6 features?
Examples of ES6 features:
- `let` / `const`
- Arrow functions `() => {}`
- Template literals `` `Hello ${name}` ``
- Destructuring (arrays / objects)
- Default parameters
- Rest / Spread `...`
- Classes
- Modules (`import` / `export`)
- Promises
