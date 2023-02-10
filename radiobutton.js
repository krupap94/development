function displayresult() {
  let python = document.getElementById("python");
  let javascript = document.getElementById("javascript");
  let result = document.getElementById("result");
  if (python.checked == true) {
    result.value = "python selected";
  } else {
    result.value = "Javascript selected";
  }
}
function getanswer() {
  let math = document.getElementById("math");
  let science = document.getElementById("science");
  let english = document.getElementById("english");
  let result1 = document.getElementById("result1");
  let m = +math.value;
  let s = +science.value;
  let e = +english.value;

  // // if (m >=35 && s >=35){
  //     result1.value="pass";
  // }
  // // if (s >=35){
  // //     result1.value="pass";
  //  else{
  //         result1.value="fail";
  //     }

  // // if (s >=35){
  // //     result1.value="pass";
  // // }
  // //     else{
  // //         result1.value="fail";
  // //     }
  if (m >= 35) {
    if (s >= 35) {
      if (e >= 35) {
        result1.value = "Pass";
      } else {
        result1.value = "Fail"; //english
      }
    } else {
      result1.value = "Fail"; //science
    }
  } else {
    result1.value = "Fail"; //math
  }
}
