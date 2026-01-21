let messageIndex = 0;

const messages = [
    "Are you sure?",
    "Really sure??",
    "Are you positive?",
    "Pleeasee...",
    "Just think about it!",
    "If you say no, I will be really sad...",
    "I will be very sad...",
    "I will be very very very sad...",
    "Ok fine, I will stop asking...",
    "Just kidding, say yes please! ❤️"
];

function handleNoClick() {
    const noButton = document.querySelector(".no-button");
    const yesButton = document.querySelector(".yes-button");
    
    // Change the text of the No button
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    
    // Get current font size of Yes button and increase it
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    // Redirect to the success page
    window.location.href = "yes_page.html";
}

function createFloatingHeart() {
    const heart = document.createElement("div");
    heart.innerHTML = "❤️";
    heart.classList.add("floating-heart");
    
    // Random position across the width of the screen
    heart.style.left = Math.random() * 100 + "vw";
    
    // Random size and speed for variety
    const size = Math.random() * 20 + 10;
    heart.style.fontSize = size + "px";
    heart.style.animationDuration = Math.random() * 3 + 3 + "s";
    
    document.body.appendChild(heart);

    // Remove heart after animation finishes
    setTimeout(() => {
        heart.remove();
    }, 6000);
}

// Spawn a new heart every 300 milliseconds
setInterval(createFloatingHeart, 300);
