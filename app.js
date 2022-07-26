// DIGITAL CLOCK JS CODE
let time = document.getElementById("time-container");

setInterval(() => {
  let d = new Date();
  time.innerHTML = d.toLocaleTimeString();
}, 1000);
