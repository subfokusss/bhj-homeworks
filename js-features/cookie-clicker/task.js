
const cookie = document.getElementById("cookie");
const counter = document.getElementById("counter");

let clicks = 0;

cookie.addEventListener("click", () => {
  clicks++;

  counter.textContent = clicks;

  if (cookie.classList.contains("small")) {
    cookie.classList.remove("small");
  } else {
    cookie.classList.add("small");
  }
});
