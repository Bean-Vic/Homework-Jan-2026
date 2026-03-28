1. How do we do prop types check?
- We use PropTypes to validate the type and shape of props passed into a component. It helps catch bugs by warning us when the wrong type of data is passed. It is mainly for development and does not affect production behavior.

2. What is Prop drilling?
- Prop drilling happens when data is passed from a parent component down through many intermediate components just to reach a deeply nested child. It makes the code harder to read and maintain. This is usually solved by using Context or state management libraries.

3. How are we going to render a variable as a react component?
- If a variable holds a component, we render it like a normal JSX tag.
- For example, if Component is a variable, we use <Component />.
- React treats it the same as a regular component.

4. What is HOC and why we need it?
- HOC stands for Higher Order Component.
- It is a function that takes a component and returns a new enhanced component.
- We use it to reuse logic like authentication, logging, or permissions without duplicating code.

5. How to properly render an SVG element as a react component?
- Import the SVG as a React component and use it like <Icon />, or
- Write the SVG directly inside JSX.
- This allows styling and event handling just like any other React component.

6. What is lazy loading and what does it help?
- Lazy loading means loading components only when they are needed.
- It reduces the initial bundle size and improves page load performance.

7. List several react hooks that you use most and what do they do?
- useState → manage component state
- useEffect → handle side effects (API calls, subscriptions, timers)
- useContext → share data without prop drilling
- useRef → access DOM elements or persist values
- useCallback → memoize functions
- useMemo → memoize computed values

8. what is useState and what value we should pass in as prop?
- useState creates a piece of state.
We pass the initial value of that state:
- number → useState(0)
- string → useState("")
- array → useState([])
- object → useState({})
- boolean → useState(false)

9.  what is the hook useEffect and why we need it?
- useEffect lets us perform side effects in functional components, such as: Fetching data,Updating the DOM, Setting up subscriptions
- It replaces lifecycle methods like componentDidMount, componentDidUpdate, and componentWillUnmount.

10. What is dependency array in useEffect ?
- It tells React when to re-run the effect.
- Empty array [] → run once
- With values [count] → run when count changes
- No array → run after every render

11. What is the lifecycle method componentDidUpdate equivalent hook?
useEffect with dependencies:
``` useEffect(() => {
    // runs after update
    }, [dependency]);```


12. What is the lifecycle method componentDidMount equivalent hook?
useEffect with an empty dependency array:
```useEffect(() => {
  // runs once after first render
}, []);```


13. What is the lifecycle method componentWillUnmount equivalent hook?
Cleanup function inside useEffect:
```useEffect(() => {
  return () => {
    // cleanup code
  };
}, []);```


14. What’s the difference between useCallback and useMemo ?
- useCallback → memoizes a function
- useMemo → memoizes a computed value
- Both are used for performance optimization.

15. What is useContext and the difference between useContext and useState ?
- useState: Manages local state inside a component
- useContext: Reads shared global state provided by a Context, Avoids prop drilling

In short:
- useState = create state
- useContext = consume shared state