function displayresult(){
    let marks = document.getElementById("marks");
    let answer = document.getElementById("answer")
    let m = +marks.value;
    //debugger;
    if (m >=40){
        answer.value="pass";
        console.log("pass");
    }
    else {
        answer.value="fail";
        console.log("fail");
    }

console.log("Thank You")
}