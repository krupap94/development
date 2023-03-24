let products = ["Dettol", "Cinthol", "Hamam", "Dove"];
function array1() {
  //   let math = 50;
  //   let science = 50;
  //   let history = 50;
  //   let english = 50;
  //   let geography = 50;
  //   console.log(math);
  //   console.log(science);
  //   console.log(history);
  //   console.log(english);
  //   console.log(geography);
  let marks = [50, 60, 70, 55, 45];
  console.log(marks[0]);
  console.log(marks[1]);
  console.log(marks.length);
  let i;
  for (i = 0; i < marks.length; i++) {
    console.log(marks[i]);
  }
}
function array2() {
  let products = ["Dettol", "Cinthol", "Hamam", "Dove"];
  for (const data of products) {
    alert(data);
  }
}
function array3() {
  console.log(products.length);
  products.push("New Product 1");
  console.log(products.length);
  console.log(products);
}
function array4() {
  products.pop();
  console.log(products.length);
  console.log(products);
}
function array5() {
  marks = [10, 20, 30, 40];
  let sum = 0;
  for (i = 0; i < marks.length; i++) {
    //sum += marks[i];
    sum = sum + marks[i];
  }
  console.log(sum);
}
// let start1 = document.getElementById('start1');
// let stop = document.getElementById('stop');
// //start1.onclick() = () =>{
//     console.log('hello');
//     setTimeout(
//         () => {
//             red.src = "Yellow.PNG";
// }, 3000
//     );
//     setTimeout(
//         () => {
//             red.src = "Green.PNG";
//         },5000
//     );
// }
function array6() {
  let products = ["Dettol", "Cinthol", "Hamam", "Dove"];
  let searchData = prompt("Enter a value to search");
  let position = products.indexOf(searchData);
  console.log(position);
  if (position >= 0) alert("Found at position" + " " + position);
  else alert("Not found");
}
function array7() {
  let x = 40;
  if (x > 0) console.log("x is positive");
  console.log("Thanks");
}
function remove() {
  products.shift();
  console.log(products.length);
  console.log(products);
}
function sort1() {
  let num = [1, 50, 8, 7, 25, -10];
  num.sort();
  num.sort((a, b) => a - b);
  console.log(num);
}
// compare function compares a&b returns ab

function reverse() {
  products.reverse();
  console.log(products);
}
function filter() {
  let answer = products.filter(filtercriteria);
  //let answer = products.filter((x) => x.length == 6);
  //products.filter();
  console.log(answer);
}
function filtercriteria(x) {
  //console.log(x);
  //   if (x.length == 6) {
  //     return true;
  //   }
  return x.length == 6;
}
function integer() {
  let datavalues = [10, 3, 25, 40, 2];
  let num = datavalues.filter((y) => y % 2 == 0);
  //datavalues.filter();
  console.log(datavalues);
  console.log(num);
}
function mapbtn() {
  let x = [2, 3, 4, 5, 6, 7, 8];
  let answer = x.map((a) => a * 2);
  console.log(answer);
}
function mapbtn1() {
  let answer = products.map((x) => x.length);
  console.log(answer);
}
function mapbtn2() {
  let products = ["Dettol", "Cinthol", "Hamam", "Dove"];
  let p = products;
  console.log(p);
  p.pop();
  console.log(p);
  console.log(products);
}
function arrayex2() {
  let products = ["Dettol", "Cinthol", "Hamam", "Dove"];
  let answer = products.splice(2, 2, "santoor", "aveeno");
  console.log(answer);
  console.log(products);
}
function arrayex1() {
  let x = 75;
  const y = 80;
  console.log(x);
  console.log(y);

  x = 100;
  console.log(x);

  y = 200;
  console.log(y);
}
