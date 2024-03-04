let btn = document.querySelector(".btn");

function isValidBinary(userInput) {
  for (var i of userInput) {
    if (i !== "0" && i !== "1") return false;
  }
  return true;
}

function binaryToDecimal() {
  let userInput = document.querySelector("#binary").value;
  let ans = isValidBinary(userInput);
  if (ans == false) {
    alert("Enter a valid Binary Number 0 / 1...");
  } else {
    let binary = parseInt(userInput, 2);
    document.querySelector(".result").innerHTML = "Decimal Number : " + binary;
  }
}

window.onload = function () {
  var form = document.querySelector(".container");
  form.onsubmit = function () {
    return false;
  };
};

btn.addEventListener("click", binaryToDecimal);
