function total(){
    let principal = document.getElementById("principal");
    let rate = document.getElementById("rate");
    let years = document.getElementById("years");
    let amount = document.getElementById("amount");
    let interest = document.getElementById("interest");
    amount.value = principal.value * rate.value * years.value / 100;
    interest.value = +principal.value + +interest.value;
    }
    
    
    function clr(){
      let principal = document.getElementById("principal");
      let rate = document.getElementById("rate");
      let years = document.getElementById("years");
      let amount = document.getElementById("amount");
      let interest = document.getElementById("interest");
      principal.value = "";
      rate.value = "";
      years.value = "";
      amount.value = "";
      interest.value = "";
    }