/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let generateExcuse = () => {
  let pronoun = ["A", "The"];
  let subject = ["jogger", "racoon", "the driver", "the kid", "cat", "dog"];
  let action = [
    "took my pants",
    "ate the salami",
    "fell in my soup",
    "stole my",
    "spit on my",
    "drank my"
  ];
  let possetion = ["homework", "Pizza", "Glasses", "car"];
  let where = ["in my house", "on the street", "in the mall"];

  let pronIndex = Math.floor(Math.random() * pronoun.length);
  let subjIndex = Math.floor(Math.random() * subject.length);
  let actiIndex = Math.floor(Math.random() * action.length);
  let possIndex = Math.floor(Math.random() * possetion.length);
  let wherIndex = Math.floor(Math.random() * where.length);

  return (
    pronoun[pronIndex] +
    " " +
    subject[subjIndex] +
    " " +
    action[actiIndex] +
    " " +
    possetion[possIndex] +
    " " +
    where[wherIndex]
  );
};

window.onload = () => {
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#the-excuse").innerHTML = generateExcuse();
    console.log("Hello Rigo from the console!");
  });
};
