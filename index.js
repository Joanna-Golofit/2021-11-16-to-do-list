"use strict";
const dqs = (selector) => document.querySelector(selector);
const button = dqs("#button");
const ul = dqs("ul");
const input = dqs("#task-title");

const addItem = (e) => {
  e.preventDefault();
  const text = input.value;
  if (!text || text === " ") {
    alert("wpisz cos");
    return;
  };
  
  const html = `<li>${text} 
                  <button class="btn btn-sm btn-warning">x</button>
                </li>`;
  ul.insertAdjacentHTML("beforeend", html);
  
  input.value = "";
};

const removeItem = (e) => {
  if (e.target.nodeName !== "BUTTON") return;
  e.target.closest("li").remove();
};
const crossOutItem = (e) => {
  console.log(e.target.nodeName);
  if (e.target.nodeName !== "LI") return;
  e.target.classList.toggle("done");
}

button.addEventListener("click", addItem);
ul.addEventListener("click", removeItem);
ul.addEventListener("click", crossOutItem);




//========================pierwsza wersja = dzialajaca
// const dqs = (selector) => document.querySelector(selector);
// const button = dqs("#button");
// const ul = dqs("ul");
// const input = dqs("#task-title");

// const addItem = (e) => {
//   e.preventDefault();
//   const text = input.value;
//   if (!text || text === " ") {
//     alert("wpisz cos");
//     return;
//   };
//   const newItem = document.createElement("li");
//   const newBtnClose = document.createElement("button");

//   newItem.innerText = text;
//   ul.appendChild(newItem);
//   newBtnClose.classList.add("btn", "btn-sm", "btn-warning");
//   newBtnClose.innerText = "x";
//   console.log(newBtnClose);
//   newItem.append(newBtnClose);
//   // console.log(ul);
//   // console.log(text);
//   // console.log(newItem);
//   input.value = "";
// };

// const removeItem = (e) => {
//   if (e.target.nodeName !== "BUTTON") return;
//   e.target.closest("li").remove();
// };
// const crossOutItem = (e) => {
//   console.log(e.target.nodeName);
//   if (e.target.nodeName !== "LI") return;
//   e.target.classList.toggle("done");
// }

// button.addEventListener("click", addItem);
// ul.addEventListener("click", removeItem);
// ul.addEventListener("click", crossOutItem);
