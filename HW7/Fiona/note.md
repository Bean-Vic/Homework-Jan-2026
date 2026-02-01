## 1. How do we do prop types check?
    We do prop types checking by using the prop-types library. We define Component.propTypes and specify the expected 
    type for each prop, such as string, number, or required values. React will then validate the props at runtime and 
    log warnings in the console if the types don’t match. If the project allows, I personally prefer TypeScript, since 
    it catches these issues at compile time instead.

## 2. What is Prop drilling?
    Prop drilling means you need to pass the prop to a very deeply nested child,but middle components don’t need the prop. 
    It’s like asking several people to pass a delivery package to you. This makes the code harder to read and maintain. 
    To avoid this, I usually use Context API or Redux. The shared state is stored in one place, so whichever component 
    needs the data can access it directly instead of passing props through every level.

## 3. How are we going to render a variable as a react component?
    If a variable stores a React component, we can render it using JSX tags, just like a normal component. The key thing 
    is that the variable name must start with a capital letter. If it starts with a lowercase letter, React will treat 
    it as a native HTML tag instead of a custom component.

## 4. What is HOC and why we need it?
    HOC stands for Higher-Order Component. It’s a function that takes a component and returns a new enhanced component. 
    It’s commonly used to reuse shared logic, such as handling loading states, logging, or authorization. HOCs help keep
    the code clean and avoid unnecessary code duplication.

## 5. How to properly render an SVG element as a react component?
    In React, SVGs can be rendered as normal images, but for better control, I usually import them as React components 
    or inline them. This allows me to pass props, style them with CSS, and make them dynamic. Inline SVGs are especially
    useful when I need animations or theme-based colors. It gives the most flexibility, but for simple icons, importing 
    SVGs as React components provides a good balance between flexibility and maintainability.

## 6. What is lazy loading and what does it help?
    Lazy loading means only load the components that are required for the initial render, instead of loading everything 
    upfront. In React, we usually use React.lazy together with Suspense to achieve this. It helps reduce the initial 
    bundle size, improve performance, and give users a better experience.

## 7. List several react hooks that you use most and what do they do?
    I usually use useState to store and update component state, and useEffect for side effects like API calls. 
    I use useContext to share global state across components. For performance optimization, I use useMemo to memoize 
    expensive values and useCallback to memoize functions, which helps prevent unnecessary re-renders.

## 8. what is useState and what value we should pass in as prop?
    useState is a React hook used to manage local state in functional components. We pass an initial value that matches 
    the expected data type, such as an empty array for lists or null for async data. Updating the state will trigger a 
    re-render. For expensive initial values, we can pass a function to useState so the calculation only runs once.

## 9. what is the hook useEffect and why we need it?
    useEffect is a React hook used to handle side effects in functional components. It’s how React components communicate 
    with the outside world, such as fetching data, setting up subscriptions, or running timers. It helps keep the 
    component render logic pure and focused only on UI. With the dependency array and cleanup function, useEffect can 
    replicate lifecycle behaviors like componentDidMount, componentDidUpdate, and componentWillUnmount.

## 10. What is dependency array in useEffect?
    the dependency array is the second argument of useEffect, and it controls when the effect runs.React compares the 
    values in the array, and the effect re-runs when any of them change. The dependency array determines when a 
    useEffect is executed. If it’s empty, the effect runs only once when the component mounts. If it contains values, 
    the effect runs whenever those values change. Without a dependency array, the effect runs on every render.

## 11. What is the lifecycle method componentDidUpdate equivalent hook?
    The equivalent of componentDidUpdate in functional components is useEffect with a dependency array. In class 
    components, componentDidUpdate runs after the component re-renders when props or state change. Similarly, in 
    functional components, when the values in the dependency array change, useEffect runs after the re-render.

## 12. What is the lifecycle method componentDidMount equivalent hook?
    The equivalent of componentDidMount in functional components is useEffect with an empty dependency array. Because 
    the dependency array is empty, the effect runs only once after the component mounts. This pattern is commonly used 
    for API calls, initialization logic, or setting up subscriptions.

## 13. What is the lifecycle method componentWillUnmount equivalent hook?
    In functional components, the cleanup function returned from useEffect works like componentWillUnmount. It runs when
    the component unmounts and is commonly used to clean up timers, event listeners, or subscriptions to prevent memory 
    leaks.

## 14. What’s the difference between useCallback and useMemo?
    They both do memoization, but useCallback returns a memoized function, while useMemo returns a memoized value, which
    is the result of a function. Usually, I use useCallback to prevent child components from re-rendering when I pass 
    functions down as props."

## 15. What is useContext and the difference between useContext and useState ?
    useState manages local state within a component, such as form inputs or UI state. useContext is used to access 
    shared state provided by a Context, which helps avoid prop drilling. They are often used together, where useState
    manages the data and Context distributes it across components.
