# Redux



## 1. What is the Flux architecture?

**Flux** is an **application architecture** that enforces **unidirectional data flow**.

Data moves in one direction: **Action → Store → View**, and the View can only **dispatch new Actions**, never mutate state directly.

This pattern makes state changes **predictable**, **traceable**, and easier to debug, especially in large front-end applications.



## 2. Explain what the Redux store, actions, reducers are and what they do.

In **Redux**, the **Store** is the **single source of truth** that holds the entire application state.

**Actions** are **plain JavaScript objects** that describe **what happened**, and **Reducers** are **pure functions** that take the current state and an action, then return the **next state**.



## 3. Describe the work flow of Redux

The Redux workflow is strictly **one-way**:

A **View dispatches an Action**, the **Store passes it to the Reducer**, the **Reducer returns a new state**, and the **View re-renders** based on that state.

This makes state changes **deterministic** and easy to **time-travel debug**.



## 4. How do you create/configure a store in redux?

A Redux store is created using **configureStore** (recommended), which sets up the store with **reducers**, **DevTools**, and **middleware** out of the box.



## 5. Explain how to use `connect()`

**connect()** is a **higher-order component** from React-Redux that **connects a React component to the Redux store**.

It injects **state** and **dispatch functions** into the component via **props**, without manually subscribing to the store.



## 6. What is `mapDispatchToProps` and what does it do?

**mapDispatchToProps** maps **dispatchable actions** to component props.

It lets components **trigger state updates** without directly calling dispatch.



## 7. What is `mapStateToProps` and what does it do?

**mapStateToProps** selects the **required slice of state** from the Redux store and maps it to component props.

The component re-renders when the selected state changes.



## 8. how do we use `useSelector` and `useDispatch`?

**useSelector** reads data from the Redux store, and **useDispatch** returns the dispatch function.

They are **hook-based**, **simpler**, and the **preferred modern approach** over connect().

