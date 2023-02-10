function ansme(){
    let inches = document.getElementById("inches");
    let foot = document.getElementById("foot");
    let result = document.getElementById("ans1");
    foot.value = Math.trunc(inches.value/12);
    result.value = inches.value % 12;
}
function clearme(){
    let inches = document.getElementById("inches");
    let foot = document.getElementById("foot");
    let result = document.getElementById("ans1");
    inches.value = "";
    foot.value = "";
    result.value = "";

}
function ansme1(){
    let sec = document.getElementById("sec");
    let min = document.getElementById("min");
    let seconds = document.getElementById("seconds");
    min.value = Math.trunc(sec.value/60);
    // result.value = minutes.value % 60;
    seconds.value = sec.value % 60;


}
    function clearme1(){
    let min = document.getElementById("min");
    let seconds = document.getElementById("seconds");
    let sec = document.getElementById("sec");
    min.value = "";
    seconds.value = "";
    sec.value = "";

    }

