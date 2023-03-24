let btn1 = document.getElementById("charAtexample");
btn1.addEventListener("click", charAtexample);
function charAtexample() {
  let s = "Boston";
  let character = s.charAt(0); //To get a character at a particular position
  console.log(character);
  let len = s.length; //To get number of characters - length of a string
  console.log(len);
}
let btn2 = document.getElementById("charAtexample1");
let a = document.getElementById("a");
btn2.addEventListener("click", charAtExample1);
function charAtExample1() {
  let i;
  let character;
  //   console.log(character);
  let len = a.value.length;
  for (i = 0; i < len; i++) {
    character = a.value.charAt(i);
    console.log(character);
  }
}
let btn3 = document.getElementById("charAtexample2");
let b = document.getElementById("b");
btn3.addEventListener("click", charAtExample2);
function charAtExample2() {
  let i;
  let count = 0;
  let character;
  let len = b.value.length;

  for (i = 0; i < len; i++) {
    character = b.value.charAt(i);
    if (
      character == "a" ||
      character == "e" ||
      character == "i" ||
      character == "o" ||
      character == "u"
    ) {
      count++;
    }
    console.log(character);
  }
  console.log(count);
}
let btn4 = document.getElementById("display");
let value = document.getElementById("value");
let case1 = document.getElementById("case1");
// let result = document.getElementById("result");
let convert = document.getElementById("convert");
btn4.addEventListener("click", display);
function display() {
  let select;
  let i;
  select = case1.value;
  console.log(select);
  if (select == "1") {
    convert.value = value.value.toUpperCase();
  } else if (select == "2") {
    convert.value = value.value.toLowerCase();
  }
}
let btntrim = document.getElementById("btntrim");
btntrim.addEventListener("click", btntrim1);
function btntrim1() {
  let data = "       we will do it    ";
  let ans1 = data.trimStart();
  console.log(ans1);
  console.log(ans1.length);
  let ans2 = data.trimEnd();
  console.log(ans2);
  console.log(ans2.length);
  let ans3 = data.trim();
  console.log(ans3);
  console.log(ans3.length);
}
let display2 = document.getElementById("display2");
let name1 = document.getElementById("name1");
let result = document.getElementById("result");
let start = document.getElementById("start");
let end = document.getElementById("end");
let trim = document.getElementById("trim");
display2.addEventListener("click", display3);
function display3() {
  //let data = "";
  if (start.checked == true) {
    result.value = name1.value.trimStart();
  } else if (end.checked == true) {
    result.value = name1.value.trimEnd();
  } else if (trim.checked == true) {
    result.value = name1.value.trim();
  }
}
