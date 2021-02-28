const chocolate1 = document.querySelector("#chocolate1");
const chocolate2 = document.querySelector("#chocolate2");
const vanilla = document.querySelector("#vanilla");
const voteButton = document.querySelector("#voteButton");
const mainText = document.querySelector("#mainText");
const moreButton = document.querySelector("#moreButton");
const wrappers = document.querySelectorAll(".wrapper");

const homeReload = () => {
  document.location.href = "/";
};

let clicks = 0;
let explanation = [
  "Now one of the chocolates emerges victorious!  A more accurate reflection of voters' true preference...",
  "The undesirable vote-splitting effect has been avoided - no one candidate is able to throw things off and 'spoil' the election",
  "To learn more, go to...",
];

voteButton.addEventListener("click", (e) => {
  mainText.innerHTML = explanation[0];
  voteButton.classList.toggle("hide");
  moreButton.classList.toggle("hide");
  wrappers.forEach((wrapper) => wrapper.classList.add("noHover"));
});

moreButton.addEventListener("click", () => {
  clicks += 1;

  if (clicks == 1) {
    mainText.innerHTML = explanation[1];
  }
  if (clicks == 2) {
    mainText.innerHTML = explanation[2];
    moreButton.innerHTML =
      "<a target=_blank href='https://www.electionscience.org'>ElectionScience.org</a>";
  }
});
