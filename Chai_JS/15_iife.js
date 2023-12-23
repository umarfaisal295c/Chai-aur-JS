// Immediatiely Invoked Funtion Exprssion (IIFE).
// 1. create simple function .
function chai() {
  console.log("DB Connected");
}
chai();
// IIFE.
// named IIFE
(function aur() {
  // first paranthis id function definition.
  console.log("DB Connected named IIFE");
})(); // semicolon is lazmi.
// 2 IIFE.
// unnamed IIFE
(() => {
  console.log("DB Connected unnamed IIFE");
})();
// 3 IIFE.
// parameter IIFE
((name) => {
  console.log(`DB Connected parameter IIFE ${name}`);
})("Umar");
