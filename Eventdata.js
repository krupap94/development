function clickme(event) {
  console.log("Hello");
  console.log(event.srcElement.id);
  event.srcElement.value = "...Click";
}
function clickme1(event) {
  //event.srcElement.value = "x";
  if (event.srcElement.value == "x") {
    event.srcElement.value = "0";
  } else {
    event.srcElement.value = "x";
  }
}
