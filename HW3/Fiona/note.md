##  What is dynamic typing?
    Dynamic typing means that the system checks variable types at runtime, not at compile time. So you do not declear
    the type at the begining, and the javascript will figure out the type at run time.
    In JavaScript, this makes variable types very flexible, since they depend on the assigned value. 
    But it can also cause some type-related bugs, so when I handle API data or user input, I usually add runtime checks 
    to make the code safer.

##  Explain the difference between var, let, & const.
    All three are used to declare variables. The main difference is about the scope and if it is able to be reassgned. 

    var is mostly used in older versions of JavaScript and is function-scoped, meaning it can be accessed anywhere inside 
    a function but not outside. It’s hoisted and initialized as undefined, which can cause some bugs.

    let is more often used in modern JavaScript. It is block-scoped and accessible in a block. It is safer than var 
    because it cannot be used before initialization.

    const is also block-scoped, and once you assigned a value, it can not be changed.

##  What is immutability? What data types in JS are immutable? 
    Immutability means a value can’t be changed after it’s created.
    In JavaScript, primitive types are immutable, like numbers, strings, booleans…
    For example, when you change a string, JS creates a new string instead of modifying the original one.

##  What is the difference between == and ===?
    Double equals will do type conversion to match before doing comparison, which may cause a bug.
    Triple equals does a strict comparison of type and value.
    So I prefer using triple equals to avoid unexpected bugs.

##  What is difference between undefined and null?
    undefined usually means a variable hasn’t been assigned a value.
    null means the value is left to be empty on purpose. 

##  List falsy values in JS.
    Falsy values include false, 0, null, undefined, NaN, and “” which is a pair of quotation has no value, and even no 
    space in between.

##  Explain hoisting in JavaScript.
    Hoisting means JavaScript handles variable declarations before running the code. It means the declaration is on top 
    of scope before execution.
    var, let, and const are all hoisted, but they are kinda diff.
    var is initialized as undefined by default, while let and const must be initialized before they can be used.

##  Explain variable shadowing in Javascript.
    Variable shadowing means when the inner variable and outer variable have the same name, the inner variable hides 
    the outer variable.
    For example, if I declare let x = 10, and then inside a function I declare let x = 20, the inner x will be used 
    inside the function, and the outer x will be hidden in that scope.
    Since this can easily cause bugs, I usually try to avoid it. In production, some teams may enforce linting rules to
    prevent it from happening.

##  What are 3 ways to declare functions?
    The first one is a function declaration. For example, I can write a function using the function keyword, like a 
    greet function that logs “Hello”.
    The second one is a function expression. I can assign the whole function to a variable, for example, a function 
    that logs “Hello”, and I assigned it to a variable called greet.
    The third one is an arrow function. It uses a shorter syntax, and I might write an arrow function called greet that 
    prints “Hello”, which is very common for callbacks.

##  What is a callback function?
    A callback function is a function passed into another function and executed at a later time.
    I use it a lot in array methods like map or forEach, and in event handlers.
    However, if callbacks are overused or overnested, they can make the code messy.

##  Whatʼs the difference between primitive data types and reference data types in JS?
    Primitive types store the actual value directly, like numbers or strings.
    Reference types store a reference to the value in memory， like objects and arrays,
    The key difference is that primitives are copied by value, while reference types are copied by reference.
    That’s why mutating an object can affect multiple variables.

##  Whatʼs the difference between array for loop and forEach? 
    A for loop iterates over data using an index, and it allows you to use break or continue, so you have more control 
    over the loop.
    forEach is an array method that runs a callback on each element, but it doesn’t allow breaking out of the loop. But 
    forEach improves code readability.
    So when readability matters, I prefer forEach. When I need more control over the logic, I use a for loop.

##  Whatʼs the difference between array map and forEach? 
    map and forEach are both array methods.
    map returns a new array, while forEach does not.
    So I use map when I want to transform data and get a new array as the result.
    I use forEach when I just need to loop over the array to perform some action.

##  What is the difference between array slice and splice?
    Slice will create a new array without changing the original one.
    But splice will change the original array, It will remove or insert elements into the original array.
    So I use slice when I want to avoid mutation, and use splice when I want to modify the array.

##  What is an arguments object?
    The arguments object holds all the arguments passed into a function.
    It’s array-like, but not a real array, so it doesn’t support array methods.
    We don’t use it much anymore, though, because ES6 rest parameters (...args) are easier to work with and give us a 
    real array.
