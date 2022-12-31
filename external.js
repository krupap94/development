console.log('Hello World')
function changeName(){
    let fname = document.getElementById('fname');
    console.log(fname.value);
    let x = fname.value;
    // console.log(x);
    fname.value="Javascript";
}
function changeName() {
    let lname = document.getElementById('lname');
    console.log(lname.value);
    let x = lname.value;
    lname.value = "Angular";
}