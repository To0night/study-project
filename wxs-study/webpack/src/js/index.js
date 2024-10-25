import aaa from "./main.js";

if (module.hot) {
  module.hot.accept("./main.js");
}

let throttleTimeout = null;
window.addEventListener("mousemove", () => {
  if (throttleTimeout) return;
  throttleTimeout = setTimeout(() => {
    console.log(1);
    clearTimeout(throttleTimeout);
    throttleTimeout = null;
  }, 2000);
});
