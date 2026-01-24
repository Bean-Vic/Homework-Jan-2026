
# React Interview Notes

## 1. What is a SPA?
SPA stands for Single Page Application.  
It is a web application that loads once and then updates the page dynamically without refreshing, like Gmail or Google Maps.

---

## 2. What is JSX?
JSX is a syntax that looks like HTML but works inside JavaScript, which makes writing React UI much easier.

---

## 3. What is Virtual DOM?
The Virtual DOM is a JavaScript copy of the real DOM. React updates it first, compares it with the previous version, and only changes what is needed in the real DOM.

---

## 4. What does ReactDOM.render() do?
It renders a React component into a real DOM element on the page.

---

## 5. What are props?
Props are data that are passed from a parent component to a child component.

---

## 6. How do prop updates affect rendering?
When props change, the component automatically re-renders to show the new data.

---

## 7. What is a state, and how do you update it? Can you mutate it directly?
State is data that belongs to a component.  
You update it using setState or a state setter.  
You should not change it directly.

---

## 8. What is the difference between a controlled component and uncontrolled

component?
A controlled component gets its value from React state, while an uncontrolled component stores its value in the DOM.

---

## 9. Explain the React component lifecycle.
The lifecycle describes the process of a component being mounted, updated, and finally removed from the page.

---

## 10. List some lifecycle methods and explain what do they do
For example, componentDidMount runs after the component loads, componentDidUpdate runs after it updates, and componentWillUnmount runs before it is removed.

---

## 11. What is the execution order of constructor, render, and lifecycle methods?
The order is constructor, then render, and then componentDidMount.

---

## 12. Describe the use case of lifecycle methods.
They are often used for fetching data, setting timers, or cleaning up resources.

---

## 13. What is React strict mode?
React Strict Mode is a development tool that helps find potential problems in your code.

---

## 14. What are synthetic events and how are they different than DOM events?
Synthetic events are React’s wrapper around browser events so they work the same across all browsers.

---

## 15. List some common events that you used most
Some common events are onClick, onChange, onSubmit, and onKeyDown.

---

## 16. How do React handle error?
React uses Error Boundaries to catch errors and prevent the entire app from crashing.
