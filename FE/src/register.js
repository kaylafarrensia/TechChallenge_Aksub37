import { users } from "./main.js";

const registerForm = document.querySelector("#regisForm");

registerForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // Retrieve Input
  const name = document.querySelector("#name").value.trim();
  const email = document.querySelector("#email").value.trim();
  const password = document.querySelector("#password").value.trim();
  const retype = document.querySelector("#re-password").value.trim();
  const terms = document.querySelector("#termsnconditions");

  // Validate Input
  if (!name || !email || !password || !retype || !terms.checked) {
    alert("Empty fields!");
    return;
  } // not empty
  const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;
  if (!passwordRegex.test(password)) return; // correct password format
  if (password !== retype) return; // password and retype password are the same

  // Check if email already registered
  if (users.find((u) => u.email === email)) return;

  // Push data to array
  users.push({ email, password });
  const totalUsers = users.reduce((accumulator) => accumulator + 1, 0);

  // Back to login page
  window.location.href = "login.html";
});
