let btnEx1 = document.getElementById("btnEx1");
let btnEx2 = document.getElementById("btnEx2");
let btnEx3 = document.getElementById("btnEx3");
let btnEx4 = document.getElementById("btnEx4");
let btnEx5 = document.getElementById("btnEx5");
let btnEx6 = document.getElementById("btnEx6");
let txt1 = document.getElementById("text1");
let btnEx7 = document.getElementById("btnEx7");
let btnEx8 = document.getElementById("btnEx8");
let btnEx9 = document.getElementById("btnEx9");
let btnEx10 = document.getElementById("btnEx10");
let answer = document.getElementById("a");
let btnEx11 = document.getElementById("btnEx11");
let txt2 = document.getElementById("text2");
let value = document.getElementById("value");

btnEx1.addEventListener("click", ex1);
function ex1() {
  sayHello();
}
function sayHello() {
  console.log("hello");
}
// function without argument
// to print hello into console window
btnEx2.addEventListener("click", ex2);
function ex2() {
  sayHello2("Kelly");
  //Math.pow();
  let x = "Durgesh";
  sayHello2(x);
  sayHello2(txt1.value);
}
function sayHello2(firstname) {
  console.log("Hello," + firstname);
}
btnEx7.addEventListener("click", ex7);
function displayfullname(firstname, middlename, lastname) {
  console.log(firstname + " " + middlename + " " + lastname);
}
function ex7() {
  displayfullname("Krupa", "D", "Patel");
}
btnEx8.addEventListener("click", ex8);
function ex8() {
  add(5, 10);
  let x = txt1.value;
  let y = txt2.value;
  add(x, y);
}
function add(value1, value2) {
  console.log(+value1 + +value2);
}
btnEx9.addEventListener("click", ex9);
function ex9() {
  let x = Math.ceil(3.4);
  console.log(x);
}
btnEx10.addEventListener("click", ex10);
function ex10() {
  let x = Area(5, 10);
  let y = l.value;
  let z = w.value;
  let k = Area(y, z);
  console.log(x);
  a.value = k;
}
function Area(length, width) {
  let area = length * width;
  return area;
}
btnEx11.addEventListener("click", ex11);
function ex11() {
  let x = vowel("i");
  console.log(x);
  let y = vowel("b");
  console.log(y);
}
function vowel() {
  let a;
  if (
    (value == "a") |
    (value == "e") |
    (value == "i") |
    (value == "o") |
    (value == "u")
  ) {
    a = "It is vowel";
  } else {
    ("It is not a vowel");
  }
}
