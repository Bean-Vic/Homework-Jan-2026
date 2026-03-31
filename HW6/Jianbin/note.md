# HW6 – React Fundamentals Notes (Q&A)

---

## 1. What is a SPA?
A SPA (Single Page Application) is a web application that loads a single HTML page and dynamically updates the content without reloading the entire page.  
React uses client-side routing and state updates to provide fast and smooth user experiences.

---

## 2. What is JSX?
JSX (JavaScript XML) is a syntax extension for JavaScript that allows writing HTML-like code inside JavaScript.  
JSX makes UI code more readable and expressive.  
It is compiled into `React.createElement()` calls by Babel.

---

## 3. What is the Virtual DOM?
The Virtual DOM is a lightweight JavaScript representation of the real DOM.  
React updates the Virtual DOM first, compares it with the previous version (diffing), and only updates the necessary parts of the real DOM to improve performance.

---

## 4. What does ReactDOM.render() do?
`ReactDOM.render()` renders a React element into a specified DOM container and updates the UI when state or props change.

Example:
```js
ReactDOM.render(<App />, document.getElementById("root"));
```

## 5. What are props?
Props (properties) are read-only inputs passed from a parent component to a child component.  
They are used to pass data and configuration to components and help make components reusable.

---

## 6. How do prop updates affect rendering?
When props change, React automatically re-renders the component to reflect the updated values.  
The component’s render logic runs again using the new props.

---

## 7. What is state? Can you mutate it directly?
State is an object that stores data managed inside a component.  
State should **NOT** be mutated directly.  
Instead, it must be updated using `setState()` in class components or `useState()` in function components to trigger a re-render.

---

## 8. Controlled vs Uncontrolled components
- **Controlled components**: Form data is controlled by React state.
- **Uncontrolled components**: Form data is handled by the DOM itself using refs.

Controlled components provide better control, validation, and predictability.

---

## 9. What is the React component lifecycle?
The React component lifecycle describes the different stages of a component’s existence, including:
- Mounting
- Updating
- Unmounting

---

## 10. What are lifecycle methods?
Lifecycle methods are special methods in class components that run at specific stages of the component lifecycle.  
Common lifecycle methods include:
- `constructor()`
- `render()`
- `componentDidMount()`
- `componentDidUpdate()`
- `componentWillUnmount()`

---

## 11. What is the execution order of lifecycle methods?
During mounting:
1. constructor
2. render
3. componentDidMount

During updating:
1. render
2. componentDidUpdate

---

## 12. What are use cases of lifecycle methods?
- `componentDidMount`: Fetching data, setting up subscriptions
- `componentDidUpdate`: Responding to prop or state changes
- `componentWillUnmount`: Cleaning up timers, event listeners, or subscriptions

---

## 13. What is React Strict Mode?
React Strict Mode is a development-only tool that helps detect potential problems in an application.  
It does not affect production builds and may intentionally invoke certain functions twice to identify side effects.

---

## 14. What are Synthetic Events?
Synthetic Events are React’s cross-browser wrapper around native browser events.  
They provide consistent behavior across different browsers.

---

## 15. What are some common React events?
Common React events include:
- `onClick`
- `onChange`
- `onSubmit`
- `onInput`
- `onMouseEnter`
- `onKeyDown`

---

## 16. How does React handle errors?
React handles errors using **Error Boundaries**.  
Error Boundaries catch JavaScript errors in child components and display a fallback UI instead of crashing the entire application.
