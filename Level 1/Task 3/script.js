var emoji = document.querySelector(".icon");
const unit1 = document.getElementById("temp-unit1");
const unit2 = document.getElementById("temp-unit2");
const input = document.getElementById("temperature");
const display = document.querySelector(".display");
const errorMsg = document.getElementById("error");

document.getElementById("convert-btn").addEventListener("click", renderTemp);

function renderTemp() {
  if (
    unit1.value.length > 0 &&
    unit2.value.length > 0 &&
    input.value.length > 0
  ) {
    if (unit1.value === unit2.value) {
      errorMsg.textContent = "Invalid Conversion!!!";
      errorMsg.style.display = "block";
      display.textContent = "---";
    } else {
      errorMsg.style.display = "none";
      convertTemp();
    }
  }
}

function convertTemp() {
  let result, unit;
  if (unit1.value === "celsius") {
    if (unit2.value === "fahren") {
      result = Number(input.value) * (9 / 5) + 32;
      unit = "&deg;F";
    } else {
      //kelvin
      result = Number(input.value) + 273.15;
      unit = "K";
    }
  } else if (unit1.value === "fahren") {
    if (unit2.value === "celsius") {
      result = (Number(input.value) - 32) * (5 / 9);
      unit = "&deg;C";
    } else {
      // kelvin
      result = (Number(input.value) - 32) * (5 / 9) + 273.15;
      unit = "K";
    }
  } else {
    //kelvin
    if (unit2.value === "celsius") {
      result = Number(input.value) - 273.15;
      unit = "&deg;C";
    } else {
      // fahren
      result = (Number(input.value) - 273.15) * (9 / 5) + 32;
      unit = "&deg;F";
    }
  }
  display.innerHTML = `${result.toFixed(1)} <span class="unit">${unit}</span>`;
}
