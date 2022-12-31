function calc(){
    let a = document.getElementById('length');
    let b = document.getElementById('width');
    let area= document.getElementById("area");
    let perimeter = document.getElementById('perimeter')
    area.value = a.value * b.value;
    perimeter.value = 2*(+area.value + +width.value);

}
function clr(){
    let a = document.getElementById('length');
    let b = document.getElementById('width');
    let area= document.getElementById("area");
    let perimeter = document.getElementById('perimeter')
    a.value = "";
    b.value = "";
    area.value = "";
    perimeter.value = "";
    
}