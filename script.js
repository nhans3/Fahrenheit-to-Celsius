// Variables

// let convertC = document.getElementById("convertC-btn");
// let convertF = document.getElementById("convertF-btn");

let convert = document.getElementById("convert-btn");
let fahrenButton = document.getElementById("fahrenheit-btn");
let celsiusButton = document.getElementById("celsius-btn");

let fahrenheitIn = document.getElementById("fahrenheit-in");
let fahrenheitOut = document.getElementById("fahrenheit-output");

let formulaBox = document.getElementById("box");
let temp1 = document.getElementById("temp1");
let temp2 = document.getElementById("temp2");
let link = document.getElementById("link");
let pic = document.getElementById("pic-container");

let chooseFormula = "FtoC";

// Event Listensers

// convertC.addEventListener("click", convertFahren);
// convertF.addEventListener("click", convertCelsius);
convert.addEventListener("click", convertAn);
fahrenButton.addEventListener("click", celsiusConvert);
celsiusButton.addEventListener("click", fahrenConvert);

// IF ELSE STATEMENT

let word = temp1;

function convertAn() {
  if (chooseFormula == "FtoC") {
    // Code the Fahr to Cels
    convertFahren();
  } else if (chooseFormula == "CtoF") {
    convertCelsius();
  }
}

// Function

function celsiusConvert() {
  formulaBox.innerHTML = "&#176;C = (&deg;F - 32) x 5 / 9";
  temp1.innerHTML = "Fahrenheit";
  temp2.innerHTML = "Celsius";
  chooseFormula = "FtoC";
}

function fahrenConvert() {
  formulaBox.innerHTML = "&#176;F = (&deg;C x 9 / 5) + 32";
  temp1.innerHTML = "Celsius";
  temp2.innerHTML = "Fahrenheit";
  chooseFormula = "CtoF";
}

function convertFahren() {
  // INPUT
  let f = +fahrenheitIn.value;

  //   PROCESSING
  let answer = ((f - 32) * 5) / 9;
  answer = Math.round(answer);

  //   OUTPUT
  fahrenheitOut.innerHTML = answer;
  fahrenheitIn.value = " ";
  convert.style.backgroundColor = "#26d978";
  link.href = "https://www.google.com/";
  pic.innerHTML = "<img src='img/thermometer.png' >";
}

function convertCelsius() {
  // INPUT
  let c = +fahrenheitIn.value;

  //   PROCESSING
  let answer = (c * 9) / 5 + 32;
  answer = Math.round(answer);

  //   OUTPUT
  fahrenheitOut.innerHTML = answer;
  fahrenheitIn.value = " ";
  convert.style.backgroundColor = "#26d978";
  link.href = "https://www.google.com/";
  pic.innerHTML = "<img src='img/thermometer.png' >";
}

// let = "Celsius";

// if (word == "Celsius") {
//   // run C to F function
// } else if (word == "Fahrenheit") {
//   // run F to C function
// }
