function object1() {
  let id = 10;
  let name = "rose";
  let rate = 10;
  console.log(id);
  console.log(name);
  console.log(rate);
}
function object2() {
  let product = {
    id: 101,
    name: "dettol",
    rate: 20,
  };
  console.log(product);
  console.log(product.id);
  console.log(product.name);
  console.log(product.rate);
  console.log(product["name"]);
}
function key1() {
  let employee = {
    id: 5,
    Ename: "Krupa",
    Sal: 3000,
  };
  console.log(employee);
  console.log(employee.id);
  console.log(employee.Ename);
  console.log(employee.Sal);
  console.log(Object.keys(employee));
  console.log(Object.values(employee));
  for (let data in employee) {
    //for in example
    console.log(data);
    console.log(employee[data]);
    let x = `key = ${data}";
    value = ${employee[data]}`; //Template string example ->${data}
    console.log(x);
    let y = JSON.stringify(employee); //stringfy mathod
    console.log(y);
    let z = JSON.parse(y); //string to object
    console.log(z);
  }
}
