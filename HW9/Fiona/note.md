## 1. What is the Flux architecture?
    Flux is an application architecture mainly used with React. It enforces one-way data flow, where data goes in a 
    single direction, making the app easier to understand and debug. Instead of components updating data randomly, 
    everything follows a clear path.

## 2. Explain what the Redux store, actions, reducers are and what they do.
    Store holds the global state of the app, It’s where all the application state lives, and it acts as the single 
    source of truth.
    Actions describe what happened, they are plain JavaScript objects that describe what happened, for example, a 
    withdraw action.
    Reducers describe how the state changes, they take the current state and an action, and return a new state.

## 3. Describe the work flow of Redux
    The flow is that user triggers an action, then Action is dispatched, then Reducer updates the store, 
    then UI re-renders with new state. Everything goes in one direction.

## 4. How do you create/configure a store in redux?
    You create a store using createStore or configureStore.
    You pass in a reducer, and the store will manage the state.

## 5. Explain how to use connect()
    connect() connects a React component to the Redux store.
    It allows the component to read state and dispatch actions.

## 6. What is mapDispatchToProps and what does it do?
    mapDispatchToProps is a function that lets you pass Redux action dispatchers into a component as props.
    It allows the component to trigger state changes without calling dispatch directly.

## 7. What is mapStateToProps and what does it do?
    mapStateToProps selects data from the Redux store and passes it as props to the component.
    It allows components to subscribe only to the parts of the state they need. When that state changes, the component 
    re-renders.

## 8. how do we use useSelector and useDispatch ?
    Hooks like useSelector and useDispatch are the modern replacement for connect(). useSelector manages store 
    subscriptions for you and re-renders the component when the selected state changes. useDispatch exposes the dispatch 
    function so actions can be triggered directly. But you still need to be careful with selector performance to avoid 
    unnecessary re-renders.
