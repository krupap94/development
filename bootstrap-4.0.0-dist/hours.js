function ansme1(){
    let sec = document.getElementById("sec");
    let hours = document.getElementById("hours");
    let min = document.getElementById("min");
    let sec1 = document.getElementById("sec1");
    hours.value = Math.trunc(sec.value/3600);
    let remainingseconds = Math.trunc(sec.value%3600);
    // console.log(remainingseconds);
    min.value = Math.trunc(remainingseconds / 60);
    sec1.value = (remainingseconds % 60);
}

function cleame(){
    let sec = document.getElementById("sec");
    let hours = document.getElementById("hours");
    let min = document.getElementById("min");
    let sec1 = document.getElementById("sec1");
    sec.value = "";
    hours.value = "";
    min.value = "";
    sec1.value = "";

}