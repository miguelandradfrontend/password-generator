const passwordLength = document.querySelector("#password-length");
const lengthValue = document.querySelector("#length-value");
const generateButton = document.querySelector("#generate-btn");
const passwordOutput = document.querySelector("#password-output");
const uppercaseCheckbox = document.querySelector("#uppercase");
const lowercaseCheckbox = document.querySelector("#lowercase");
const numbersCheckbox = document.querySelector("#numbers");
const symbolsCheckbox = document.querySelector("#symbols");
const copyButton = document.querySelector("#copy-btn");

function generatePassword() {
  let characters = "";

  if (uppercaseCheckbox.checked) {
    characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }

  if (lowercaseCheckbox.checked) {
    characters += "abcdefghijklmnopqrstuvwxyz";
  }

  if (numbersCheckbox.checked) {
    characters += "0123456789";
  }

  if (symbolsCheckbox.checked) {
    characters += "!@#$%^&*";
  }

  if (characters === "") {
  return "Selecciona al menos una opción";
}
  let password = "";

  for (let i = 0; i < passwordLength.value; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }

  return password;
}
passwordLength.addEventListener("input", function () {
  lengthValue.textContent = passwordLength.value;
});

generateButton.addEventListener("click", function () {
  passwordOutput.value = generatePassword();
});

copyButton.addEventListener("click", function () {
  navigator.clipboard.writeText(passwordOutput.value);

  copyButton.textContent = "✅ Copiado";

  setTimeout(function() {
  copyButton.textContent = "📋 Copiar";
}, 2000);
});