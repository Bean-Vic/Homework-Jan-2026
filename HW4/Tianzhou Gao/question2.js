/* the output is 4, because var is function-scoped, not block-scoped. */

// fix before ES6
for (var i = 1; i <= 3; i++) {
  (function(index) {
    document.getElementById("btn" + index)
      .addEventListener("click", function () {
        console.log(index);
      });
  })(i);
}

// fix with ES6
for (let i = 1; i <= 3; i++) {
  document.getElementById("btn" + i)
    .addEventListener("click", function () {
      console.log(i);
    });
}
