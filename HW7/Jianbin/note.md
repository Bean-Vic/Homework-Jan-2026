## HW7 – React Hooks Q&A

1. **How do we do prop types check?**  
   By using PropTypes or TypeScript. PropTypes validates props at runtime.

2. **What is Prop drilling?**  
   Passing props through multiple levels even when intermediate components don’t need them.

3. **How do we render a variable as a React component?**  
   Assign the component to a variable and render it like `<Component />`.

4. **What is HOC and why do we need it?**  
   Higher-Order Component is a function that takes a component and returns a new one, used to reuse logic.

5. **How to properly render an SVG as a React component?**  
   Import it as a React component or inline it as JSX.

6. **What is lazy loading?**  
   Loading components only when needed to improve performance.

7. **Common hooks and what they do**  
   - useState: manage state  
   - useEffect: handle side effects  
   - useContext: consume context  
   - useRef: access DOM or persist values

8. **What is useState and what value should we pass?**  
   It manages state. Pass the initial state value.

9. **What is useEffect and why do we need it?**  
   To handle side effects like fetching data.

10. **What is dependency array in useEffect?**  
   It controls when the effect runs.

11. **componentDidUpdate equivalent**  
   useEffect with dependencies.

12. **componentDidMount equivalent**  
   useEffect with empty dependency array `[]`.

13. **componentWillUnmount equivalent**  
   Cleanup function in useEffect.

14. **useCallback vs useMemo**  
   useCallback memoizes functions; useMemo memoizes values.

15. **useContext vs useState**  
   useContext shares global state; useState manages local state.
