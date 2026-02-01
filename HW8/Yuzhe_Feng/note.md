# HW8 Q&A

### 1. What is the Flux architecture?

Flux is an application architecture that enforces unidirectional data flow to make state changes predictable.

In Flux, actions describe what happened, a dispatcher sends those actions, and stores manage and update the application state based on those actions.

State changes can only happen through dispatched actions, and stores are responsible for handling the logic that updates state.

By enforcing a single direction of data flow and controlled state updates, Flux helps reduce complexity and makes applications easier to debug and reason about.

### 2. Explain what the Redux store, actions, reducers are and what they do.

In Redux, actions are plain JavaScript objects that describe what happened in the application.
Reducers are pure functions that take the current state and an action, and return the next state based on that action.
The store holds the application state and coordinates state updates by dispatching actions to reducers.

This clear separation of responsibilities enforces unidirectional data flow and makes state changes predictable and easier to debug.

### 3. Describe the work flow of Redux

The Redux workflow follows a strict unidirectional data flow.

First, an action is dispatched to describe a state change.
The store receives the action and passes it to the reducer.
The reducer, which is a pure function, calculates and returns a new state based on the action.
The store then updates the state and notifies subscribers of the change.

This controlled workflow ensures that state updates are predictable and easy to trace.

### 4. How do you create/configure a store in redux?

To create and configure a Redux store, you define how state should be updated by providing a reducer, and then set up any middleware or developer tools you need.

In modern Redux, this is typically done using Redux Toolkit’s configureStore. You pass in your root reducer or a set of slice reducers, and it automatically sets up common middleware and enables Redux DevTools in development.

This approach reduces boilerplate and makes store configuration simpler and more consistent.

### 5. Explain how to use connect()

`connect()` is used to connect a React component to the Redux store.

It allows a component to receive state and dispatch actions through props by mapping store state and dispatch functions to the component’s props.

Internally, `connect()` subscribes the component to the store and re-renders it when relevant state changes, while keeping Redux logic separate from the component itself.

### 6. What is mapDispatchToProps and what does it do?

mapDispatchToProps is used to map dispatching actions to a component’s props.

It allows a component to trigger state changes by calling prop functions instead of interacting with dispatch directly.

This keeps the component focused on behavior and separates Redux-specific logic from the component implementation.

### 7. What is mapStateToProps and what does it do?

mapStateToProps is used to select data from the Redux store and map it to a component’s props.

It determines which parts of the global state a component receives, allowing the component to stay focused on the data it actually needs.

When the store updates, mapStateToProps runs again and the component only re-renders if the mapped props have changed.

### 8. How do we use useSelector and useDispatch?

`useSelector` and `useDispatch` are React Redux hooks used to interact with the Redux store in function components.

`useSelector` allows a component to select and read specific pieces of state from the store, and the component re-renders when the selected state changes.

`useDispatch` provides access to the store’s dispatch function, allowing the component to dispatch actions to update state.

Together, they replace connect, mapStateToProps, and mapDispatchToProps in modern Redux applications.
