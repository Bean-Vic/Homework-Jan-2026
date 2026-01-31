1. How do we do prop types check?
Usually I use TypeScript , because it gives us type checking at compile time.
If TypeScript is not available, we can use PropTypes to validate props during development and catch wrong prop types early.

2. What is prop drilling?
Prop drilling is when we pass props through several layers of components even though those components don’t actually need the data.
It makes the code harder to read and maintain.

3. How do we render a variable as a React component?
If the variable references a React component, we can render it using JSX like <Component />.
React treats variables with capitalized names as components.

4. What is HOC and why do we need it?
HOC stands for Higher-Order Component.
It’s basically a function that takes a component and returns a new component with extra behavior.
We use it to reuse logic like authentication or caching without repeating code.

5. How do we properly render an SVG element as a React component?

We can import the SVG as a React component and render it directly in JSX.
This makes it easy to control things like size, color, and styles using props.

6. What is lazy loading and what does it help with?
Lazy loading means loading a component only when it’s actually needed.
It helps reduce the initial bundle size and improves page load performance.

7. What React hooks do you use most and what do they do?
I mainly use useState for local state management,
useEffect for side effects like data fetching,
useContext for sharing global state,
and useCallback or useMemo when I need to optimize performance.

8. What is useState and what value should we pass in?
useState is a hook that lets us add state to function components.
We pass in the initial value, which can be a number, string, object, or even a function.

9. What is useEffect and why do we need it?
useEffect is used to handle side effects such as API calls, subscriptions, or DOM updates.
It runs after the component renders and helps keep side effects separate from UI logic.

10. What is the dependency array in useEffect?
The dependency array controls when the effect runs.
If it’s empty, the effect runs once.
If it has values, the effect runs when those values change.
If we don’t provide it, the effect runs after every render.

11. What is the componentDidUpdate equivalent hook?
useEffect with dependencies works like componentDidUpdate.
It runs whenever the specified state or props change.

12. What is the componentDidMount equivalent hook?
useEffect with an empty dependency array works like componentDidMount.
It runs once after the initial render.

13. What is the componentWillUnmount equivalent hook?
The cleanup function returned from useEffect works like componentWillUnmount.
It’s used to clean up things like timers, event listeners, or subscriptions.

14. What’s the difference between useCallback and useMemo?
useCallback is used to memoize a function,
while useMemo is used to memoize a computed value.
Both help avoid unnecessary re-renders.

15. What is useContext and how is it different from useState?
useContext is used to consume shared data from a context,
while useState is used to manage local component state.
useContext helps avoid prop drilling, and useState is more for component-level state.
