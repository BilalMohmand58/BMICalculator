"use strict";

document.querySelector(".number").textContent = "?";
document.querySelector(".mass").value = "";
document.querySelector(".height").value = "";

document.querySelector(".check").addEventListener("click", function () {
  let mass = Number(document.querySelector(".mass").value);
  let height = Number(document.querySelector(".height").value);
  let BMI = Math.round((mass / (height * height)) * 10) / 10;

  if (!mass || !height) {
    document.querySelector(".number").textContent = "?";
  } else {
    document.querySelector(".number").textContent = BMI;
  }
  if (BMI >= 18.5 && BMI <= 25) {
    document.querySelector(".number").style.border = "solid 8px green";
    document.querySelector("h1").textContent = "Normal";
  } else if (BMI > 25) {
    document.querySelector(".number").style.border = "solid 8px red";
    document.querySelector("h1").textContent = "Over weight";
  } else {
    document.querySelector(".number").style.border = "solid 8px red";
    document.querySelector("h1").textContent = "Under weight";
  }
});

document.querySelector(".again").addEventListener("click", function () {
  document.querySelector(".number").textContent = "?";
  document.querySelector(".mass").value = "";
  document.querySelector(".height").value = "";
  document.querySelector(".number").style.border = "none";
  document.querySelector("h1").textContent = "Calculate BMI";
});
