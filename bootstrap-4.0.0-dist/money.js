function subme(){
    let value1 = document.getElementById("value1");
    let hundred = document.getElementById("hundred");
    let fifty = document.getElementById("fifty");
    let twenty = document.getElementById("twenty");
    let ten = document.getElementById("ten");
    let five = document.getElementById("five");
    let single = document.getElementById("single");
    hundred.value = Math.trunc(value1.value / 100);
    console.log(hundred.value);
    let remainingbills = Math.trunc(value1.value % 100);
    console.log(remainingbills);
   
    fifty.value = Math.trunc(remainingbills / 50);
    let remainingbills1 = Math.trunc(remainingbills % 50);
    console.log(remainingbills1);
    
    twenty.value = Math.trunc(remainingbills1 / 20);
    let remainingbills2 = Math.trunc(remainingbills1 % 20)
    console.log(remainingbills2);
    
    ten.value = Math.trunc(remainingbills2 / 10);
    let remainingbills3 = Math.trunc(remainingbills2 % 10);
    console.log(remainingbills3);
    
    five.value = Math.trunc(remainingbills3 / 5);
    let remainingbills4 = Math.trunc(remainingbills3 % 5);
    console.log(remainingbills4);

    single.value = Math.trunc(remainingbills4 / 1);





}