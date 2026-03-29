# HW9 – Redux Fundamentals

---

## 1. What is the Flux architecture?

Flux is an application architecture pattern introduced by Facebook.
It is designed to manage data flow in complex front-end applications by enforcing **unidirectional data flow**.

The data flow in Flux follows this order:

**Action → Dispatcher → Store → View**

This pattern helps make state changes predictable and easier to debug by avoiding two-way data binding.

---

## 2. Explain what the Redux store, actions, and reducers are and what they do.

* **Store**
  The Redux store holds the entire application state in a single object.
  It provides methods to get the state, dispatch actions, and subscribe to state changes.

* **Actions**
  Actions are plain JavaScript objects that describe what happened in the application.
  Each action has a `type` field and may include additional data (payload).

* **Reducers**
  Reducers are pure functions that take the current state and an action, then return a new state.
  They define how the application state changes in response to actions.

---

## 3. Describe the workflow of Redux.

The Redux workflow works as follows:

1. The user interacts with the UI.
2. An action is dispatched.
3. The reducer receives the current state and the action.
4. The reducer returns a new state.
5. The store updates its state.
6. React components re-render based on the updated state.

This one-way flow ensures predictable state management.

---

## 4. How do you create and configure a store in Redux?

In modern Redux applications, we usually use **Redux Toolkit**.

Steps:

1. Create a slice using `createSlice`.
2. Export the reducer from the slice.
3. Use `configureStore` to create the Redux store.
4. Provide the store to the app using `<Provider>`.

Redux Toolkit reduces boilerplate and simplifies store setup.

---

## 5. Explain how to use `connect()`.

`connect()` is a function from `react-redux` that connects a React component to the Redux store.

It allows components to:

* Access state using `mapStateToProps`
* Dispatch actions using `mapDispatchToProps`

The component itself does not directly access the store.

---

## 6. What is `mapDispatchToProps` and what does it do?

`mapDispatchToProps` maps dispatch functions to component props.

It allows components to trigger Redux actions without calling `dispatch` directly,
which helps keep components cleaner and more reusable.

---

## 7. What is `mapStateToProps` and what does it do?

`mapStateToProps` selects the portion of the Redux state that a component needs.

It takes the global state as input and returns an object that becomes the component’s props.
When the selected state changes, the component re-renders automatically.

---

## 8. How do we use `useSelector` and `useDispatch`?

* **useSelector**
  Allows functional components to read data from the Redux store.

* **useDispatch**
  Returns the dispatch function so actions can be dispatched directly.

These hooks are the modern and recommended way to use Redux in functional components.

---

## Summary

Redux helps manage application state in a predictable way by using:

* A single source of truth (store)
* Pure reducers
* Unidirectional data flow

This makes large applications easier to debug, test, and maintain.
