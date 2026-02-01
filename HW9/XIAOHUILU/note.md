1. What is the Flux architecture?

Flux is an application architecture pattern mainly used with React.
Its core idea is one-way data flow, which makes state changes more predictable and easier to debug.
In Flux, data flows in a single direction: actions trigger changes, stores update state, and the UI re-renders based on that state.

2. Explain what the Redux store, actions, and reducers are and what they do.

The store is the single source of truth that holds the entire application state.
Actions are plain JavaScript objects that describe what happened in the app. They usually have a type and sometimes a payload.
Reducers are pure functions that take the current state and an action, and return the next state based on that action.
Together, they define how data is stored and updated in Redux.

3. Describe the workflow of Redux.

The Redux workflow is pretty straightforward and follows one direction.
First, a component dispatches an action.
Then, the action is sent to the reducer.
The reducer calculates a new state based on the action.
Finally, the store updates and React re-renders the UI with the new state.
This one-way flow helps keep state changes predictable.

4. How do you create or configure a store in Redux?

Nowadays, we usually use Redux Toolkit.
We create a store using configureStore, pass in one or more reducers, and export the store.
Then we wrap the React app with the Provider component so that the store is available throughout the app.
This setup is simpler and more recommended than the older createStore approach.

5. Explain how to use connect().

connect() is a function from React Redux used to connect a React component to the Redux store.
It takes mapStateToProps and mapDispatchToProps as arguments and injects state and dispatch-related props into the component.
It's mostly used in older or class-based components, but still works fine.

6. What is mapDispatchToProps and what does it do?

mapDispatchToProps maps dispatch functions to component props.
It allows a component to dispatch actions without directly calling dispatch inside the component.
This helps separate UI logic from Redux logic and makes components easier to test.

7. What is mapStateToProps and what does it do?

mapStateToProps selects the parts of the Redux state that a component needs and maps them to props.
Whenever the selected state changes, the component will re-render with the updated data.
It helps keep components only subscribed to the data they actually use.

8. How do we use useSelector and useDispatch?

useSelector is a hook that allows a functional component to read data from the Redux store.
useDispatch gives access to the dispatch function so the component can dispatch actions.
They are the modern and preferred way to use Redux with functional components, replacing connect() in most cases.
