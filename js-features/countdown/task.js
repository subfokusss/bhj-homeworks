const initialSeconds = parseInt(document.getElementById("timer").innerHTML);
let seconds = initialSeconds;
const countdown = () => {
  seconds--;

  document.getElementById("timer").innerHTML = seconds;

  if (seconds === 0) {
    alert("Вы победили в конкурсе!");
  } else {
    setTimeout(countdown, 1000);
  }
};

countdown();