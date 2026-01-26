## 1. What is the DOM?
    DOM stands for Document Object Model. It comes from the HTML document and turns HTML into objects, so JavaScript can
    interact with and manipulate the page, and make changes to the content.

## 2. How can you select an HTML element using JS?
    I usually use querySelector or querySelectorAll because they support CSS selectors and are more flexible.
    However, if I need to get a specific element, I may use getElementById instead.

## 3. What is a DOM event?
    A DOM event is an action that happens on a webpage, such as clicking a button or hovering over an image.
    Then the browser notifies JavaScript, and JavaScript triggers a response or some logic.

## 4. How do we register event handlers for a selected element?
    I use addEventListener. It’s a better approach than using the onclick attribute because it can handle multiple 
    handlers, keeps JavaScript separate from HTML, and gives you more control over events.

## 5. Explain event delegation. Why is it important?
    Event delegation means you attach a single event listener to a parent element so you can handle events from its 
    child elements. This way, you don’t have to attach separate event listeners to each child, and it works well for 
    dynamic elements because events bubble up in the DOM.
    You just need to be careful to handle the correct child element.

## 6. What is event propagation? How many phases are there? In what order does it occur?
    Event propagation describes how an event travels through the DOM.
    You can think of it as a three-phase lifecycle of an event: capturing, target, and bubbling.
    For example, when you click a button, during the capturing phase, the event starts from the top of the document 
    and travels down through the parent elements until it reaches the button. In practice, most of the time we don’t 
    handle events in this phase.
    In the target phase, the event reaches the actual element you clicked, which is the button, and the event listener 
    on that element is triggered. This is where JavaScript starts to interact with the event.
    Then it enters the bubbling phase, where the event bubbles back up through the parent elements. If there are event 
    listeners on those parents, they will be triggered, and eventually the event reaches the top of the document again.

## 7. Explain event bubbling and event capturing.
    Event bubbling and event capturing are both parts of event propagation and describe how an event travels through 
    the DOM. In the capturing phase, the event starts from the top of the document and travels down through the parent 
    elements until it reaches the target element. In the bubbling phase, the event starts from the target element and 
    bubbles back up through the parent elements until it reaches the top of the DOM. If there are event listeners on 
    the parent elements, they will be triggered as well. In practice, we use event bubbling much more often than 
    capturing, and bubbling is important for event delegation.

## 8. What function prevents the bubbling behavior？
    We can use stopPropagation to stop the event bubble up to reach the parent elements. This function can be used in 
    both bubbling stage or captering stage. However, it doesn’t stop the browser’s default behavior. You need to be 
    careful using it because it can break event delegation patterns and make the event flow harder to reason about in 
    larger applications.

## 9. What is an IIF？
    IIF stands for Immediately Invoked Function.
    It means once a function is defined, it runs immediately.
    It’s often used to create a private scope and avoid polluting the global scope with variables.
    In modern development, IIFEs are less common, and they’re mostly used in certain isolated scripts.

## 10. What is the use of the preventDefault method?
    The preventDefault() method stops the browser’s default behavior.
I usually use it with forms or links. For example, it prevents a form from refreshing the whole page on submit, so you can handle the data with an API call instead.
It’s often paired with validation logic or event delegation to create a better user experience.

## 11. Can you name some of the new ES6 features?
    Let and const introduce better scoping, which helps reduce bugs.
    Arrow functions allow you to write shorter and more concise syntax.
    They make the code cleaner and easier to read.
