1. What is a SPA?
   - A SPA (Single Page Application) is a web application that loads a single HTML page and updates the content dynamically without reloading the entire page. When users navigate, only the necessary data is fetched and the UI changes using JavaScript. This makes the app faster and gives a smoother user experience.
  
2. What is JSX?
   - JSX is a syntax extension for JavaScript that looks like HTML. It allows us to write UI code in a more readable way inside JavaScript. React uses JSX to describe what the UI should look like.
  
3. What is Virtual DOM?
   - The Virtual DOM is a lightweight copy of the real DOM that React keeps in memory. When something changes, React first updates the Virtual DOM, compares it with the previous version, and only updates the parts of the real DOM that actually changed. This improves performance.
  
4. What does ReactDOM.render() do?
   - It takes a React component and displays it inside a specific DOM element on the webpage. It connects React with the actual HTML.
    
5. What are props?
   - Props are inputs passed from a parent component to a child component. They are used to share data and configuration. Props are read-only and should not be modified by the child.
  
6. How do prop updates affect rendering?
   - When props change, React automatically re-renders the component to reflect the new data. This keeps the UI in sync with the parent component.

7. What is a state, and how do you update it? Can you mutate it directly?
   - State is data that belongs to a component and can change over time. It controls how the component behaves and looks.
   - You must update state using `setState` (class) or `setState` from `useState` (hooks).
   - You should never modify state directly because React won’t detect the change correctly.

8. What is the difference between a controlled component and uncontrolled
component?
   Controlled component:
   - The form data is controlled by React state. Every change updates the state.

   Uncontrolled component:
   - The form data is handled by the DOM itself using refs.
   Controlled is preferred because it gives better control and validation.

9. Explain the React component lifecycle.
   The lifecycle describes the stages a component goes through:
   - Mounting: component is created and added to the DOM
   - Updating: component updates due to state or prop changes
   - Unmounting: component is removed from the DOM

10.  List some lifecycle methods and explain what do they do
   Some examples (class components):
   - constructor: initialize state
   - componentDidMount: runs after the component is rendered, good for API calls
   - componentDidUpdate: runs after updates
   - componentWillUnmount: cleanup before removal
   - In hooks: useEffect replaces most lifecycle methods

11. What is the execution order of constructor, render, and lifecycle methods?
   Mounting phase order:
   - constructor
   - render
   - componentDidMount
   Updating phase:
   - render
   - componentDidUpdate
   Unmounting:
   - componentWillUnmount

12. Describe the use case of lifecycle methods.
   - Fetch data from an API
   - Set up subscriptions or timers
   - Clean up resources when component is removed
   - Handle side effects

13. What is React strict mode?
   - It is a tool for highlighting potential problems in an application. It runs extra checks and warnings in development but does not affect production.

14. What are synthetic events and how are they different than DOM events?
   - Synthetic events are React’s wrapper around native browser events. They work the same way but are cross-browser consistent and more efficient.

15. List some common events that you used most
   - onClick
   - onChange
   - onSubmit
   - onMouseEnter
   - onKeyDown
   - onBlur

16. How do React handle errors?
   - React uses Error Boundaries to catch JavaScript errors in components and display a fallback UI instead of crashing the whole app.
   - They are implemented using `componentDidCatch` or `getDerivedStateFromError`.