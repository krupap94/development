function clickme1() {
  let browser = document.getElementById("browser");
  let selected = document.getElementById("selected");
  selected.value = browser.value;
}
function clickme2() {
  let browser = document.getElementById("browser");
  let selected = document.getElementById("selected");
  browser.value = selected.value;
}
function clickme3() {
  let browser = document.getElementById("browser");
  let k = browser.length;
  console.log(k);
  let o = browser[0];
  console.log(o);
  console.log(o.value);
  o = browser[1];
  console.log(o.value);
  let i;
  for (i = 0; i < browser.length; i++) {
    o = browser[i];
    console.log(o.value);
  }
}
function clickme3() {
  let soap = document.getElementById("soap");
  //   let a = soap[0];
  //   console.log(a);
  //   console.log(a.value);
  //   console.log(a.selected);
  let a = soap[0];
  //console.log(a);
  let i;
  for (i = 0; i < soap.length; i++) {
    a = soap[i];
    if (a.selected == true) {
      console.log(a.value);
    }
  }
}
function selectall() {
  let soap = document.getElementById("soap");
  let a;
  //   a.selected = true;
  //   a = soap[1];
  //   a.selected = true;
  //   console.log(a);
  let i;
  for (i = 0; i < soap.length; i++) {
    a = soap[i];
    a.selected = true;
  }
}
function removeall() {
  let soap = document.getElementById("soap");
  let a;
  let i;
  for (i = 0; i < soap.length; i++) {
    a = soap[i];
    a.selected = false;
  }
}
function invertall() {
  let soap = document.getElementById("soap");
  let a = soap[0];
  let i;
  for (i = 0; i < soap.length; i++) {
    a = soap[i];
    if (a.selected == true) {
      a.selected = false;
    } else {
      a.selected = true;
    }
  }
}
