function subme1(){
    let value1 = document.getElementById("value1");
    let value2 = document.getElementById("value2");
    let max = document.getElementById("max");

    
if (+value1.value > +value2.value){
    max.value = value1.value;
    console.log(value1.value);

}
else {
    max.value = value2.value;
}
}
function getans(){
    let enterv = document.getElementById("enterv");
    let absolutev = document.getElementById("absolutev");
    //absolutev.value= Math.abs(enterv.value);
    let v1 = enterv.value;
    if (enterv.v<0){
        absolutev= v1*-1;
}
else {
    absolutev.value =v1*-1;
}
}
