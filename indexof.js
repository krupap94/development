let btn = document.getElementById("btnindexof");
btn.addEventListener("click", example1);
function example1() {
  let data = "we will do it We will do it";
  let n = data.indexOf("did");
  console.log(n);
}
let txtmain = document.getElementById("txtmain");
let txtsearch = document.getElementById("txtsearch");
let btnresult = document.getElementById("btnresult");
let txtanswer = document.getElementById("txtanswer");
btnresult.addEventListener("click", btnresult1);
function btnresult1() {
  let string = txtmain.value;
  let search = txtsearch.value;
  let n = string.indexOf(search);
  txtanswer.value = n;
  if (n == -1) {
    txtanswer.value = "not found";
  } else {
    txtanswer.value = "found at " + n;
  }
  console.log(n);
}
