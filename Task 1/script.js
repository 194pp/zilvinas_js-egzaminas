/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais, 
konverstuos jį svarus, gramus ir uncijas, ir atvaizduos rezultatus puslapyje.
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: rezultatas turi būti matomas pateikus formą ir rodomas
<div id="output"></div> viduje bei turėti bent minimalų stilių;
------------------------------------------------------------------- */
const inputEnterKilos = document.getElementById("search");
const output = document.getElementById("output");
const outputLb = document.getElementById("output-lb");
const outputG = document.getElementById("output-g");
const outputOz = document.getElementById("output-oz");

function calculateValues() {
  event.preventDefault();
  output.style.display = "flex";
  outputLb.innerText = (+inputEnterKilos.value * 2.2046) + " Lb.";
  outputG.innerText = (+inputEnterKilos.value * 1000) + " g.";
  outputOz.innerText = (+inputEnterKilos.value * 35.274) + " Oz.";
}