//Timer
let timer;
let seconds = 0;
let min = 0;
let hour = 0;

let start_btn = document.getElementById("start");
let stop_btn = document.getElementById("stop");
let reset_btn = document.getElementById("reset");
let timer_element = document.getElementById("timer");

start_btn.addEventListener("click", () => {
  timer = setInterval(TimerHandler, 1000);
  reset_btn.disable = true;
});

stop_btn.addEventListener("click", () => {
  timer = clearInterval(timer);
  reset_btn.disable = false;
});

reset_btn.addEventListener("click", () => {
  timer = clearInterval(timer);
  reset_btn.disable = true;
  seconds = 0;
  min = 0;
  hour = 0;
  timer_element.innerHTML = "00:00:00";
});

function TimerHandler() {
  seconds++;
  if (seconds == 60) {
    seconds = 0;
    min = min + 1;
  }
  if (min == 60) {
    min = 0;
    hour = hour + 1;
  }
  DisplayTime();
}

function DisplayTime() {
  timer_element.innerHTML = hour + ": " + min + ": " + seconds;
}
