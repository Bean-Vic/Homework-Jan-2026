# React Hooks

## 1. How do we do prop types check?

In React, **PropTypes** is used for **runtime prop type checking** in **JavaScript projects** to catch bugs during development.
 We define types using **propTypes**, support primitives like **string and number**, and use **oneOf** or **shape** for complex props, with **`.isRequired`** for required values.
 In **TypeScript**, prop checking is handled at **compile time**, so PropTypes is rarely needed in modern projects.



## 2. What is Prop drilling?

**Prop drilling** in React refers to the process of passing **props through multiple intermediate components** that don’t need them, just so a **deeply nested child** can access the data. This makes the code **harder to maintain** and more **verbose** in large applications. Solutions include using the **Context API** to provide values directly to consumers, or adopting a **state management library** like Redux or Zustand.



## 3. How are we going to render a variable as a react component?

In React, we can render a variable as a component by **assigning the component to a variable** and using it as a **capitalized JSX tag**.
 For dynamic rendering, we often use **conditional rendering**, **component maps**, or **render props**, depending on the scenario.
 The key rule is that **React components must be capitalized** when used in JSX.



## 4. What is ***HOC*** and why we need it?

A **Higher-Order Component**, or **HOC**, is a **function that takes a component and returns an enhanced component**.
 It’s used to **reuse component logic** such as **authentication, logging, or data fetching** without modifying the original component.
 HOCs help achieve **separation of concerns** and avoid **code duplication**.
 Today, many HOC use cases can be replaced by **custom hooks**, but HOCs are still common in **legacy codebases** and some **library patterns**.



## 5. How to properly render an SVG element as a react component?

To properly render an SVG as a React component, the recommended approach is to **import the SVG as a React component** or **convert it into a functional component**.
 This allows the SVG to behave like a normal React component, so we can **pass props**, **control styles**, and **handle events**.
 Inline SVGs are preferred over `<img>` when we need **dynamic styling or interactivity**.



## 6. What is lazy loading and what does it help?

In React, **lazy loading** is achieved using **`React.lazy()`** together with **`Suspense`**. Instead of importing a component eagerly, you wrap a **dynamic `import()`** in `React.lazy`, and then render it inside a **`<Suspense>`** component with a **fallback UI**. This approach ensures that heavy or rarely used components are **code-split** into separate bundles and only **fetched on demand**, which improves **performance** and reduces the **initial load time** of the application.



## 7. List several react hooks that you use most and what do they do?

The React hooks I use most often are **useState**, **useEffect**, **useContext**, **useMemo**, **useCallback**, and **useRef**.
 **useState** manages local component state.
 **useEffect** handles side effects like data fetching and subscriptions.
 **useContext** avoids prop drilling by sharing global state.
 **useMemo** optimizes expensive computations by memoizing results.
 **useCallback** memoizes functions to prevent unnecessary re-renders.
 **useRef** stores mutable values or accesses DOM elements without triggering re-renders.
 Together, these hooks cover **state**, **side effects**, **performance optimization**, and **shared state**.



## 8. what is `useState` and what value we should pass in as prop?

`useState` is the basic **React hook** for managing state in a function component. It gives you a **value** and a **setter** function. Calling the setter schedules a **re-render** with the updated value. 

The value passed into **useState** is the **initial state**, which should represent the component’s **default UI state** and **match the expected data type**, such as a **primitive**, **object**, **array**, or a **lazy initializer function** for expensive setup.



## 9. what is the hook `useEffect` and why we need it?

**useEffect** is a React hook for running **side effects** in function components. Side effects include things like **fetching data, setting up event listeners, or working with timers**. It runs after the render phase, and you can control when it runs with a **dependency array**. 



## 10. What is dependency array in `useEffect`?

The **dependency array** in **useEffect** tells React **when to re-run the effect**.
 It contains the **values that the effect depends on**, and React compares them using **shallow comparison** between renders.
 If the array is **empty**, the effect runs **once on mount**.
 If dependencies change, the effect **re-executes**, and the previous effect is **cleaned up first**.
 This mechanism prevents **stale data**, **unnecessary re-renders**, and **infinite loops**.



## 11. What is the lifecycle method `componentDidUpdate` equivalent hook?

**componentDidUpdate** is replaced by **useEffect with a dependency array**, so the effect runs **after re-renders caused by specific state or prop changes**, not on the initial mount.



## 12. What is the lifecycle method `componentDidMount` equivalent hook?

**componentDidMount** is replaced by **useEffect with an empty dependency array**, which runs **once after the initial render** and is typically used for **initialization logic** such as data fetching.



## 13. What is the lifecycle method `componentWillUnmount` equivalent hook?

**componentWillUnmount** is replaced by the **cleanup function returned from useEffect**, which runs **when the component unmounts** and is used to **clean up side effects** like subscriptions or timers.



## 14. What’s the difference between `useCallback` and `useMemo`?

**useMemo** is used to **memoize a computed value**, while **useCallback** is used to **memoize a function reference**.
 Both hooks help with **performance optimization** by avoiding unnecessary recalculations or re-creations between renders.
 **useMemo** returns a **value**, and **useCallback** returns a **function**, and they are typically used when passing data or callbacks to **memoized child components**.



## 15. What is `useContext` and the difference between `useContext` and `useState`?

**useContext** is a React hook used to **consume values from a Context**, allowing components to **share global data** without prop drilling.
**useState** is used to manage **local component state**.
 The key difference is **scope**: **useState** manages state **inside a component**, while **useContext** provides access to **shared state across the component tree**.
 In practice, **useState** owns the state, and **useContext** is used to **read or update that state** from multiple components.