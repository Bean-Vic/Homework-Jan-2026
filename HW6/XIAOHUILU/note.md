1. What is a SPA?

    Answer:
    SPA stands for Single Page Application. It loads a single HTML page once, and then updates the content dynamically using JavaScript. Instead of reloading the whole page, it only updates the part of the UI that changes. This provides a faster and smoother user experience. React applications are usually built as SPAs.  
    Follow-up understanding: Routing in SPA is handled on the client side, for example using React Router.

2. What is JSX?

    Answer:
    JSX is a syntax extension for JavaScript used in React. It looks like HTML, but it is actually JavaScript under the hood. JSX makes UI code more readable and easier to maintain. Browsers cannot read JSX directly, so it is compiled to JavaScript using tools like Babel.  
    Follow-up understanding: JSX expressions can contain JavaScript using curly braces.

3. What is Virtual DOM?

    Answer:
    The Virtual DOM is a lightweight JavaScript representation of the real DOM. When state or props change, React updates the Virtual DOM first and compares it with the previous version. Then React updates only the changed parts in the real DOM, which improves performance.  
    Follow-up understanding: This process is often called reconciliation or diffing.

4. What does ReactDOM.render do?

    Answer:
    ReactDOM.render renders a React component into the real DOM. It takes a React element and attaches it to a specific DOM node, usually a div with an id like root. This is how a React app is mounted to the browser.  
    Follow-up understanding: In newer React versions, createRoot is used instead of render.

5. What are props?

    Answer:
    Props are used to pass data from a parent component to a child component. Props are read-only, meaning the child component should not modify them. They help make components reusable and configurable.  
    Follow-up understanding: Props flow in one direction, from parent to child.

6. How do prop updates affect rendering?

    Answer:
    When a component receives new props, React re-renders the component. This ensures the UI always reflects the latest data passed from the parent. If props do not change, React may skip re-rendering for performance optimization.  
    Follow-up understanding: PureComponent or memo can help reduce unnecessary re-renders.

7. What is state, and how do you update it? Can you mutate it directly?

    Answer:
    State is data that is managed inside a component and can change over time. State should be updated using setState in class components or the setter function from useState in functional components. You should not mutate state directly because it can cause unexpected behavior.  
    Follow-up understanding: Updating state triggers a re-render.

8. Difference between controlled and uncontrolled components?

    Answer:
    A controlled component gets its value from React state and updates through event handlers. An uncontrolled component stores its value directly in the DOM using refs. Controlled components provide better control, validation, and predictability.  
    Follow-up understanding: Forms usually use controlled components.

9. Explain the React component lifecycle.

    Answer:
    The React component lifecycle has different stages. The main phases are mounting, updating, and unmounting. Each phase provides lifecycle methods or hooks to run code at specific times.  
    Follow-up understanding: In functional components, hooks like useEffect replace lifecycle methods.

10. List some lifecycle methods and explain what they do.

     Answer:
     componentDidMount runs after the component is added to the DOM and is commonly used for data fetching. componentDidUpdate runs after props or state change. componentWillUnmount runs before the component is removed and is used for cleanup.  
     Follow-up understanding: Cleanup prevents memory leaks.

11. What is the execution order of constructor, render, and lifecycle methods?

     Answer:
     During mounting, the order is constructor, render, then componentDidMount. During updates, render runs first, then componentDidUpdate. Unmounting only runs componentWillUnmount.  
     Follow-up understanding: Render should remain pure and not cause side effects.

12. Describe the use cases of lifecycle methods.

     Answer:
     Lifecycle methods are used to handle side effects such as API calls, timers, or subscriptions. They also help clean up resources when components are removed from the DOM.  
     Follow-up understanding: In functional components, useEffect handles these cases.

13. What is React Strict Mode?

     Answer:
     React Strict Mode is a development-only tool. It helps detect potential problems such as unsafe lifecycle methods or side effects. It does not affect production builds.  
     Follow-up understanding: Strict Mode may cause components to render twice in development.

14. What are synthetic events?

     Answer:
     Synthetic events are React’s wrapper around native DOM events. They provide a consistent event interface across different browsers. They improve performance by using event delegation.  
     Follow-up understanding: Synthetic events behave like normal DOM events.

15. List some common events you used most.

     Answer:
     Common events include onClick, onChange, onSubmit, onFocus, and onBlur. These events are used to handle user interactions in React components.  
     Follow-up understanding: Event handlers are passed as props.

16. How does React handle errors?

     Answer:
     React handles errors using Error Boundaries. Error Boundaries catch errors in child components and prevent the entire app from crashing. They are implemented using class components.  
     Follow-up understanding: Error boundaries do not catch errors inside event handlers.
