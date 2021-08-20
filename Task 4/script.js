/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, kuris vartotojui atėjus į tinklapį atvaizduos visus 
automobilių gamintojus ir pagamintus modelius iš cars.json failo.
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojo pavadinimas ir pagaminti modeliai.

Pastaba: Informacija apie gamintoją ir pagamintus modelius turi būti 
atvaizduota kortelėje ir turėti bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = 'cars.json';
const output = document.getElementById("output");

getCarsData();

function generateCard(data) {
  const card = document.createElement("div");
  const brand = document.createElement("h2");
  const models = document.createElement("ul");

  card.className = "card";
  models.className = "models";

  brand.innerText = data.brand;

  card.appendChild(brand);
  card.appendChild(models);

  data.models.forEach(item => {
    const model = document.createElement("li");
    model.className = "model";
    model.innerText = item;
    models.appendChild(model);
  })

  output.appendChild(card);
}

async function getCarsData() {
  await fetch(ENDPOINT).then(response => response.json())
    .then(data => {
      data.forEach(item => {
        generateCard(item);
      })
    });
}