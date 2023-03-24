let btn1 = document.getElementById("btnDoWhileDemo1");
//To add event handler - Click event
btn1.addEventListener("click", doWhileDemo1);
function doWhileDemo1() {
  let i = 1;
  do {
    console.log(i);
    i++;
  } while (i <= 5);
}

let btn2 = document.getElementById("btnDoWhileDemo2");
btn2.addEventListener("click", doWhileDemo2);
function doWhileDemo2() {
  let answer = "";
  do {
    answer = prompt("Like to do a party?") ?? "";
    console.log("Answer");
  } while (answer.toLowerCase() != "yes");
  alert("Thanks You dear");
}
