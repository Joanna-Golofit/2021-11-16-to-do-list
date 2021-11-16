"use strict";
const dqs = (selector) => document.querySelector(selector);
const button = dqs("button");

const addItem = (e) => {
  e.preventDefault();
  const ul = dqs("ul");
  const input = dqs("#task-title");
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

// console.log(button);
button.addEventListener("click", addItem);
// addItem();
