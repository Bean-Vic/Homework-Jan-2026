## 1. What is a SPA?

A **SPA (Single Page Application)** is a **web app that loads one HTML page once**, then **updates the content dynamically with JavaScript** as you interact—**without full page reloads**.



## 2. What is JSX?

**JSX (JavaScript XML)** is a **syntax extension for JavaScript** that lets you **write UI markup inside JavaScript**, mainly used with **React**.



## 3. What is Virtual DOM?

**Virtual DOM** is a **lightweight JavaScript representation of the real DOM** that libraries like React use to **update the UI efficiently**.



## 4. What does `ReactDOM.render()` do?

**`ReactDOM.render()`** **mounts a React component tree into a real DOM node** and keeps it **in sync with state changes**.



## 5. What are props?

**Props are immutable data passed from parent to child components**, similar to function arguments.
 They enable **one-way data flow** in React and help make components **reusable and predictable**.



## 6. How do prop updates affect rendering?

- When a **parent component’s state or props change**, it may pass **new props** to its child.
- If a child **receives new props**, React **re-runs the child component’s render function**.
- React then **compares the new Virtual DOM with the previous one**.
- Only the **actual differences** are applied to the real DOM (not a full re-render).



## 7. What is a state, and how do you update it? Can you mutate it directly?

**State** is **internal data** managed by a **component** that can **change over time** and **affects rendering**.
 In **function components**, state is updated using the **setter from `useState`**, and in **class components** using **`setState`**.
 State **must not be mutated directly**; instead, updates should **create new values** so React can **properly detect changes** and **re-render**.



## 8. What is the difference between a `controlled` component and `uncontrolled` component?

In React, a **controlled component** is a form element whose **value is fully managed by React state**. The component’s `value` prop comes from state, and `onChange` updates the state, making React the **single source of truth**. 

An **uncontrolled component**, on the other hand, stores its state in the **DOM itself**, and you access the value using a **ref**. 

Controlled components offer **better validation and synchronization**, while uncontrolled ones are **simpler** and closer to native HTML.



## 9. Explain the React component lifecycle.

The **React component lifecycle** consists of **mounting**, **updating**, and **unmounting** phases.
 During **mounting**, the **component is created** and **added to the DOM**.
 During **updating**, the **component re-renders** when **state or props change**.
 During **unmounting**, the **component is removed** and **cleanup logic runs**.
 In **function components**, **lifecycle behavior** is handled mainly with the **`useEffect` hook**.



## 10. List some lifecycle methods and explain what do they do

Common React lifecycle methods include

+  **`constructor`** for **initialization state and bind methods** , 

+ **`render`** for **returning UI**, 

+ **`componentDidMount`** for **running logic once after mounting**,

+  **`componentDidUpdate`** for **responding to state or prop changes**,

+ **`componentWillUnmount`** for **cleanup**, such as **removing event listeners**, **clearing timers**, and **canceling subscriptions**.

  In **function components**, these **lifecycle behaviors** are mainly handled using the **`useEffect` hook**.



## 11. What is the execution order of constructor, render, and lifecycle methods?

During **mounting**, React runs **constructor**, then **render**, and finally **componentDidMount**.
 During **updating**, **render** runs first, followed by **componentDidUpdate**.
 On **unmounting**, **componentWillUnmount** runs, while in **function components**, lifecycle behavior is handled using **`useEffect`**.



## 12. Describe the use case of lifecycle methods.

During **mounting**, lifecycle methods are used to **fetch data** and **set up side effects** after the component is **added to the DOM**.
 During **updating**, they **respond to state or prop changes** and **trigger necessary side effects**.
 During **unmounting**, they **clean up resources** such as **event listeners** and **timers** to **prevent memory leaks**.
 Overall, **lifecycle methods** manage **side effects** across a component’s lifecycle to ensure **predictable behavior**.



## 13. What is React strict mode?

**React Strict Mode** is a **development-only feature** that helps **identify potential bugs** by running **extra checks** and **intentionally double-invoking** certain **lifecycle methods** and **effects** to **surface unsafe side effects**.



## 14. What are synthetic events and how are they different than DOM events?

**Synthetic events** are **React’s normalized wrapper around native DOM events**, designed to provide a **consistent cross-browser API**. They are handled through **event delegation**, where React attaches a **single event listener at the root**, improving **performance and memory efficiency**. At the same time, synthetic events still **expose the underlying native DOM event** when direct access is needed.



## 15. List some common events that you used most

- **`onClick`** – handle **button clicks** and **user actions**
- **`onChange`** – track **input / form value changes**
- **`onSubmit`** – handle **form submission**
- **`onFocus`** / **`onBlur`** – handle **focus state changes**
- **`onKeyDown`** / **`onKeyUp`** – handle **keyboard interactions**
- **`onMouseEnter`** / **`onMouseLeave`** – handle **mouse hover events**
- **`onScroll`** – track **scroll position**
- **`onResize`** – respond to **window size changes**



## 16. How do React handle errors?

**React handles errors mainly through Error Boundaries**, which catch **rendering errors** and **lifecycle errors** in **child components** and display a **fallback UI** instead of **crashing the app**.
 Errors in **event handlers** or **async code** must be handled **separately** using **`try/catch`**
