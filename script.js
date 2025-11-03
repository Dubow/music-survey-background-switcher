// === MUSIC FORM HANDLING ===

// Get form elements
const form = document.getElementById("musicForm");
const textArea = document.getElementById("favorites");
const message = document.getElementById("message");
const charCount = document.getElementById("charCount");

// Live character counter
textArea.addEventListener("input", () => {
    charCount.textContent = `${textArea.value.length} / 10`;
});

form.addEventListener("submit", (e) => {
    e.preventDefault(); // Stop normal form submission

    const checkedBoxes = form.querySelectorAll('input[name="style"]:checked');
    const genderSelected = form.querySelector('input[name="gender"]:checked');
    const textValue = textArea.value.trim();

    if (checkedBoxes.length === 0) {
        alert("Please select at least one song style.");
        return;
    }

    if (!genderSelected) {
        alert("Please select your gender.");
        return;
    }

    if (textValue.length < 10) {
        alert("Please write at least 10 characters about your favourite songs or singers.");
        return;
    }

    message.textContent = "✅ Thank you! Your answers have been submitted.";
    form.reset();
    charCount.textContent = "0 / 10";
});

// === BACKGROUND COLOUR SWITCHER ===

// Get elements
const colorButtons = document.getElementById("colorButtons");
const colorSelect = document.getElementById("colorSelect");

// Load last color from localStorage
const savedColor = localStorage.getItem("bgColor");
if (savedColor) document.body.style.backgroundColor = savedColor;

// Event for button clicks
colorButtons.addEventListener("click", (e) => {
    if (e.target.dataset.color) {
        const color = e.target.dataset.color;
        document.body.style.backgroundColor = color;
        localStorage.setItem("bgColor", color);
    }
});

// Event for dropdown change
colorSelect.addEventListener("change", (e) => {
    const color = e.target.value;
    if (color) {
        document.body.style.backgroundColor = color;
        localStorage.setItem("bgColor", color);
    }
});