/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Pateikiamas informacijos atvaizdavimas <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Informacija apie user'į (jo kortelė) bei turi turėti bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = 'https://api.github.com/users';
const btnContainer = document.querySelector(".btn-container");
const btn = document.getElementById("btn");
const outputContainer = document.querySelector(".output-container");
const output = document.getElementById("output");

btn.onclick = getUsers;
displayOutput(false);

function displayBtnContainer(isDisplayed) {
  btnContainer.style.display = isDisplayed ? "flex" : "none";
}

function displayOutput(isDisplayed) {
  outputContainer.style.display = isDisplayed ? "flex" : "none";
}

function generateCard(loginData, avatarData) {
  const card = document.createElement("div");
  const login = document.createElement("h2");
  const avatar = document.createElement("img");

  login.innerText = loginData;
  avatar.src = avatarData;

  card.className = "card";
  avatar.className = "avatar";
  card.appendChild(avatar);
  card.appendChild(login);

  output.appendChild(card);
}

async function getUsers() {
  await fetch(ENDPOINT)
      .then(response => response.json()
      .then(data => {
        displayBtnContainer(false);
        displayOutput(true);
        data.forEach(item => {
          generateCard(item.login, item.avatar_url);
        });
        console.log(data);
      }));
}