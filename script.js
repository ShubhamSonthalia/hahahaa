<script src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.9.3/dist/confetti.browser.min.js"></script>
function moveRandomEl(elm) {
  elm.style.position = "absolute";
  elm.style.top = Math.floor(Math.random() * 90 + 5) + "%";
  elm.style.left = Math.floor(Math.random() * 90 + 5) + "%";
}

const moveRandom = document.querySelector("#move-random");
const messages = [
    "Are you sure? 🥺",
    "Think again! ❤️",
    "Wrong answer 😭",
    "Please? 🙏",
    "You can't escape forever 😈"
];

noBtn.addEventListener("mouseenter", () => {
    document.getElementById("message").textContent =
        messages[Math.floor(Math.random() * messages.length)];
});

moveRandom.addEventListener("mouseenter", function (e) {
  moveRandomEl(e.target);
});