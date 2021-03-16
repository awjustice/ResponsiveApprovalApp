const voteButton = document.querySelector("#voteButton");
const moreButton = document.querySelector("#moreButton");
const mainText = document.querySelector("#mainText");
const images = document.querySelectorAll("img");
const voteBars = document.querySelectorAll(".voteBarContainer");
const radios = document.querySelectorAll("input");

const homeReload = () => {
    document.location.href = "index.html";
};

voteButton.addEventListener("click", () => {
    if (!(radios[0].checked || radios[1].checked || radios[2].checked)) {
        alert("Choose an ice cream!");
        return false;
    }

    mainText.innerHTML = explanation[0];
    images.forEach((image) => image.classList.add("noHover"));
    voteBars.forEach((voteBar) => voteBar.classList.toggle("hide"));
    moreButton.classList.toggle("hide");
    voteButton.classList.toggle("hide");
    images[2].classList.add("winner");
    images[0].classList.add("loser");

    images[0].style.border = "none";
    images[1].style.border = "none";
});

let clicks = 0;
let explanation = [
    "Vanilla wins in this case even though most people prefer some form of chocolate",
    "The chocolate lovers split their vote in this case. This happens all the time in real elections.",
    "Approval voting avoids the vote-splitting problem by letting you vote for all the candidates you approve of",
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
