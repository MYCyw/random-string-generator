const lengthBox = document.getElementById("length");
const lowerAlphaCb = document.getElementById("lower");
const upperAlphaCb = document.getElementById("upper");
const numberCb = document.getElementById("number");
const symbolCb = document.getElementById("symbol");
const symbolList = document.getElementById("symbol-list");
const randStr = document.getElementById("rand-str");

function decreaseLength() {
  if (lengthBox.value > 1) {
    lengthBox.value--;
  }
}
function increaseLength() {
  lengthBox.value++;
  return false;
}

function setLength(btnId) {
  lengthBox.value = document.getElementById(btnId).innerText;
}

function generateStr() {
  const length = lengthBox.value;
  const symbols = symbolList.value;
  const lowerStr = "abcdefghijklmnopqrstuvwxyz";
  const upperStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numStr = "0123456789";
  let stringSrc = "";
  if (lowerAlphaCb.checked) {
    stringSrc += lowerStr;
  }
  if (upperAlphaCb.checked) {
    stringSrc += upperStr;
  }
  if (numberCb.checked) {
    stringSrc += numStr;
  }
  if (symbolCb.checked) {
    stringSrc += symbols;
  }

  const randomArray = new Uint32Array(length);
  const maxNum = 2 ** 32;
  crypto.getRandomValues(randomArray);
  let result = "";
  for (let num of randomArray) {
    const index = Math.floor(num / maxNum * stringSrc.length);
    result += stringSrc.charAt(index);
  }

  randStr.value = result;
}

function copyStr() {
  navigator.clipboard.writeText(randStr.value);
}
generateStr();
