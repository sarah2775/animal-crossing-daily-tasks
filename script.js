const bulletinMessage = document.getElementById("bulletin-message");
const checkboxes = document.querySelectorAll("input[type='checkbox']");
const progressText = document.querySelector(".progress");

// Bulletin logic
const hour = new Date().getHours();
if (hour < 12) {
  bulletinMessage.textContent =
    "Good morning! A fresh island day awaits 🌞";
} else if (hour < 18) {
  bulletinMessage.textContent =
    "Hope island life is treating you well 🌿";
} else {
  bulletinMessage.textContent =
    "Time to wind down on your island 🌙";
}

// Load saved state
checkboxes.forEach((cb, index) => {
  const saved = localStorage.getItem(`task-${index}`);
  if (saved === "true") {
    cb.checked = true;
  }
});

// Progress counter
function updateProgress() {
  const completed = Array.from(checkboxes).filter(cb => cb.checked).length;
  progressText.textContent = `${completed} / ${checkboxes.length} tasks completed 🌼`;

  checkboxes.forEach((cb, index) => {
    localStorage.setItem(`task-${index}`, cb.checked);
  });
}

// Initial update
updateProgress();

// Listen for changes
checkboxes.forEach(cb => {
  cb.addEventListener("change", updateProgress);
});
