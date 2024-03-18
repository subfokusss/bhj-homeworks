const cookie = document.getElementById("cookie");
const clickerCounter = document.getElementById("clicker__counter");

let clicks = 0;

cookie.addEventListener("click", () => {
  clicks++;
  
  clickerCounter.textContent = clicks;
  
  cookie.style.width = `${100 + clicks}px`;
});