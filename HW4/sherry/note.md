## 1. What is the DOM?

The DOM (Document Object Model) is a **programming interface** for web documents that represents HTML elements as a **tree** structure, where HTML elements are represented as **nodes containing objects**.



## 2. How can you select an HTML element using JS?

In JavaScript, you can select HTML elements using different **DOM API methods**. **`getElementById`** selects by ID, **`getElementsByClassName`** and **`getElementsByTagName`** return collections of elements by class or tag. More modern methods are **`querySelector`** and **`querySelectorAll`**, which allow you to use**CSS selectors**. For example, `document.querySelector(".item")` selects the first element with the class “item”, while `document.querySelectorAll(".item")` returns all matches. Using these APIs, developers can **access and manipulate DOM elements** dynamically.



## 3. What is a DOM event?

A **DOM event** is a **notification mechanism** triggered when something happens in the **Document Object Model**, such as **user interactions** (clicks, key presses, typing) or **system changes** (page load, resize). Developers can attach **event listeners** using methods like **addEventListener**, which respond to these events and make the web page **interactive and dynamic**.



## 4. How do we register event handlers for a selected element?

We can add an **event listener** to an element using `element.addEventListener(eventType, function)` and remove it using `element.removeEventListener(eventType, function)`. Some common event types include `click` (when the user clicks on an element), `focus` (when an element is in focus), `blur` (when an element is not in focus), `keypress` (when the user presses a key), and `submit` (when a form is submitted).



## 5. Explain event delegation. Why is it important?

Event Delegation is an **optimization** technique used when **multiple sibling elements** require the same event handler logic. Instead of binding the handler to each individual element, we can bind it once to their **parent** element. The event handler is triggered when the **event bubbles up** from the target element and out to the parent. This approach is important because it **reduces the number of event listeners**, improving performance and simplifying the management of event handling in complex DOM structures. Within the handler, we can check `event.target` to determine which **specific child element** triggered the event.



## 6. What is event propagation? How many phases are there? In what order does it occur?

Event propagation describes how events travel through the DOM tree when triggered. Event propagation involves three phases: (1) **Capturing**, where the event travels from the root down into the target element; (2) **Target**, where the event has reached the target element; and (3) **Bubbling**, where the event "bubbles up" and travels outward. To stop propagation, we can use `event.stopPropagation()`, which stops the current event's propagation, or `event.stopImmediatePropagation()`, which stops other handlers for the current event from being called.



## 7. Explain event bubbling and event capturing.

**Event bubbling** and **capturing** are two phases of **event propagation**.

In bubbling, the event **starts at the target** element and moves upward through its a**ncestors**.

In capturing, the event travels from the **root down to the target**. By default, most **event listeners use bubbling**, but you can enable capturing by passing true as the third argument to addEventListener.



## 8. What function prevents the bubbling behavior？

The function that prevents event bubbling is **event.stopPropagation()**.

It stops the event from propagating (bubbling) up to parent elements after it is triggered on the target element.



## 9. What is an IIF？

**An Immediately-Invoked Function ** (IIF) is a function that is **defined** and immediately **invoked**. To create an IIF, the function is **wrapped** in parentheses and then invoked. One common use-case for an IIF is to avoid polluting the global object by **creating a function with its own scope**, though this is less relevant with the introduction of `let` and `const`. Another use is to execute some "initiation code" on the top-level once and clean up variables afterward.



## 10. What is the use of the preventDefault method?

**preventDefault()** **stops the browser’s default action** for an event.

For example, it can prevent a form from reloading the page or a link from navigating. This lets you control the behavior using JavaScript instead of the browser’s built-in response.



## 11. Can you name some of the new ES6 features?

Some of the most important **ES6 features** include: **let and const** for block scoping, **arrow functions** with lexical this, **template literals**, **destructuring**, and **default parameters**. ES6 also introduced **rest/spread operators**, **enhanced object literals**, **classes**, and **modules** with import and export. For asynchronous programming, ES6 added **Promises**. Other additions include **iterators**, **generators**, the **for…of loop**, the new **Symbol type**, and data structures like **Map**, **Set**, **WeakMap**, and **WeakSet**.
