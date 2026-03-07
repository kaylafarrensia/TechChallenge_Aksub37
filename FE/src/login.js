import { users } from "./main.js";

const loginForm = document.querySelector("#loginForm");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = document.querySelector("#email").value.trim();
  const password = document.querySelector("#password").value.trim();

  const user = users.find((u) => u.email === email && u.password === password);

  if (user) window.location.href = "homePage.html";
});
