function answerme() {
  let i = 1;
  while (i <= 5) {
    console.log(i);
    i++;
  }
}
function answerme3() {
  let answer = "";
  answer = prompt("Like to give a party?") ?? "";

  while (answer.toLowerCase() != "yes") {
    answer = prompt("Like to give a party?") ?? "";
  }
  alert("Thanks dear");
}
function answerme4() {
  let num = 783;
  let rem,
    cnt = 0;
  while (num > 0) {
    rem = num % 10;
    num = Math.floor(num / 10);
    console.log(rem);
    console.log(num);
    cnt++;
  }
  console.log(cnt);
}
function answerme2() {
  let cnt = 0;
  let answer = "";
  let sum = 0;
  while (cnt < 5) {
    answer = +prompt("Enter positive value") ?? "";
    if (answer > 0) {
      cnt++;
      sum = sum + answer;
    }
  }
  console.log(sum);
}
function answerme6() {
  let value1 = +document.getElementById("value1").value;
  let result1 = document.getElementById("result1");
  let rem,
    sum = 0;
  while (value1 > 0) {
    rem = value1 % 10;
    value1 = Math.floor(value1 / 10);
    sum = sum + rem;
  }
  result1.value = sum;
  console.log(result1.value);
}
function summe1() {
  let value = +document.getElementById("value2").value; //783
  let even = document.getElementById("even");
  let odd = document.getElementById("odd");
  let zero = document.getElementById("zero");
  let rem = 0;
  let z = 0;
  let e = 0;
  let o = 0;
  while (value > 0) {
    rem = value % 10; //3
    value = Math.floor(value / 10); //78
    if (rem == 0) {
      z++;
    } else if (rem % 2 == 0) {
      e++;
    } else {
      o++;
    }
  }
  even.value = e;
  odd.value = o;
  zero.value = z;
}
function summe2() {
  let value = +document.getElementById("value3").value;
  let answer = document.getElementById("answer1");
  let rem = 0;
  let x = 0;
  while (value > 0) {
    rem = value % 10;
    x = x * 10 + rem;
    value = Math.floor(value / 10);
    console.log(x);
  }
  answer.value = x;
}
