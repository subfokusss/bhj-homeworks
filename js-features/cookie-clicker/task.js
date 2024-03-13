const cookie = document.getElementById("cookie");

let clicks = 0;

cookie.addEventListener("click", () => {
  clicks++;

  cookie.style.width = `${100 + clicks}px`;
  
  document.body.insertAdjacentHTML('beforeend', `<p>Количество кликов: ${clicks}</p>`);
});
