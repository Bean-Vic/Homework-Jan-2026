1. What are 3 ways to declare functions? What is their syntax?
   - Function Declaration
       ```function add(a, b) {
       return a + b;
       }```

   - Function Expression
       ```const add = function(a, b) {
       return a + b;
       };```

   - Arrow Function (ES6)
       ```const add = (a, b) => a + b;```

2. What is the DOM?
   - The DOM (Document Object Model) is a programming interface that represents the HTML document as a tree structure. It allows JavaScript to read, modify, add, or delete elements and styles dynamically.
  
3. How can you select an HTML element using JS?
   -  ```document.getElementById("id")
   document.getElementsByClassName("class")
   document.getElementsByTagName("div")
   document.querySelector(".class")
   document.querySelectorAll("div")```

4. What is a DOM event?
   - A DOM event is an action or occurrence that happens in the browser, such as a click, keypress, submit, or mouse movement, which JavaScript can listen to and respond to.

5. How do we register event handlers for a selected element?
   - ```element.addEventListener("click", function() {
        console.log("Clicked");
        });```

6. Explain event delegation. Why is it important?
    - Event delegation means attaching a single event listener to a parent element instead of multiple child elements. It relies on event bubbling.
    - Benefits: Better performance, Less memory usage, Works for dynamically added elements
    - ```parent.addEventListener("click", e => {
        if (e.target.tagName === "LI") {
            console.log("List item clicked");
        }
        });```

7. What is event propagation? How many phases are there? In what order does it occur?
    - Event propagation is how an event travels through the DOM.
    - There are 3 phases:
        Capturing phase (top → target)
        Target phase
        Bubbling phase (target → top)
        Order: Capturing → Target → Bubbling
   
8. Explain event bubbling and event capturing.
    - Capturing: event travels from root down to target
    - Bubbling: event travels from target up to root
    - Default behavior is bubbling.
   
9.  What is an IIF
    - Immediately Invoked Function Expression: a function that runs immediately after it is defined.
    - ```(function() {
        console.log("IIFE runs immediately");
        })();```
    - Used to avoid polluting the global scope.
    
10. What is the use of preventDefault method?
    - It prevents the browser’s default behavior.
    - ```form.addEventListener("submit", e => {
        e.preventDefault(); // stops page reload
        });```

11. Can you name some of the new ES6 features?
    - let and const
    - Arrow functions () => {}
    - Template literals `Hello ${name}`
    - Destructuring ```const { name } = user;```
    - Spread operator  ```[...arr1, ...arr2]```
    - Default parameters ```function greet(name = "Guest") {}```
    - Classes ```class Person {}```
    - Modules ```import x from "./file.js";```




