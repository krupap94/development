function clickme1() {
  let value1 = document.getElementById("value1");
  let value2 = document.getElementById("value2");
  let answer = document.getElementById("answer");
  answer.value = +value1.value + +value2.value;
}
function clickme2() {
  let value1 = document.getElementById("value1");
  let value2 = document.getElementById("value2");
  let answer = document.getElementById("answer");
  answer.value = value1.value - value2.value;
}
function clickme3() {
  let value1 = document.getElementById("value1");
  let value2 = document.getElementById("value2");
  let answer = document.getElementById("answer");
  answer.value = value1.value * value2.value;
}
function clickme4() {
  let value1 = document.getElementById("value1");
  let value2 = document.getElementById("value2");
  let answer = document.getElementById("answer");
  answer.value = value1.value / value2.value;
}
function clickme5() {
  let value1 = document.getElementById("value1");
  let value2 = document.getElementById("value2");
  let answer = document.getElementById("answer");
  answer.value = value1.value % value2.value;
}
function clickme6() {
  let value1 = document.getElementById("value1");
  let value2 = document.getElementById("value2");
  let answer = document.getElementById("answer");
  answer.value = Math.pow(value1.value, value2.value);
}
