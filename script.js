let messageIndex = 0;

const messages = [
    "Are you sure?",
    "Really sure?",
    "Are you positive?",
    "Pleasee...",
    "Just think about it!",
    "If you say no, I will be really sad...",
    "I will be very sad...",
    "I will be very sad...",
    "Ok fine, I will stop asking...",
    "Just kidding, say yes please! ❤️"
];

function handleYesClick() {
    window.location.href = "yes_page.html";
}

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    const noButton = document.querySelector(".no-button");
    const yesButton = document.querySelector(".yes-button");
    
    if (noButton) {
        noButton.addEventListener("click", function() {
            // Change no button text
            noButton.textContent = messages[messageIndex];
            messageIndex = (messageIndex + 1) % messages.length;
            
            // Increase yes button size
            const currentSize = parseInt(window.getComputedStyle(yesButton).fontSize);
            yesButton.style.fontSize = `${currentSize * 1.5}px`;
        });
    }
    
    // Add click handler for yes button via JavaScript (alternative to onclick)
    if (yesButton) {
        yesButton.addEventListener("click", handleYesClick);
    }
});

