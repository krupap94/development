let arrowf = document.getElementById("arrowf");
arrowf.onclick = () => {
  console.log("Hello From Arrow Function");
};
let arrow = document.getElementById("arrow");
//Example of Function expressions
const area = function (length, width) {
  return length * width;
};
arrow.onclick = () => {
  let answer = area(10, 5);
  console.log(answer);
};
let timeout = document.getElementById("timeout");
//exapmle of set timeout
timeout.onclick = () => {
  setTimeout(() => {
    console.log("Hello after 3sec");
  }, 3000);
};
let interval = document.getElementById("interval");
let intervalid;
//example of set interval
interval.onclick = () => {
  intervalid = setInterval(() => {
    console.log("Hello after 5sec");
  }, 5000);
};
let stop = document.getElementById("stop");
//example of stop interval
stop.onclick = () => {
  clearInterval(intervalid);
};
