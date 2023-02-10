function clickme() {
  //   console.log("Hello");
  //   console.log("Hello1");
  //   console.log("Hello2");
  //   console.log("Hello3");
  //   console.log("Hello4");
  let loop = document.getElementById("loop");
  //   loop.value = "Hello \nWorld";
  let i;
  for (i = 1; i <= 10; i++) {
    loop.value = loop.value + i + "\n";
  }
}
function clickhere() {
  //   let loop1 = document.getElementById("loop1");
  //   let loop2 = document.getElementById("loop2");
  //   let i;
  //   let sum = 0;
  //   for (i = 1; i <= 5; i++) {
  //     loop1.value = loop1.value + i + "\n";
  //     sum = sum + i;
  //     console.log("i is " + i);
  //   }
  //   loop2.value = sum;
  //   let count = 0;
  //   for (i = 1; i <= 20; i++) {
  //     if (i % 3 == 0) {
  //       count++;
  //     }
  //   }
  //   console.log(count);
  //   let n = 5;
  //   let data = "";
  //   for (i = 1; i <= 5; i++) {
  //     data = n + " * " + i + " = " + n * i;
  //     console.log(data);
  //   }
}
function clickit() {
  let user = document.getElementById("user");
  let loop3 = document.getElementById("loop3");
  for (i = 1; i <= 10; i++) {
    // data = n + " * " + i + " = " + n * i;
    //loop3.value = user.value + " * " + i + "= " + user.value * i + "\n";
    let f = user.value + "*" + i + "=" + user.value * i;
    loop3.value += f + "\n";
    console.log(f);
  }
}
