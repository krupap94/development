function getanswer(){
    let amount = document.getElementById("amount")
    let dollar = document.getElementById("dollar");
    let cents = document.getElementById("cents")
    // let result = document.getElementById("result");
    dollar.value = Math.trunc(amount.value);
    let remaining = (amount.value % dollar.value);
    console.log(remaining);
    cents.value = Math.trunc(remaining * 100);
}