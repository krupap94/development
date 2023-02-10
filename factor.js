function answerme() {
  let num = +document.getElementById("num").value;
  let num1 = document.getElementById("num1");
  let num2 = document.getElementById("num2");
  let count = 0;
  for (i = 1; i <= num; i++) {
    if (num % i == 0) {
      count++;
      num2.value += i + "\n";
      // num1.value = count;
      console.log(i);
    }
  }
  num1.value = count;
}
function presshere() {
  let number = document.getElementById("number");
  let answer = document.getElementById("answer");
  let count = 0
  for (i = 1; i <= num; i++) {
    if (number % i == 0) {
        count++;
        answer.value = 
    }
  }
}
