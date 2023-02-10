function answer1(){
    let floor = document.getElementById('floor');
    let get = document.getElementById('get');
    let actualValue = floor.value;
     floorValue = Math.floor(actualValue);
     get.value = floorValue;
    console.log(get.value);
}