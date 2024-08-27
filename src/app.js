/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let who = ["The dog", "My grandma", "The mailman", "My bird"];
let action = ["ate", "peed", "crushed", "broke"];
let what = ["my homework", "my phone", "the car"];
let when = [
  "before the class",
  "when I was sleeping",
  "while I was exercising",
  "during my lunch",
  "while I was praying"
];
function genereteNumber(arr) {
  var value = Math.floor(Math.random() * arr.length);
  return arr[value];
}

window.onload = function() {
  //write your code here
  var quien = genereteNumber(who);
  var accion = genereteNumber(action);
  var que = genereteNumber(what);
  var cuando = genereteNumber(when);
  const h4 = document.getElementById("excuse");
  h4.innerText = quien + " " + accion + " " + que + " " + cuando;
};
