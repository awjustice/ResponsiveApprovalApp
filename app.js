const voteButton = document.querySelector("#voteButton");
const moreButton = document.querySelector("#moreButton");
const mainText = document.querySelector("#mainText");
const images = document.querySelectorAll("img");
const voteBarChocolate1 = document.querySelector("#voteBarChocolate1");
const voteBarChocolate2 = document.querySelector("#voteBarChocolate2");
const voteBarVanilla = document.querySelector("#voteBarVanilla");
const voteBars = document.querySelectorAll(".voteBar");

const homeReload = () => {
  document.location.href = "index.html";
};

voteButton.addEventListener("click", () => {
  mainText.innerHTML = explanation[0];
  images.forEach((image) => image.classList.add("noHover"));
  moreButton.classList.toggle("hide");
  voteButton.classList.toggle("hide");
});

let clicks = 0;
let explanation = [
  "Vanilla wins in this case...even though most people prefer some form of chocolate",
  "The chocolate lovers split their vote between the two choices.  This happens all the time in real elections.",
  "Approval voting lets you vote for all the candidates you approve of so as to avoid this negative scenario",
  "",
];

const infoTextChange = () => {
  clicks += 1;
  mainText.innerHTML = explanation[clicks];
  if (clicks == 1) {
    moreButton.innerHTML = "Show me a better way";
  }
  if (clicks == 2) {
    moreButton.innerHTML = "Let's try it!";
  }
  if (clicks == 3) {
    document.location.href = "approval.html";
  }
};
