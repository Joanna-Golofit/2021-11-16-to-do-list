"use strict";
const dqs = (selector) => document.querySelector(selector);
const button = dqs("#button");
const ul = dqs("ul");
const input = dqs("#task-title");

const addItem = (e) => {
  e.preventDefault();
  const text = input.value;
  const newItem = document.createElement("li");

  newItem.innerText = text;
  ul.appendChild(newItem);
  console.log("dupa");
  // console.log(ul);
  // console.log(text);
  // console.log(newItem);
  input.value = "";
};

const removeItem = (e) => {
  if (e.target.nodeName !== "BUTTON") return;
  e.target.closest("li").remove();
};

// console.log(button);
button.addEventListener("click", addItem);
ul.addEventListener("click", removeItem);
// addItem();
