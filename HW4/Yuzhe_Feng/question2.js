/*

/* i).What is the console output when the user clicks on “Button 3” and why?

The variable `i` is declared using `var`, which is function-scoped, not block-scoped.
All event listeners share the same `i` variable. The callback function runs after the loop finishes executing.
When the loop ends, the value of `i` becomes 4, so every button click logs 4, regardless of which button is clicked.

*/

// ii). How would we fix the issue before ES6? How do we fix it after ES6? //
//Before ES6: using an IIFE//

for (var i = 1; i <= 3; i++) {
  (function (j) {
    document.getElementById("btn" + j).addEventListener("click", function () {
      console.log("you just clicked #" + j + " button");
    });
  })(i);
}

//We can use an IIFE to create a new scope for each iteration. The current value of `i` is passed as `j`, so each event listener keeps its own copy of the value.//

// After ES6: using `let` //

for (let i = 1; i <= 3; i++) {
  document.getElementById(`btn${i}`).addEventListener("click", function () {
    console.log(`you just clicked #${i} button`);
  });
}

/* `let` is block-scoped, so a new `i` is created for each iteration of the loop.
Each event listener captures the correct value of `i`, so clicking Button 3 logs #3. */
