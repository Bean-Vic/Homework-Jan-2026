## 1. What is the Flux architecture?
Flux is an architecture used to manage state in front-end applications.  
The key idea is one-way data flow, where data moves in a single direction.  
This makes state changes easier to understand and debug, especially in larger apps.

---

## 2. Explain what the Redux store, actions, reducers are and what they do.
In Redux, the store holds the global state of the application.  
Actions are plain objects that describe what happened, such as adding or removing data.  
Reducers are functions that take the current state and an action, and return a new state.

---

## 3. Describe the workflow of Redux.
First, a component dispatches an action.  
The action is sent to the reducer.  
The reducer generates a new state and updates the store.  
Finally, the UI reads the updated state and re-renders.

---

## 4. How do you create/configure a store in Redux?
We usually create a store using `configureStore` from Redux Toolkit.  
We provide the reducers and can also add middleware and development tools.  
Redux Toolkit is preferred because it reduces boilerplate code.

---

## 5. Explain how to use connect().
`connect()` is used to connect a React component to the Redux store.  
It allows the component to access state and dispatch actions through props.  
It is commonly used in class components or older codebases.

---

## 6. What is mapDispatchToProps and what does it do?
mapDispatchToProps maps dispatch functions to component props.  
This lets the component trigger actions directly without calling `dispatch` manually.

---

## 7. What is mapStateToProps and what does it do?
mapStateToProps selects specific data from the Redux store and passes it to the component as props.  
This ensures the component only receives the state it needs.

---

## 8. How do we use useSelector and useDispatch?
`useSelector` is a hook that allows a functional component to read data from the Redux store.  
`useDispatch` provides the dispatch function so the component can send actions to update the store.  
They are the modern alternative to `connect()` for functional components.
