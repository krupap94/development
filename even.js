function answerme() {
  let a = document.getElementById("a");
  let b = document.getElementById("b");
  let c = document.getElementById("c");
  let i, x;
  let count = 0;
  let odd = 0;
  let zero = 0;
  for (i = 1; i <= 5; i++) {
    x = prompt("Enter your value");
    if (x == 0) {
      zero++;
    } else if (x % 2 == 0) {
      count++;
    } else {
      odd++;
    }
  }
  a.value = count;
  b.value = odd;
  c.value = zero;
}
