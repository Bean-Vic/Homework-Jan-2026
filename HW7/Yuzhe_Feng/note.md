# HW7 Q&A

### 1. How do we do prop types check?

Prop types checking in React is done using the prop-types library.

It allows developers to define expected types and requirements for props passed into a component. React will warn if props have the wrong type or are missing, which helps catch bugs early.

### 2. What is Prop drilling?

Prop drilling refers to the practice of passing props through many layers of components even though only the deepest component needs it. This can make components harder to maintain, as intermediate components receive props they do not use. Prop drilling is commonly addressed using solutions like the Context API or centralized state management.

### 3. How are we going to render a variable as a react component?

In React, a component is just a JavaScript function.
If a variable references a component function, it can be rendered by using it as a JSX element with a capitalized name.

For example, assigning a component to a variable and rendering it as `<Component />` allows dynamic component rendering based on conditions or data.

### 4. What is HOC and why we need it?

A Higher-Order Component, or HOC, is a function that takes a component as input and returns a new enhanced component.

HOCs are used to reuse component logic, such as authentication, data fetching, or logging, without modifying the original component.

They help separate concerns by keeping reusable logic outside of UI components.

### 5. How to properly render an SVG element as a react component?

In React, the most reliable way to render an SVG as a component is to inline the `<svg>` markup directly in JSX, which works in any setup and allows easy control of size and color.

Another approach is importing an `.svg` file as a React component using a tool like SVGR, for example in CRA you can do import `{ ReactComponent as Icon } from ./icon.svg"` and render `<Icon />`.

### 6. What is lazy loading and what does it help?

Lazy loading is a performance optimization technique that delays the loading of resources or code until they are needed.

It helps reduce the initial bundle size, improves first-page load time, and avoids loading unnecessary content, resulting in better overall performance and user experience.

### 7. List several react hooks that you use most and what do they do?

Some of the React hooks I use most frequently are `useState`, `useEffect`, `useContext`, and `useRef`.

`useState` is used to manage local component state, while `useEffect` is used to handle side effects such as data fetching or subscriptions.`useContext` helps avoid prop drilling by allowing components to consume shared data directly.`useRef` is commonly used to access DOM elements or store mutable values without triggering re-renders.

I also occasionally use `useMemo` and `useCallback` for performance optimization.

### 8. what is useState and what value we should pass in as prop?

useState is a React Hook that allows function components to store and update local state.

It returns the current state value and a setter function that updates the state and triggers a re-render.

The value passed to useState is the initial state, and it should match the type and purpose of the state, such as a number for counters, a string for text input, an array for lists, or null when data is not yet available.

### 9. what is the hook useEffect and why we need it?

useEffect is a React Hook used to handle side effects in function components.

It allows developers to run code after the component renders, such as data fetching, DOM manipulation, or setting up subscriptions.

useEffect is needed because rendering must remain pure, and side effects should be handled separately and cleaned up properly when the component updates or unmounts.

### 10. What is dependency array in useEffect?

The dependency array in useEffect determines when the effect should run. React compares the values in the array between renders, and the effect re-runs only when one of those dependencies changes.

An empty array means the effect runs only once on mount, If you don’t provide a dependency array, the effect runs after every render.

Including the correct dependencies helps avoid unnecessary executions and stale data issues.

### 11. What is the lifecycle method componentDidUpdate equivalent hook?

The equivalent of componentDidUpdate in function components is useEffect with a dependency array.

By specifying dependencies, the effect runs after those values change, and not on the initial mount, which matches the behavior of componentDidUpdate.

### 12. What is the lifecycle method componentDidMount equivalent hook?

The equivalent of componentDidMount in function components is useEffect with an empty dependency array.

This ensures the effect runs only once after the initial render, which matches the behavior of componentDidMount.

### 13. What is the lifecycle method componentWillUnmount equivalent hook?

The equivalent of componentWillUnmount in function components is the cleanup function returned from useEffect.

React calls this cleanup function before the component is removed from the DOM, allowing resources like timers or subscriptions to be properly released.

### 14. What’s the difference between useCallback and useMemo?

`useMemo` and `useCallback` are both React hooks used for performance optimization, and both rely on a dependency array to control when their cached values are updated.

`useMemo` memoizs the result of an expensive computation, so the value is only recalculated when its dependencies change.

`useCallback`, memoizs a function reference, ensuring that the same function instance is preserved across renders unless its dependencies change.

In short, `useMemo` caches values, while `useCallback` caches functions, and both help prevent unnecessary re-computation and re-renders.

### 15. What is useContext and the difference between useContext and useState?

`useContext` is a React Hook used to consume values from a React Context, allowing components to access shared data without passing props through multiple levels.

`useState`, on the other hand, is used to create and manage local state within a component.

The key difference is that `useState` is responsible for storing and updating state, while `useContext` is responsible for accessing shared state.

In practice, `useState` is often used inside a Context provider to manage data, and `useContext` is used by child components to consume that data.
