function clickme() {
  alert("Hello World");
}
function clickme1() {
  prompt("Hello World");
}
function clickme2() {
  confirm("Hello World");
}
function clickme3() {
  let x = prompt("Enter your First Name");
  console.log(x);
  let y = prompt("Enter your Last Name");
  console.log(y);
  x.value, (y.value = alert(x + " " + y));
  console.log(x, y);
}
function clickhere() {
  let total = document.getElementById("total");
  let i = 0;
  let a;
  let x = 0;
  let sum = "";
  for (i = 1; i <= 5; i++) {
    a = prompt("Enter your value");
    x = x + +a;
  }
  total.value = x;
  //data = +x + i;
  //   let y = prompt();
  //   let z = prompt();
  //   let a = prompt();
  //   let b = prompt();
  //total.value = +x + +y + +z + +a + +b;
  //total.value = data.value;
}
