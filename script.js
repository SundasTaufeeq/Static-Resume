var scriptButton = document.getElementById("toggle-skills");
var habit = document.getElementById("skills");
scriptButton.addEventListener("click", function () {
    if (habit.style.display === "none") {
        habit.style.display = "block";
    }
    else {
        habit.style.display = "none";
    }
});
