2.Consider the following code snippet. Assume that it works and was imported into a .html file with the proper button IDs.

```javascript
for (var i = 0; i <= 5; i++) {
     document
        .getElementById('btn${i}')
        .addEventListener("click", function () {
        console.log('you just clicked button ${i}');
        });
}
```
a) What is the console output when the user clicks on “Button 3” and why?
    The console output will be "you just clicked button 6". This happens because the variable `i` is declared with `var`, which has function scope, not block scope. When the event listener is executed, it refers to the final value of `i` (which is 6) rather than the value at the time of the loop iteration.

b) How would we fix the issue before ES6? How do we fix it after ES6?
    Before ES6: Use an IIFE (Immediately Invoked Function Expression) to capture the current value of `i`:
```javascript
    for (var i = 0; i <= 5; i++) {
        (function(i) {
            document.getElementById('btn' + i).addEventListener("click", function () {
                console.log('you just clicked button ' + i);
            });
        })(i);
    }
```
    After ES6: Use `let` instead of `var`:
```javascript
    for (let i = 0; i <= 5; i++) {
        document.getElementById('btn' + i).addEventListener("click", function () {
            console.log('you just clicked button ' + i);
        });
    }
```