// 🎉 Assignment Script: Interactive Features

// --------------------
// 🌙 Light/Dark Mode Toggle
// --------------------
const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// --------------------
// 🎮 Counter Game
// --------------------
let count = 0;
const counter = document.getElementById("counter");
const incrementBtn = document.getElementById("incrementBtn");

incrementBtn.addEventListener("click", () => {
  count++;
  counter.textContent = count;
});

// --------------------
// ❓ Collapsible FAQ Section
// --------------------
const faqToggles = document.querySelectorAll(".faq-toggle");

faqToggles.forEach(toggle => {
  toggle.addEventListener("click", () => {
    const answer = toggle.nextElementSibling;
    answer.style.display = answer.style.display === "block" ? "none" : "block";
  });
});

// --------------------
// 📋 Form Validation
// --------------------
const form = document.getElementById("signupForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const formMessage = document.getElementById("formMessage");

// Email regex pattern
const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

form.addEventListener("submit", (e) => {
  e.preventDefault(); // Stop default form submit

  let valid = true;

  // Validate Name
  if (nameInput.value.trim() === "") {
    nameError.textContent = "Name is required";
    valid = false;
  } else {
    nameError.textContent = "";
  }

  // Validate Email
  if (!emailInput.value.match(emailPattern)) {
    emailError.textContent = "Enter a valid email";
    valid = false;
  } else {
    emailError.textContent = "";
  }

  // Validate Password (min 6 chars)
  if (passwordInput.value.length < 6) {
    passwordError.textContent = "Password must be at least 6 characters";
    valid = false;
  } else {
    passwordError.textContent = "";
  }

  // Success Message
  if (valid) {
    formMessage.textContent = "✅ Form submitted successfully!";
    formMessage.style.color = "green";
    form.reset();
  } else {
    formMessage.textContent = "❌ Please fix errors before submitting.";
    formMessage.style.color = "red";
  }
});
