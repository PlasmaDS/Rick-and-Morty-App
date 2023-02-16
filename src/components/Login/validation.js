// import { i } from "../../App.js";
// import accounts from "../../data.js";

export default function validation(inputs) {
  const errors = {};
  const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  const regexPassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,10}$/;
  const regexPassNumber = /\d/;

  !regexEmail.test(inputs.username) &&
    (errors.username = "⚠️ The username must be a email");
  !inputs.username && (errors.username = "⚠️ The username input is required");
  inputs.username.length > 35 &&
    (errors.username = "⚠️ Username must not be longer than 35 characters");
  // !accounts[i].username && (errors.username = "No user match found");

  !regexPassword.test(inputs.password) &&
    (errors.password =
      "⚠️ The password must have at least 6 and max of 10 characters long");
  !regexPassNumber.test(inputs.password) &&
    (errors.password = "⚠️ Include at least one number");

  return errors;
}
