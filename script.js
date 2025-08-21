// DESIGN
document.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault(); // stop default navigation
    document.body.classList.add("fade-out");
    setTimeout(() => {
      window.location.href = link.href; // navigate after animation
    }, 500); // matches CSS duration
  });
});

// script.js
const button = document.getElementById("btn");
const sound = document.getElementById("clickSound");

button.addEventListener("click", () => {
  sound.play(); // plays the sound when clicked
});

//SPARKLE

function createSparkle(x, y) {
  const sparkle = document.createElement("div");
  sparkle.classList.add("sparkle");

  sparkle.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" 
         viewBox="0 0 24 24" fill="#fffefe">
      <path d="M12 2 L14 10 L22 12 L14 14 L12 22 L10 14 L2 12 L10 10 Z"/>
    </svg>
  `;

  sparkle.style.left = `${x}px`;
  sparkle.style.top = `${y}px`;

  document.body.appendChild(sparkle);
}

// fixed sparkles like in Figma
createSparkle(200, 150);


// OR (optional) random sparkles
setInterval(() => {
  const x = Math.random() * window.innerWidth;
  const y = Math.random() * window.innerHeight;
  createSparkle(x, y);
}, 2000);

// PROGRAM LOGIC
let users = JSON.parse(localStorage.getItem("users")) || [];

// SIGNUP
document.getElementById("signupForm")?.addEventListener("submit", function(event) {
  event.preventDefault();

  let firstName = document.getElementById("first-name").value.trim();
  let lastName = document.getElementById("last-name").value.trim();
  let email = document.getElementById("email").value.trim();
  let password = document.getElementById("password").value.trim();
  let confirmPassword = document.getElementById("confirm-password").value.trim();

if (firstName === "" || lastName === "" || email === "" || password === "" || confirmPassword === "") {
  alert("Please fill in all fields.");
  return;
}
if (firstName === "") document.querySelector("#fname-error").innerText = "First name is required.";
if (lastName === "") document.querySelector("#lname-error").innerText = "Last name is required.";
if (email === "") document.querySelector("#email-error").innerText = "Email is required.";
if (password === "") document.querySelector("#pass-error").innerText = "Please enter your password";
if (confirmPassword === "") document.querySelector("#cpass-error").innerText = "Please confirm your password";

  let users = JSON.parse(localStorage.getItem("users")) || [];

  // check if email already exists
  if (users.some(u => u.email === email)) {
    alert("Email already registered. Please log in instead.");
    return;
  }

  users.push({ firstName, lastName, email, password });
  localStorage.setItem("users", JSON.stringify(users));

  window.location.href = "signinwelcome.html?firstname=" + encodeURIComponent(firstName);
});

// LOGIN
document.getElementById("loginForm")?.addEventListener("submit", function(event) {
  event.preventDefault();

  let email = document.getElementById("email").value.trim();
  let password = document.getElementById("password").value.trim();

  let users = JSON.parse(localStorage.getItem("users")) || [];
  let user = users.find(u => u.email === email && u.password === password);

  if (user) {
    window.location.href = "loginwelcome.html?firstname=" + encodeURIComponent(user.firstName);
  } else {
    document.querySelector(".error-message").innerText = "Invalid email or password.";
  }
});




