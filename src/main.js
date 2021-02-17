/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let value = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  let symbol = ["&clubs;", "&hearts;", "&diams;", "&spades;"];
  let randomValuePosition = Math.floor(Math.random() * value.length);
  let randomSymbolPosition = Math.floor(Math.random() * symbol.length);
  let randomValue = value[randomValuePosition];
  let randomSymbol = symbol[randomSymbolPosition];

  document.querySelector(".symbolCardTop").innerHTML = randomSymbol;
  document.querySelector(".valueCard").innerHTML = randomValue;
  document.querySelector(".symbolCardBottom").innerHTML = randomSymbol;
};
