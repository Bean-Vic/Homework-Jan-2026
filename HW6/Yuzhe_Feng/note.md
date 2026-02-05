# HW6 Q&A

### 1. What is a SPA?

A SPA, or Single Page Application, is a web application that loads a single HTML page and dynamically updates its content using JavaScript.

Instead of reloading the entire page on each navigation, a SPA fetches data asynchronously and updates the UI on the client side.

This results in faster transitions and a more app-like user experience.

### 2. What is JSX?

JSX (JavaScript XML)is a syntax extension used in React that allows developers to write UI components using a HTML-like syntax inside JavaScript.

It is not actual HTML. JSX is compiled into regular JavaScript function calls, such as React.createElement, before being executed by the browser.

JSX improves readability and makes it easier to describe UI structure alongside application logic.

### 3. What is Virtual DOM?

The Virtual DOM is a lightweight JavaScript representation of the real DOM used by React.

When application state changes, React creates a new Virtual DOM, compares it with the previous one, and determines the minimal set of changes needed. Only those changes are then applied to the real DOM, which improves performance by reducing expensive DOM operations.

### 4. What does ReactDOM.render() do?

ReactDOM.render() takes a React element and renders it into a specified DOM container.

It mounts the React component tree to the real DOM and keeps the UI in sync with application state by updating only the necessary parts of the DOM when changes occur.

### 5. What are props?

Props are inputs passed from a parent component to a child component in React. They allow components to receive data and configuration and are read-only, meaning a component cannot modify its own props.
Props support one-way data flow and enable components to be reusable and predictable.

### 6. How do prop updates affect rendering?

When props are updated, React re-renders the component with the new props.

This happens because props come from the parent component, and when the parent re-renders with different props, the child component receives those updates and runs its render logic again.

React then compares the new Virtual DOM with the previous one and only applies the necessary changes to the real DOM.

### 7. What is a state, and how do you update it? Can you mutate it directly?

State is data that is managed within a React component and determines how the component renders and behaves over time.

State is updated using React’s state update functions, such as the setter returned by useState, which triggers a re-render.

State should not be mutated directly because React relies on immutable updates to detect changes and update the UI correctly.

### 8. What is the difference between a controlled component and uncontrolled component?

A controlled component is a form element whose value is managed by React state, making React the single source of truth.

An uncontrolled component stores its value in the DOM itself, and React accesses it only when needed, typically using refs.

Controlled components provide better predictability and validation, while uncontrolled components can be simpler for basic use cases.

### 9. Explain the React component lifecycle.

The React component lifecycle describes the phases a component goes through from creation to removal.

There are three main phases: mounting, updating, and unmounting.
During mounting, the component is created and rendered to the DOM.
During updating, the component re-renders when its state or props change.
During unmounting, the component is removed from the DOM and any side effects are cleaned up.
In modern React, these lifecycle behaviors are typically managed using hooks like useEffect

### 10. List some lifecycle methods and explain what do they do

Some common React lifecycle methods include `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount`.

`componentDidMount` runs after the component is first rendered and is typically used for data fetching or setting up subscriptions.

`componentDidUpdate` runs after state or props change and allows the component to respond to updates.

`componentWillUnmount` runs before the component is removed from the DOM and is used to clean up resources like timers or event listeners.

In modern React, these lifecycle behaviors are usually handled with the useEffect hook.

### 11. What is the execution order of constructor, render, and lifecycle methods?

During the initial mount, React first runs the constructor to initialize state, then calls render to generate the UI, and finally executes `componentDidMount` after the component is inserted into the DOM.

During updates, React skips the constructor, calls render again, and then runs `componentDidUpdate` after the DOM has been updated.

When a component is removed, `componentWillUnmount` is called to clean up resources.

### 12. Describe the use case of lifecycle methods.

Lifecycle methods are used to handle side effects at different stages of a component’s life.

They are commonly used to fetch data or set up subscriptions when a component mounts, respond to changes when props or state update, and clean up resources like timers or event listeners when a component unmounts.

These methods help keep side effects separate from rendering logic and ensure they run at the correct time.

### 13. What is React strict mode?

React Strict Mode is a development-only feature that helps identify potential problems in a React application.

It adds extra checks and warnings, such as running certain functions twice, to detect unsafe side effects and deprecated patterns.

Strict Mode does not affect production builds and is used purely as a debugging and best-practice tool.

### 14. What are synthetic events and how are they different than DOM events?

Synthetic events are React’s wrapper around native DOM events. They provide a consistent event interface across different browsers and are handled through React’s event delegation system.

While they behave similarly to DOM events, synthetic events are managed by React and offer better performance and consistency, rather than relying directly on native DOM events.

### 15. List some common events that you used most

Some of the most common React events I use are `onClick`, `onChange`, and `onSubmit`.

`onClick` is used for handling button actions such as submitting data, toggling UI state, or triggering navigation.

`onChange` is mainly used with controlled components to keep form inputs in sync with React state.

`onSubmit` is used on forms to handle submission logic and prevent the default browser behavior.

In addition, I often use events like onBlur for input validation and onKeyDown for handling keyboard interactions such as submitting a form with the Enter key.

### 16. How do React handle errors?

React handles errors primarily through Error Boundaries, which are special components that catch errors during rendering and lifecycle methods of their child components.

Error Boundaries allow applications to display fallback UI instead of crashing the entire app.
Other errors, such as those in event handlers or asynchronous code, are handled using standard JavaScript error handling like try/catch.
