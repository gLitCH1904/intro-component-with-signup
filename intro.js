"use strict";
const errorMsg = document.querySelectorAll(".error-msg");
const form = document.querySelector(".form");
const firstName = document.querySelector(".first-name-inp");
const lastName = document.querySelector(".last-name-inp");
const email = document.querySelector(".email-inp");
const password = document.querySelector(".password-inp");
const btn = document.querySelector(".try-it-btn");

for (let i = 0; i < errorMsg.length; i++) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    checkInput();
  });

  function checkInput() {
    let firstNameValue = firstName.value.trim();
    const lastNameValue = lastName.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();

    if (firstNameValue === "") {
      errorMsg[0].classList.add("active");
    } else {
      errorMsg[0].classList.remove("active");
    }

    if (lastNameValue === "") {
      errorMsg[1].classList.add("active");
    } else {
      errorMsg[1].classList.remove("active");
    }

    if (emailValue === "") {
      errorMsg[2].textContent = "Email cannot be empty";
      errorMsg[2].classList.add("active");
    } else if (!isEmail(emailValue)) {
      errorMsg[2].textContent = "This is not a valid email";
      errorMsg[2].classList.add("active");
    } else {
      errorMsg[2].classList.remove("active");
    }

    if (passwordValue === "") {
      errorMsg[3].classList.add("active");
    } else {
      errorMsg[3].classList.remove("active");
    }
  }

  function isEmail(email) {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
  }

  console.log(errorMsg[0]);
}

console.log(form);
