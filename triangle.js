function clickme(){
    let sum1 = document.getElementById("sum1");
    let sum2 = document.getElementById("sum2");
    let sum3 = document.getElementById("sum3");
    let answer = document.getElementById("answer");
    let anglev = +sum1.value + +sum2.value + +sum3.value;
    if (anglev ==180){
        answer.value= "yes";
        console.log("yes");
    }
    else {
        answer.value="no";
        console.log("no");
    }

}
