function getday() {
  let number = document.getElementById("number");
  let name = document.getElementById("name");
  // let number1 = +number.value;
  let n = parseInt(number.value);
  // debugger;
  // switch (n) {
  //   case 1:
  //     name.value = "Monday";
  //     console.log("Monday");
  //     break;
  //   case 2:
  //     name.value = "Tuesday";
  //     console.log("Tueday");
  //     break;
  //   case 3:
  //     name.value = "Wednesday";
  //     console.log("Wednesday");
  //     break;
  //   case 4:
  //     name.value = "Thursday";
  //     console.log("Thursday");
  //     break;
  //   case 5:
  //     name.value = "Friday";
  //     console.log("Friday");
  //     break;
  //   case 6:
  //     result.value = "Saturday";
  //     console.log("Saturday");
  //     break;
  //   case 7:
  //     name.value = "Sunday";
  //     console.log("Sunday");
  //     break;
  //   default:
  switch (n) {
    case 1:
      name.value = "January";
      console.log("January");
      break;
    case 2:
      name.value = "February";
      console.log("February");
      break;
    case 3:
      name.value = "March";
      console.log("March");
      break;
    case 4:
      name.value = "April";
      console.log("April");
      break;
    case 5:
      name.value = "May";
      console.log("May");
      break;
    case 6:
      result.value = "June";
      console.log("June");
      break;
    case 7:
      name.value = "July";
      console.log("July");
      break;
    case 8:
      name.value = "August";
      console.log("August");
      break;
    case 9:
      name.value = "September";
      console.log("September");
      break;
    case 10:
      name.value = "October";
      console.log("October");
      break;
    case 11:
      name.value = "November";
      console.log("November");
      break;
    case 12:
      name.value = "December";
      console.log("December");
      break;
    default:
      name.value = "Please enter value between 1 and 12";
    // default:
    //   name.value = "Please enter value between 1 and 7";
  }
  // if (number1 == 0) {
  //   name.value = "sunday";
  // }
  // if (number1 == 1) {
  //   name.value = "Monday";
  // }
  // if (number1 == 2) {
  //   name.value = "Tuesday";
  // }
  // if (number1 == 3) {
  //   name.value = "Wednesday";
  // }
  // if (number1 == 4) {
  //   name.value = "Thursday";
  // }
  // if (number1 == 5) {
  //   name.value = "Friday";
  // }
  // if (number1 == 6) {
  //   name.value = "Saturday";
  // }
  // if (number1 > 6) {
  //   name.value = "Please enter value between 0 to 6";
  // }
}
