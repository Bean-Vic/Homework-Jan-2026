1. What is the console output when the user clicks “Button 3”, and why?
    - output: ```you just clicked #4 button```
    - Why: var is function-scoped, not block-scoped. The loop creates three event handlers, but they all close over the same single variable i. By the time I click any button, the loop has already finished and i has been incremented to 4. So every handler prints 4, no matter which button clicked.


2. How would we fix the issue before ES6? How do we fix it after ES6?
    - Before ES6: We need to create a new scope per iteration so each handler “remembers” the right value.
``` function makeHandler(j) {
    return function () {
        console.log('you just clicked #' + j + ' button');
    };
    }

    for (var i = 1; i <= 3; i++) {
    document.getElementById('btn' + i).addEventListener('click', makeHandler(i));
    }
```
    - After ES6: Use let, which is block-scoped and creates a fresh i binding per iteration.
``` for (let i = 1; i <= 3; i++) {
    document.getElementById(`btn${i}`).addEventListener('click', function () {
        console.log(`you just clicked #${i} button`);
    });
    }
```