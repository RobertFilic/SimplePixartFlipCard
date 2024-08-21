document.addEventListener("DOMContentLoaded", () => {
    const card = document.getElementById("flip-card");
    const backFace = document.getElementById("back-face");

    card.addEventListener("click", () => {
        if (!card.classList.contains("is-flipped")) {
            // Randomly decide whether the player wins or loses
            const win = Math.random() > 0.5;

            // Set the back face content
            if (win) {
                backFace.innerHTML = `
                    <div class="icon heart"></div>
                    <div class="text">You WON!</div>
                `;
            } else {
                backFace.innerHTML = `
                    <div class="icon xmark"></div>
                    <div class="text">Try again</div>
                `;
            }

            // Flip the card
            card.classList.add("is-flipped");
        } else {
            // Reset the card after it's been flipped
            card.classList.remove("is-flipped");
            backFace.innerHTML = ""; // Clear the content
        }
    });
});
