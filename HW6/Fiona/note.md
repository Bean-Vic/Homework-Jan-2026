##  What is a SPA?
    SPA stands for Single Page Application. It means the app loads the HTML page once at the beginning, and after that 
    React uses JavaScript to update specific parts of the UI without refreshing the entire page. For example, a carousel 
    on a webpage—when you click the left or right button, only the images and links change, while the page itself doesn’t 
    reload. 

##  What is JSX?
    JSX is a syntax that looks like HTML but is actually JavaScript. It’s syntax sugar that gets compiled into 
    React.createElement. Because it’s just JavaScript, we can put expressions, conditionals, and loops directly in JSX, 
    which makes React components more declarative and easier to maintain.

##  What is Virtual DOM?
    The Virtual DOM is a lightweight copy of the real DOM which is slow and heavy. React compares the new copy with the 
    old one, finds exactly what changed, and only updates those specific spots in the real DOM.

##  What does ReactDOM.render() do?
    ReactDOM.render is the bridge between React code and the actual web page. It takes a React component tree and mounts 
    it into a specific HTML container, usually a div with an id of root, so the app can be displayed in the real DOM. 
    This usually happens once when the app starts.

##  What are props?
    Props are data passed from a parent component to a child component. They work similarly to function arguments and 
    follow a unidirectional data flow. Props are read-only, which means the child component cannot modify them. This 
    makes components more predictable and easier to debug and test.
##  How do prop updates affect rendering?
    When props update, React detects the change and re-renders the component. It creates a new Virtual DOM, compares 
    it with the previous one, and only updates the parts of the real DOM that actually changed to reflect the new data.

##  What is a state, and how do you update it? Can you mutate it directly?
    State is data stored inside a component. If props are data passed into a component, state is the component’s own 
    private memory, like form inputs or toggle switches. You should never mutate state directly because React won’t 
    detect the change. You should use setState or the useState updater function to let React schedule updates and 
    trigger re-renders correctly, including batching updates when needed.

##  What is the difference between a component and component?
    A controlled component uses React state to control form inputs, while an uncontrolled component relies on the DOM. 
    Controlled components are easier to validate and track because the data lives in React state, while uncontrolled 
    components use refs to read values directly. I usually use controlled components for complex or predictable forms, 
    and uncontrolled components for simple cases or when performance is a priority.

##  Explain the React component lifecycle.
    Every React component goes through three main phases. Mounting is when the component is created and first added to 
    the DOM. Updating happens when the component re-renders due to changes in state or props. Unmounting is when the 
    component is removed from the DOM.
##  List some lifecycle methods and explain what do they do.
    componentDidMount is used for API calls after the first render, componentDidUpdate is for reacting to data changes, 
    and componentWillUnmount is for cleanup. In modern React, we usually handle all of these using the useEffect hook.

##  What is the execution order of constructor, render, and lifecycle methods? 
    When a component starts up, the order goes from constructor to render, and then to componentDidMount. 
    If it updates, it goes from render to componentDidUpdate. The render method is the meat in the sandwich; 
    it always happens after the logic but before the browser actually shows the result.

##  Describe the use case of lifecycle methods.
    Lifecycle methods are used to run code at different stages of a component, such as when it is first added to the 
    page, updated, or removed. They are commonly used to handle side effects at different phases of a component.
    For example, during mounting, we can load data or set up initial logic. During updating, we can respond to state or 
    prop changes. When a component is unmounted, we clean up things like timers or event listeners.

##  What is React strict mode?
    React Strict Mode is a development-only mode. It intentionally runs certain logic twice to help detect potential 
    issues and unintended side effects early. It doesn’t affect production behavior. 

##  What are synthetic events and how are they different than DOM events? 
     Synthetic events are React’s wrapper around browser events. It makes sure everything works exactly the same across 
    Chrome, Safari, and Firefox. 

##  List some common events that you used most
    I use a lot for mouse action or user interaction. Like onClick for buttons, onChange for handling text inputs or 
    selects, and onSubmit to prevent page refreshes on forms. 
##  How do React handle errors?
    React uses Error Boundaries, It acts as a safety net or a circuit breaker for the UI. Normally, if a component 
    crashes during rendering, it can take down the whole app and leave users with a blank screen. But Error Boundary 
    can catche that error and lets you show a fallback UI instead of crashing the entire page. it only catches errors 
    during rendering, lifecycle methods, or constructors. Errors in async code or event handlers still need to be 
    vochandled separately, usually with try/catch.
