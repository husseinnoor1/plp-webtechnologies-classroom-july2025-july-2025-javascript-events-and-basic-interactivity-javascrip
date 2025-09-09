// script.js

// ====================
// FORM VALIDATION
// ====================
const form = document.getElementById("signupForm");
const formMessage = document.getElementById("formMessage");

form.addEventListener("submit", function(event) {
  event.preventDefault(); // prevent normal form submission

  const username = document.getElementById("username").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  let errors = [];

  // Username validation
  if (username.length < 3) {
    errors.push("Username must be at least 3 characters long.");
  }

  // Email validation using regex
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailPattern.test(email)) {
    errors.push("Enter a valid email address.");
  }

  // Password validation
  if (password.length < 6) {
    errors.push("Password must be at least 6 characters long.");
  }

  // Show errors or success
  if (errors.length > 0) {
    formMessage.textContent = errors.join(" ");
    formMessage.style.color = "red";
  } else {
    formMessage.textContent = "Form submitted successfully!";
    formMessage.style.color = "green";
    form.reset();
  }
});

// ====================
// FEATURE 1: Dark Mode Toggle
// ====================
const toggleBtn = document.getElementById("toggleTheme");

toggleBtn.addEventListener("click", function() {
  document.body.classList.toggle("dark-mode");
});

// ====================
// FEATURE 2: Click Counter
// ====================
let count = 0;
const clickBtn = document.getElementById("clickBtn");
const clickDisplay = document.getElementById("clickCount");

clickBtn.addEventListener("click", function() {
  count++;
  clickDisplay.textContent = count;
});
