1. What is a SPA?

    Single Page Application is an application that loads a single HTML page and dynamically updates the content without reloading the entire page.

2. What is JSX?
    JSX is a syntax extension for JavaScript that looks like HTML and is used to describe UI in React.
3. What is Virtual DOM?
    Virtual DOM is a lightweight JavaScript object that represents the real DOM. React uses it to efficiently update the UI by comparing changes.
4. What does `ReactDOM.render()` do?
    ReactDOM.render() renders a React element into a DOM node in the browser.
5. What are props?
    Props are read-only inputs passed from parent components to child components.
6. How do prop updates affect rendering?
    When props change, React re-renders the component and its children.

7. What is a state, and how do you update it? Can you mutate it directly?
    State is internal data managed by a component.
    State should not be mutated directly because React relies on state immutability to detect changes and trigger re-rendering. 
    Update it using setState or useState.

8. What is the difference between a `controlled` component and `uncontrolled` component?
    Controlled: form data controlled by React state
    Uncontrolled: form data handled by the DOM 
9. Explain the React component lifecycle.
    The lifecycle describes the phases a component goes through:
        Mounting/Updating/Unmounting

    Each phase has specific lifecycle methods that control how a component is created, updated, and removed.
    
10. List some lifecycle methods and explain what do they do
    componentDidMount() – runs after first render
    componentDidUpdate() – runs after updates
    componentWillUnmount() – cleanup before removal

11. What is the execution order of constructor, render, and lifecycle methods?
    Mounting order:
        constructor
        render
        componentDidMount

    Updating:
        render
        componentDidUpdate

12. Describe the use case of lifecycle methods.
    Fetch data (componentDidMount)
    Sync props/state
    Cleanup timers or listeners (componentWillUnmount)

13. What is React strict mode?
    StrictMode is a development-only tool.
    It intentionally double-invokes certain lifecycle methods and functions to help detect side effects and unsafe code patterns. This behavior does not occur in production.

14. What are synthetic events and how are they different than DOM events?
    Synthetic events are React’s wrapper around native DOM events.
    They provide cross-browser consistency and use event delegation to improve performance by attaching event listeners at the root level.

15. List some common events that you used most
    onClick
    onChange
    onSubmit
    onMouseOver
    onKeyDown
16. How do React handle errors?
    React uses Error Boundaries to catch errors during rendering, lifecycle methods, and constructors of child components. They do not catch errors inside event handlers or asynchronous code.