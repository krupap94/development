function getans() {
  let value1 = document.getElementById("value1");
  // let result2 = documnet.getElementById("result2");
  let v = +value1.value;
  debugger;
  if (v >= 0) {
    if (v == 0) {
      result2.value = "Zero";
    } else {
      result2.value = "Positive";
    }
  } else {
    result2.value = "Negative";
  }
}
