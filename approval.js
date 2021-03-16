const images = document.querySelectorAll("img");
const voteButton = document.querySelector("#voteButton");
const mainText = document.querySelector("#mainText");
const moreButton = document.querySelector("#moreButton");
const wrappers = document.querySelectorAll(".wrapper");
const checkboxes = document.querySelectorAll("input");
const heading = document.querySelector("h2");
const voteBars = document.querySelectorAll(".voteBarContainer");

const homeReload = () => {
    document.location.href = "index.html";
};

let clicks = 0;
let explanation = [
    "This time one of the chocolate's is victorious!",
    "The vote-splitting effect has been avoided and the results now show the true voter preference",
    "To learn more go to...",
];

voteButton.addEventListener("click", (e) => {
    if (
        !(
            checkboxes[0].checked ||
            checkboxes[1].checked ||
            checkboxes[2].checked
        )
    ) {
        alert("Choose your ice cream(s)!");
        return false;
    }

    mainText.innerHTML = explanation[0];
    voteButton.classList.toggle("hide");
    moreButton.classList.toggle("hide");
    wrappers.forEach((wrapper) => wrapper.classList.add("noHover"));
    voteBars.forEach((voteBar) => voteBar.classList.toggle("hide"));
    images[1].classList.add("winner");
    images[0].style.border = "none";
    images[2].style.border = "none";
});

moreButton.addEventListener("click", () => {
    clicks += 1;

    if (clicks == 1) {
        mainText.innerHTML = explanation[1];
    }
    if (clicks == 2) {
        mainText.innerHTML = explanation[2];
        heading.innerHTML = "Replay";
        moreButton.innerHTML =
            "<a href='https://www.electionscience.org' target=_blank rel=noopener noreferrer>ElectionScience.org</a>";
        voteBars.forEach((voteBar) => voteBar.classList.toggle("hide"));
    }
});
