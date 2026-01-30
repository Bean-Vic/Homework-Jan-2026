react

1. How do we do prop types check?

we can you a library call prop type checking

Prop type checking is how we validate the props a component receives:

2. What is Prop drilling?

Passing props through many layers just to reach a deep child component.

3. How are we going to render a variable as a react component?

In React, components are just functions.
If a variable references a component function, we can render it using <VariableName />, as long as it starts with a capital letter

4. What is **_HOC_** and why we need it?

HOC (Higher-Order Component) is a function that takes a component and returns a new component.
We need HOCs to reuse and share logic across multiple components without duplicating code or modifying the original components.datainjectinon

5. How to properly render an SVG element as a react component?

To properly render an SVG as a React component, we should inline the SVG or import it as a React component, then render it using JSX with a capitalized component name.

import SVG as a React component

6. What is lazy loading and what does it help?

Lazy loading is a performance optimization technique where components or resources are loaded only when they are needed.
It helps reduce the initial bundle size, speed up the first render, and improve user experience.
In React, this is commonly done using React.lazy and Suspense.

7. List several react hooks that you use most and what do they do?

The hooks I use most are useState for managing local state, useEffect for handling side effects like data fetching, useContext for sharing global state, and useMemo and useCallback for performance optimization by memoizing values and functions.

8. what is `useState` and what value we should pass in as prop?

useState is a React Hook that lets functional components store and update local state, and causes the component to re-render when the state changes.
You should pass the initial value of the state — the value you want the state to start with.

9. what is the hook `useEffect` and why we need it?

useEffect is a React hook used to handle side effects in functional components,
such as data fetching, subscriptions, timers, or manual DOM updates, which should not run during render.

10. What is dependency array in `useEffect`?

The dependency array in useEffect controls when the effect runs.
The effect re-runs only when one of the values in the array changes

11. What is the lifecycle method `componentDidUpdate` equivalent hook?

useEffect with dependencies — it runs when specified state or props change.

12. What is the lifecycle method `componentDidMount` equivalent hook?

useEffect with an empty dependency array — it runs once after the first render.

13. What is the lifecycle method `componentWillUnmount` equivalent hook?

componentWillUnmount is equivalent to the cleanup function returned from useEffect,
which runs when the component is removed from the DOM.

14. What’s the difference between `useCallback` and `useMemo`?

useCallback memoizes functions,
while useMemo memoizes values (computed results).

15. What is `useContext` and the difference between `useContext` and `useState`?

useContext is a React Hook that lets a component read data from a Context.

That data is provided by a Context Provider higher in the component tree.

useContext does not create state.
It only consumes (reads) shared data.

useState creates and manages state, while useContext accesses shared state created elsewhere.
