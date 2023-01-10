const form = document.querySelector("form");
const email = document.getElementById("email");
const country = document.getElementById("country");
const zipcode = document.getElementById("zipcode");
const password = document.getElementById("password");
const confirm = document.getElementById("confirmation");
const validate = document.querySelector(".validate");

const emailRegExp =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const numberRegExp = /(^\d{5}$)|(^\d{9}$)|(^\d{5}-\d{4}$)/;

email.addEventListener("input", (event) => {

  if (emailRegExp.test(email.value)) {
    email.className = "valid";
  } else {
    email.className = "invalid";
  }

});

country.addEventListener("input", (event) => {

  if (country.value.length > 0) {
    country.className = "valid";
  } else {
    country.className = "invalid";
  }

});

zipcode.addEventListener("input", (event) => {

  if (numberRegExp.test(zipcode.value)) {
    zipcode.className = "valid";
  } else {
    zipcode.className = "invalid";
  }

});

password.addEventListener("input", (event) => {

  if (password.value.length >= 8) {
    password.className = "valid";
    confirm.disabled = false;
  } else {
    password.className = "invalid";
    confirm.disabled = true;
    confirm.className = "";
  }

})

confirm.addEventListener("input", (event) => {

  if (confirm.disabled) return confirm.className = "";

  if (confirm.value.length >= 8 && confirm.value === password.value) {
    confirm.className = "valid";
  } else {
    confirm.className = "invalid";
  }

})

form.addEventListener("submit", (event) => {

  event.preventDefault();

  const emailValid = emailRegExp.test(email.value);
  const countryValid = country.value.length > 0;
  const zipcodeValid = numberRegExp.test(zipcode.value);
  const passwordValid = password.value.length >= 8;
  const confirmValid = confirm.value.length >= 8 && confirm.value === password.value;

  if (emailValid && countryValid && zipcodeValid && passwordValid && confirmValid) {
    validate.textContent = "Form submitted!";
    validate.className = "validate valid";
    form.reset();
    let inputs = document.querySelectorAll("input");
    inputs.forEach((input) => input.className = ""); 
  } else {
    validate.textContent = "Invalid submission!";
    validate.className = "validate invalid";
  }
  
})