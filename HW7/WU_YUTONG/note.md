### 1. How do we do prop types check?

In React, we usually use PropTypes to check prop types.  
It helps us make sure the component receives the correct type of data, like strings, numbers, or functions.  
If the wrong type is passed, React will show a warning in the console, which helps catch bugs early.

---

### 2. What is Prop drilling?

Prop drilling means passing props from a parent component down through many layers of child components.  
Even if some middle components don’t use the props, they still have to pass them along.  
This can make the code hard to maintain, and that’s why tools like Context are often used instead.

---

### 3. How do we render a variable as a React component?

If a variable stores a component, we can render it like a normal JSX tag.  
For example, if `MyComponent` is stored in a variable, we use `<MyComponent />`.  
This is useful when we want to render components dynamically.

---

### 4. What is HOC and why do we need it?

HOC stands for Higher-Order Component.  
It is a function that takes a component and returns a new component with extra logic.  
We use HOCs to reuse logic like authentication or logging without repeating code.

---

### 5. How to properly render an SVG element as a React component?

In React, we can import an SVG file as a component and then use it like JSX.  
We also need to use JSX-friendly attributes, such as `className` instead of `class`.  
This makes SVGs easier to style and reuse in React apps.

---

### 6. What is lazy loading and what does it help?

Lazy loading means loading components only when they are needed.  
This reduces the initial load time of the application.  
It helps improve performance, especially for large apps.

---

### 7. List several React hooks that you use most and what they do.

useState is used to manage local state.  
useEffect is used for side effects like data fetching.  
useContext is used to share data across components without prop drilling.  
These hooks help us write cleaner functional components.

---

### 8. What is useState and what value should we pass in?

useState is a hook that lets us add state to a functional component.  
We pass an initial value, such as a number, string, or object.  
It returns the current state and a function to update it.

---

### 9. What is the hook useEffect and why do we need it?

useEffect lets us run code after the component renders.  
It is commonly used for fetching data, setting up subscriptions, or updating the DOM.  
It replaces lifecycle methods like componentDidMount and componentDidUpdate.

---

### 10. What is the dependency array in useEffect?

The dependency array controls when useEffect runs.  
If it’s empty, the effect runs once after the first render.  
If it has values, the effect runs when those values change.

---

### 11. What is the lifecycle method componentDidUpdate equivalent hook?

The equivalent is useEffect with dependencies.  
When the values in the dependency array change, useEffect runs again.  
This works like componentDidUpdate in class components.

---

### 12. What is the lifecycle method componentDidMount equivalent hook?

useEffect with an empty dependency array works like componentDidMount.  
It runs only once after the component is mounted.  
This is commonly used for API calls.

---

### 13. What is the lifecycle method componentWillUnmount equivalent hook?

We use the cleanup function inside useEffect.  
The cleanup runs when the component is about to unmount.  
It is often used to remove event listeners or timers.

---

### 14. What’s the difference between useCallback and useMemo?

useCallback memoizes a function, so the same function is reused.  
useMemo memoizes a value, so expensive calculations are not repeated.  
Both help improve performance.

---

### 15. What is useContext and the difference between useContext and useState?

useContext is used to share global data across components.  
useState is used to manage local state inside one component.  
useContext helps avoid prop drilling, while useState is for simple local data.
