1. What is the Flux architecture? 

Flux is an application architecture that enforces one-way data flow.
User actions create actions, actions are dispatched through a dispatcher, stores update the state, and views re-render based on that state.
This makes state changes predictable and easier to debug in large React applications.

2. Explain what the Redux store, actions, reducers are and what they do. 

The store holds the entire application state.
Actions are plain objects that describe what happened.
Reducers are pure functions that take the previous state and an action, and return a new state.
Together, they ensure predictable, one-way state updates.


3. Describe the work flow of Redux 
View → Action → Reducer → Store → View
User interacts with the UI,
the component dispatches an action,
the reducer calculates a new state,
the store updates the state,
and the UI re-renders based on the new state.

dispatch(increment());

const store = createStore(reducer);
const count = useSelector(state => state.counter.count);

4. How do you create/configure a store in redux? 

We usually create a Redux store using Redux Toolkit’s configureStore.
First, we define reducers using createSlice.
Then we pass those reducers into configureStore.
Finally, we wrap the app with the Provider component to make the store available to React.

In Redux Toolkit, we create the store using configureStore.
First, we define reducers using createSlice.
Then we pass those reducers into configureStore.
Finally, we wrap the React app with the Provider component to make the store available to all components.

5. Explain how to use connect() 

connect() is a higher-order function from React-Redux that connects a React component to the Redux store.
It uses mapStateToProps to map state to props and mapDispatchToProps to map actions to props.
When the store updates, the connected component receives new props and re-renders.

6. What is mapDispatchToProps and what does it do? 

mapDispatchToProps maps action creators to component props by binding them to the Redux dispatch function.
This allows components to trigger state updates without directly calling dispatch, making them more reusable and easier to test.


7. What is mapStateToProps and what does it do? 

mapStateToProps is a function that maps the Redux store state to the props of a React component, allowing the component to receive only the state it needs.

8. how do we use useSelector and useDispatch ?

In Redux, useSelector allows a component to read specific data from the store, and it re-renders when that data changes.
useDispatch provides access to the dispatch function so the component can send actions to update the store.