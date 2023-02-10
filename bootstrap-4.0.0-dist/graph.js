function clickme(){
let x1= document.getElementById("x1");
let x2= document.getElementById("x2");
let y1= document.getElementById("y1");
let y2= document.getElementById("y2");
let distance = document.getElementById("distance");
let power1 = Math.pow((x2.value - x1.value),2);
console.log(power1);
let power2 = Math.pow((y2.value - y1.value),2);
console.log(power2);
 distance.value = Math.sqrt(+power1 + +power2);
 console.log(distance.value);
}
function getans(){
    let a1= document.getElementById("a1");
    let b1= document.getElementById("b1");
    let c1= document.getElementById("c1"); 
    let area = document.getElementById("area");
    let sp = (+a1.value + +b1.value + +c1.value) / 2;
    console.log(sp);
    area.value = Math.sqrt(sp * (sp - a1.value) *(sp - b1.value) * (sp - c1.value));
    console.log(area.value);
}