function showme() {
  let x = document.getElementById("x");
  let y = document.getElementById("y");
  let result = document.getElementById("result");
  let x1 = +x.value;
  let y1 = +y.value;
  if (x1 == 0 && y1 == 0) {
    result.value = "origin";
  } else if (x1 > 0 && y1 > 0) {
    result.value = "I";
  } else if (x1 < 0 && y1 > 0) {
    result.value = "II";
  } else if (x1 < 0 && y1 < 0) {
    result.value = "III";
  } else if (x1 > 0 && y1 < 0) {
    result.value = "IIII";
  }
}
