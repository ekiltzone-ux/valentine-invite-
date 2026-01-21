let messageIndex = 0;

const messages = [
  "Are you sure?",
  "Really sure?",
  "Are you positive?",
  "Pleasee...",
  "Just think about it!",
  "If you say no, I'll be sad...",
  "I will be very sad...",
  "Really really sad...",
  "Ok fine, I'll stop asking...",
  "Just kidding, say yes please! ❤️"
];

function handleNoClick() {
  const noButton = document.querySelector(".no-button");
  const yesButton = document.querySelector(".yes-button");

  // Update the "No" button text
  noButton.textContent = messages[messageIndex];
  
  // Move to next message (loop back to start if at end)
  messageIndex = (messageIndex + 1) % messages.length;
  
  // Make "Yes" button bigger
  const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
  yesButton.style.fontSize = `${currentSize * 1.5}px`;
  
  // Also increase padding for better visual
  const currentPadding = parseFloat(window.getComputedStyle(yesButton).padding);
  yesButton.style.padding = `${currentPadding * 1.2}px ${currentPadding * 1.5}px`;
}

function handleYesClick() {
  window.location.href = "yes_page.html";
}

// Optional: Add event listeners as backup (in case onclick doesn't work)
document.addEventListener('DOMContentLoaded', function() {
  const yesButton = document.querySelector('.yes-button');
  const noButton = document.querySelector('.no-button');
  
  if (yesButton) {
    yesButton.addEventListener('click', handleYesClick);
  }
  
  if (noButton) {
    noButton.addEventListener('click', handleNoClick);
  }
});
