function ansMe(){
        let round1 = document.getElementById("round1");
        let ans3 = document.getElementById("ans3");
        let roundValue = Math.round(round1.value);
        ans3.value = roundValue;
        console.log(roundValue);
      }
      
      function answ(){
        let truncate1 = document.getElementById("truncate1");
        let ans4 = document.getElementById("ans4");
        let truncatedValue = Math.trunc(truncate1.value);
        ans4.value = truncatedValue;
        console.log(truncatedValue);
      
      }
      
      function showUs(){
      let base =  document.getElementById("base");
      let exponent =  document.getElementById("exponent");
      let ans5 =  document.getElementById("ans5");
      let powerValue = Math.pow(base.value,exponent.value);
      ans5.value = powerValue;
      console.log(powerValue);
      }
      
      function show(){
        let square1 = document.getElementById("square1");
        let ans6 = document.getElementById("ans6");
        let squareRootValue = Math.sqrt(square1.value);
        ans6.value = squareRootValue;
        console.log(squareRootValue);
      }
      
      function sign(){
        let sign1 = document.getElementById("sign1");
        let ans7 = document.getElementById("ans7");
        let signValue = Math.sign(sign1.value);
        ans7.value = signValue;
        console.log(signValue);
      }
      
      function answer(){
        let answer1 = document.getElementById("answer1");
        let answer2 = document.getElementById("answer2");
        let ans8 = document.getElementById("ans8");
        // let answer = answer1.value % answer2.value;
        let answer = answer1.value / answer2.value;
        // answer = Math.floor(answer1.value/answer2.value)
        // answer = Math.ceil(answer1.value/answer2.value)
        
        ans8.value = answer;
        console.log(answer);
      }
    
