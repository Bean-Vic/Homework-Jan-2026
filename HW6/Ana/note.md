1. What is a SPA?
A Single Page Application (SPA) loads a single HTML page and dynamically updates content without reloading the entire page. It provides a smoother and faster user experience similar to a desktop application.

2. What is JSX?
JSX is a syntax extension for JavaScript used in React to describe UI structure. It allows writing HTML-like code inside JavaScript, which is later compiled to React.createElement calls.

3. What is Virtual DOM?
The Virtual DOM is a lightweight copy of the real DOM stored in memory. React uses it to efficiently detect changes and update only the necessary parts of the actual DOM.

4. What does ReactDOM.render() do?
ReactDOM.render() renders a React component into a real DOM node. It updates the DOM whenever the component’s state or props change.

5. What are props?
Props are read-only inputs passed from a parent component to a child component. They allow components to be reusable and configurable.

6. How do prop updates affect rendering?
When props change, React re-renders the component to reflect the updated data. This ensures the UI stays in sync with the latest values.

7. What is state, and how do you update it? Can you mutate it directly?
State is a built-in object used to store data that affects a component’s rendering. It should be updated using setState (class components) or state setters like useState, and should never be mutated directly.

8. What is the difference between a controlled component and uncontrolled component?
Controlled components manage form data using React state. Uncontrolled components rely on the DOM itself to manage form values via refs.

9. Explain the React component lifecycle.
The React lifecycle describes the phases a component goes through: mounting, updating, and unmounting. Each phase provides methods or hooks to run logic at specific times.

10. List some lifecycle methods and explain what they do.
componentDidMount runs after the component is rendered and is commonly used for data fetching. componentDidUpdate runs after updates, and componentWillUnmount is used for cleanup.

11. What is the execution order of constructor, render, and lifecycle methods?
During mounting, the order is constructor → render → componentDidMount. During updates, render runs first, followed by componentDidUpdate.

12. Describe the use case of lifecycle methods.
Lifecycle methods are used to perform side effects such as API calls, subscriptions, and cleanup. They help control what happens at different stages of a component’s existence.

13. What is React Strict Mode?
React Strict Mode is a development-only tool that highlights potential problems in an application. It helps detect unsafe lifecycles, deprecated APIs, and unintended side effects.

14. What are synthetic events and how are they different than DOM events?
Synthetic events are React’s wrapper around native DOM events. They provide consistent behavior across browsers and improve performance through event delegation.

15. List some common events that you used most.
Common events include onClick, onChange, onSubmit, onKeyDown, and onMouseOver. These are used to handle user interactions.

16. How do React handle errors?
React handles errors using Error Boundaries, which catch JavaScript errors in components during rendering. Error boundaries prevent the entire app from crashing and allow fallback UI to be displayed.
