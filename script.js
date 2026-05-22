const passwordLength = document.querySelector("#password-length");
const lengthValue = document.querySelector("#length-value");
const generateButton = document.querySelector("#generate-btn");
const passwordOutput = document.querySelector("#password-output");

function generatePassword() {
  const passwords = [
    "Dragon123",
    "Tiger456",
    "Phoenix789",
    "Samurai321",
    "Ninja654"
  ];

  const randomIndex = Math.floor(Math.random() * passwords.length);

  return passwords[randomIndex];
}
passwordLength.addEventListener("input", function () {
  lengthValue.textContent = passwordLength.value;
});

generateButton.addEventListener("click", function () {
  passwordOutput.value = generatePassword();
});