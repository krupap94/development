function clickme() {
  let btn = document.createElement("button");
  let div = document.getElementById("div");
  btn.innerText = "Say Hello";
  btn.setAttribute("class", "btn btn-primary");
  div.appendChild(btn);
}
function clickme1() {
  let i = 0;
  for (i = 0; i <= 5; i++) {
    let p = document.createElement("p");
    let div1 = document.getElementById("div1");
    p.innerHTML = "My name is <b>Krupa</b> Patel";
    div1.appendChild(p);
  }
  console.log(div.children.length);
}
function clickme2() {
  let div1 = document.getElementById("div1");

  if (div1.children.length > 0) {
    div1.removeChild(div1.children[0]);
  } else {
    console.log("no elements");
  }
}
function clickme3() {
  let i = 0;
  let div1 = document.getElementById("div1");
  for (i = 0; i < div1.children.length; i++) {
    let p = div1.children[i];
    p.innerText = i;
    console.log(p.parentNode.id);
  }
}
