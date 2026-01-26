1. What is a SPA?

single page application
is a web app that loads one HTML page once, and then updates the content using JavaScript without reloading the whole page when you navigate.
传统网站（Multi-Page App）

像是：
• 点一下 → 整个网页白一下 → 重新加载一页

Spa
像是：
• 房子一直是同一栋
• 只是换不同的房间里的家具

2. What is JSX?

JSX is synax suguar

It allows us to write UI structure in an HTML-like way inside JavaScript.

3. What is Virtual DOM?

The Virtual DOM is a lightweight JavaScript object stored in memory that represents the real DOM.
React compares the new and old virtual DOM trees in memory and updates only the changed parts in the real DOM.

4. What does ReactDOM.render() do?

ReactDOM.render() is used to mount a React component into the DOM.
It takes a React element, creates a virtual DOM tree, compares it with the previous one, and updates the real DOM efficiently inside a specified container.

5. What are props?

Props are inputs to a React component. They are used to pass data from a parent component to a child component and are read-only.

6. How do prop updates affect rendering?

When props change, React re-renders the component with the new props.
During rendering, React creates a new virtual DOM and compares it with the previous one.
Only the parts that changed are updated in the real DOM.
By default, child components also re-render when the parent re-renders, unless optimizations like React.memo or shouldComponentUpdate are used.

7. What is a state, and how do you update it? Can you mutate it directly?

State is data managed by a component that determines how it renders.
You update state using setState (class) or useState (hooks).
You should never mutate state directly.

8. What is the difference between a controlled component and uncontrolled component?

Controlled components are controlled by React state,
uncontrolled components are controlled by the DOM itself.

9. Explain the React component lifecycle.

React components go through three main lifecycle phases: mounting, updating, and unmounting.
During mounting, the component is initialized, render is called to generate the UI, and side effects like data fetching are done in componentDidMount or useEffect with empty dependency.
During updating, when props or state change, React re-renders the component, performs reconciliation to update only the necessary DOM nodes, and then componentDidUpdate or useEffect runs.
Before unmounting, componentWillUnmount or the cleanup function in useEffect is used to clean up resources like timers or subscriptions.
In modern React, function components use hooks to handle lifecycle behavior instead of class lifecycle methods.

2. 三大阶段：Mount / Update / Unmount

A) Mount（第一次渲染到页面）

发生在：组件第一次被插入 DOM

典型你会做：
• 初次加载数据
• 建立订阅（socket、event listener）
• 启动定时器

Function component（Hooks）怎么写？
• useEffect(() => { ... }, []) 只在 mount 跑一次（像 componentDidMount）
• React 18 开发模式下可能会“模拟重复运行”一次 effect（StrictMode），用来帮你发现副作用问题（面试可提）

B) Update（更新/重新渲染）

发生在：
• props 变了（父组件传新值）
• state 变了（setState / setXxx）
• context 变了
• 组件所在的父组件重渲染（可能导致子也重渲染）

典型你会做：
• 当某个 prop/state 改变时重新 fetch
• 重新计算派生数据
• 同步到 DOM（例如滚动位置）

Function component（Hooks）
• useEffect(() => { ... }, [dep1, dep2])：当依赖变化时跑（像 componentDidUpdate 的某些用法）

注意：更新阶段并不是“只跑一次”，而是每次依赖变化都会跑。

C) Unmount（卸载/从页面消失）

发生在：组件被移除 DOM（例如路由切换、条件渲染变 false）

典型你必须做：
• 清理定时器：clearInterval
• 移除监听：removeEventListener
• 断开 socket
• 取消网络请求：AbortController

Function component（Hooks）
• useEffect(() => { ...; return cleanup }, [])
• cleanup 会在 unmount 执行（也会在依赖变化时先清理旧的，再运行新的 effect）

4. Class lifecycle（如果面试官问传统生命周期）

Mount：
• constructor：初始化 state / bind
• render：返回 UI（纯函数）
• componentDidMount：请求数据、订阅、设置 timer

Update：
• render
• componentDidUpdate(prevProps, prevState)：对比变化后做副作用

Unmount：
• componentWillUnmount：清理资源

（旧的 componentWillMount/WillReceiveProps/WillUpdate 等很多已不推荐，面试可以说“deprecated/legacy”。）

10. List some lifecycle methods and explain what do they do

React lifecycle methods describe different phases of a component’s existence: mounting, updating, and unmounting.
During mounting, methods like constructor, render, and componentDidMount are called to initialize state and perform side effects such as data fetching.
During updating, render and componentDidUpdate are triggered when props or state change.
During unmounting, componentWillUnmount is used for cleanup like removing event listeners or timers.
In function components, these behaviors are handled using the useEffect hook with different dependency arrays.

11. What is the execution order of constructor, render, and lifecycle methods?

✅ 一、Mount 阶段（第一次创建组件）

constructor → render → componentDidMount

👉 执行顺序（Class Component）1. constructor()
• 初始化 state
• 绑定方法 2. render()
• 返回 JSX（必须是纯函数）3. componentDidMount()
• DOM 已经插入页面
• 适合：fetch、订阅、setInterval

✅ 二、Update 阶段（props 或 state 改变）
render → componentDidUpdate

👉 执行顺序 1. render() 2. componentDidUpdate(prevProps, prevState)

✅ 三、Unmount 阶段（组件被移除）

👉 执行顺序 1. componentWillUnmount()

用于：
• 清理 timer
• 取消订阅
• 关闭 socket

During mounting, the order is constructor, then render, then componentDidMount.
During updates, render runs first, followed by componentDidUpdate.
During unmounting, componentWillUnmount is called for cleanup.

12. Describe the use case of lifecycle methods.

Lifecycle methods are used to run code at specific points of a component’s life, such as when it is created, updated, or removed — for things like fetching data, setting up subscriptions, and cleaning up resources.

✅ 常见使用场景（重点考这个）

✅ 1. 组件刚出现时 → 拉数据 / 开连接

📍阶段：Mount
📍方法：componentDidMount()

👉 用途：
• 调 API
• 建立 websocket
• 开定时器

✅ 2. props / state 变了 → 根据变化做反应

📍阶段：Update
📍方法：componentDidUpdate(prevProps, prevState)

✅ 3. 组件要没了 → 清理现场

📍阶段：Unmount
📍方法：componentWillUnmount()

13. What is React strict mode?

React Strict Mode is a development-only tool that helps identify potential problems in an application.
It does not affect production builds, but it intentionally runs certain functions twice and adds extra checks to detect unsafe lifecycle methods, unexpected side effects, and deprecated APIs.

14. What are synthetic events and how are they different than DOM events?

Synthetic events are React’s wrapper around native DOM events.
They provide a consistent, cross-browser event interface and are managed by React’s event system instead of being attached directly to DOM nodes.
Unlike native DOM events, synthetic events are pooled and normalized, and they use event delegation at the root.

15. List some common events that you used most

onClick onChange onSubmit

16. How do React handle errors?

React handles errors mainly through Error Boundaries, which catch rendering and lifecycle errors in component trees and display fallback UI instead of crashing the whole app, while other errors must be handled manually with try-catch or promise handling.
