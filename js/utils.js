function solusion01() {
  let name = null;
  while (name === null) {
    alert("입력해주세요");
    name = prompt("이름 입력");
  }
  console.log(name);
  alert(name + "님 안녕하세요!");
}

// return X, parameter X
function hi() {
  // alert("Hi!!!!!!");
  console.log("Hi!!!!!!!");
}

function sum(x, y) {
  let result = x + y;
  console.log(result);
}

function total(x, y) {
  return x + y;
}
