1. What is dynamic typing?

It is a programming approach. It will deterring at running time
Static Typing Types are determined at compile time.

2. Explain the difference between var, let, & const.

它们的区别主要在 3 个方面： 1. Scope（作用域） 2. Hoisting（提升） 3. Reassignment（能不能重新赋值）

let & const — block scope
var — function scope

var — hoisted and initialized as undefined
let & const — hoisted but in TDZ

var — can reassign & redeclare
let — can reassign, cannot redeclare
const — cannot reassign
