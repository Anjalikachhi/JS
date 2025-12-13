function createBubble(color) {
    const bubble = document.createElement("div");
    bubble.classList.add("bubble");

    const size = Math.random() * 40 + 20;
    bubble.style.width = size + "px";
    bubble.style.height = size + "px";

    bubble.style.left = Math.random() * window.innerWidth + "px";
    bubble.style.background = color;

    document.body.appendChild(bubble);

    setTimeout(() => bubble.remove(), 6000);
}

let currentColor = "rgba(255, 255, 255, 0.6)";

setInterval(() => {
    createBubble(currentColor);
}, 500);

document.getElementById("colorBtn").addEventListener("click", () => {
    const colors = ["#ff7bda", "#7bffda", "#daff7b", "#7b9dff", "#ff7b7b"];
    currentColor = colors[Math.floor(Math.random() * colors.length)];
});