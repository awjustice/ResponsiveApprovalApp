const images = document.querySelectorAll("img");
const voteButton = document.querySelector("#voteButton");
const mainText = document.querySelector("#mainText");
const moreButton = document.querySelector("#moreButton");
const wrappers = document.querySelectorAll(".wrapper");
const checkboxes = document.querySelectorAll("input");

const homeReload = () => {
    document.location.href = "/";
};

let clicks = 0;
let explanation = [
    "Now one of the chocolates is victorious!  A more accurate reflection of voters' true preference...",
    "The undesirable vote-splitting effect has been avoided - no one candidate is able to spoil the election",
    "To learn more, go to...",
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
        moreButton.innerHTML =
            "<a target='_blank' rel='noopener noreferrer' href='https://www.electionscience.org'>ElectionScience.org</a>";
    }
});
