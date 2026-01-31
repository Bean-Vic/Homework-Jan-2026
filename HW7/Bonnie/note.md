1. How do we do prop types check?
    We use PropTypes to validate the types of props passed to a component during development.
    MyComponent.propTypes = {
        name: PropTypes.string.isRequired,
    };

2. What is Prop drilling?
    Prop drilling is the process of passing props through multiple levels of components even when intermediate components do not need them.

3. How are we going to render a variable as a react component?
    The variable must start with a capital letter and be used as JSX.
        const Component = MyComponent;
        return <Component />;


4. What is ***HOC*** and why we need it?
    A Higher-Order Component (HOC) is a function that takes a component and returns a new component.
    It is used to reuse logic, such as authentication, logging, or data injection.

5. How to properly render an SVG element as a react component?
    We import the SVG as a React component.
    import { ReactComponent as Icon } from "./icon.svg";

6. What is lazy loading and what does it help?
    Lazy loading loads components only when they are needed, which improves performance and reduces initial bundle size.

7. List several react hooks that you use most and what do they do?
    useState – manages local componetnt state
    useEffect – handles side effects,such as data fetching, subscriptions,timer
    useContext – consumes shared state provided by the Context API.
    useCallback – is used to memoize functions to prevent unnecessary       re-renders.
    useMemo – is used to memoize expensive computed values.
    useRef – is used to access DOM elements or store mutable values that do not trigger re-renders.

8. what is `useState` and what value we should pass in as prop?
    useState is a react hook used to manage state in functional components.
    We pass in the initial value of the state.which can be a number, string, object, array, or even null. 
        The initial value is only used during the first render.

9. what is the hook `useEffect` and why we need it?
        useEffect is used to handle side effects, 
        Side effects include:

            Fetching data from an API
            Setting up subscriptions or event listeners
            Using timers like setTimeout or setInterval
            Manually interacting with the DOM

10. What is dependency array in `useEffect`?
    The dependency array controls when the effect runs:
        No array → every render
        Empty array → once on mount
        With dependencies → when dependencies change

11. What is the lifecycle method `componentDidUpdate` equivalent hook?
    useEffect with a dependency array.
        useEffect(() => {}, [state]);

12. What is the lifecycle method `componentDidMount` equivalent hook?
    useEffect with an empty dependency array.
        useEffect(() => {}, []);

13. What is the lifecycle method `componentWillUnmount` equivalent hook?
    The cleanup function inside useEffect.
        useEffect(() => {
        return () => {};
        }, []);

14. What’s the difference between `useCallback` and `useMemo`?
    useCallback memoizes functions
    useMemo memoizes computed values

15. What is `useContext` and the difference between `useContext` and `useState`?
    useState is used to manage state
    useContext is used to share state across components
    Context does not store state; it only provides access to it.