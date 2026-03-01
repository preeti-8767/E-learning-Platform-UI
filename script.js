// Progress Logic
let progress = 0;
const progressBar = document.getElementById("progressBar");
const increaseBtn = document.getElementById("increaseProgress");

increaseBtn.addEventListener("click", function () {
    if (progress < 100) {
        progress += 10;
        progressBar.style.width = progress + "%";
        progressBar.innerText = progress + "%";

        if (progress === 100) {
            alert("🎉 Congratulations! You completed the course!");
        }
    } else {
        alert("You already finished the course 😎");
    }
});

// Course Button Animation
const startButtons = document.querySelectorAll(".start-course");

startButtons.forEach(button => {
    button.addEventListener("click", function () {
        alert("🚀 Course Started! Let’s become a genius!");
    });
});

// Hero Button Scroll
document.querySelector(".btn-fun").addEventListener("click", function () {
    window.scrollTo({
        top: 600,
        behavior: "smooth"
    });
});

// Fun Background Animation
let colors = ["#ffe4ec", "#fff5cc", "#e0ffe0"];
let index = 0;

setInterval(() => {
    document.body.style.background =
        "linear-gradient(to right," + colors[index] + ", #ffffff)";
    index = (index + 1) % colors.length;
}, 5000);