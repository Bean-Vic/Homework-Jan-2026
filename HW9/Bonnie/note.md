1. What is the Flux architecture?
    Flux is an application architecture pattern that enforces a unidirectional data flow.
    In Flux, data flows in one direction: Action → Store → View.
    This design helps make state changes more predictable and easier to debug, especially in large React applications.

2. Explain what the Redux store, actions, reducers are and what they do.
    -The store is a single object that holds the entire state of the application.
    -Actions are plain JavaScript objects that describe what happened in the application. They must have a type field.
    -Reducers are pure functions that take the current state and an action, and return a new state based on the action.

3. Describe the work flow of Redux
    The Redux workflow follows a strict unidirectional data flow:
        A user interaction triggers an action.
        The action is dispatched to the store.
        The reducer processes the action and returns a new state.
        The store updates its state.
        React components subscribed to the store re-render with the new state.
    This predictable flow makes state changes easier to trace and debug.

4. How do you create/configure a store in redux?
    In modern Redux, we usually use Redux Toolkit to configure the store.

    We use the configureStore function, which automatically sets up the Redux DevTools and middleware.

5. Explain how to use `connect()` 
    connect() is a Higher-Order Component provided by react-redux.
    It connects a React component to the Redux store by mapping state and dispatch functions to the component’s props.
6. What is `mapDispatchToProps` and what does it do?
    mapDispatchToProps maps dispatch functions to component props.
    It allows a component to trigger state changes by dispatching actions without directly calling dispatch.
7. What is `mapStateToProps` and what does it do?
    mapStateToProps maps the Redux store state to component props.
    Whenever the store state changes, the component receives updated props and re-renders automatically.
8. how do we use `useSelector` and `useDispatch`?
    useSelector is used to read data from the Redux store state.
    useDispatch is used to dispatch actions to the store.
    They are React hooks and are commonly used in functional components as a modern alternative to connect().