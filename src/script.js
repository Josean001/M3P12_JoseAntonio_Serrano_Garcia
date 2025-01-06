// Obtener los elementos del formulario
const usernameInput = document.getElementById("username");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirmPassword");
const submitBtn = document.getElementById("submitBtn");

// Obtener los elementos donde se mostrarán los mensajes de error
const usernameError = document.getElementById("usernameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const confirmPasswordError = document.getElementById("confirmPasswordError");

// Expresión regular para validar el correo electrónico
const emailRegex =
  /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

// Función para mostrar un mensaje de error
function showError(input, errorElement, message) {
  errorElement.textContent = message; // Asignar el mensaje de error
  errorElement.classList.add("visible"); // Hacer visible el mensaje
  input.classList.add("error"); // Añadir clase de error al campo
}

// Función para limpiar los errores
function clearError(input, errorElement) {
  errorElement.textContent = ""; // Limpiar el mensaje de error
  errorElement.classList.remove("visible"); // Ocultar el mensaje
  input.classList.remove("error"); // Eliminar la clase de error del campo
}

// Evento que se ejecuta cuando se hace clic en el botón de envío
submitBtn.addEventListener("click", function () {
  let isValid = true; // Variable que indica si todos los campos son válidos

  // Validación del nombre de usuario
  if (usernameInput.value.trim() === "") {
    showError(usernameInput, usernameError, "El campo no puede estar vacío.");
    isValid = false;
  } else if (usernameInput.value.length < 4) {
    showError(
      usernameInput,
      usernameError,
      "El nombre de usuario debe tener al menos 4 caracteres."
    );
    isValid = false;
  } else {
    clearError(usernameInput, usernameError); // Limpiar error si es válido
  }

  // Validación del correo electrónico
  if (emailInput.value.trim() === "") {
    showError(emailInput, emailError, "El campo no puede estar vacío.");
    isValid = false;
  } else if (!emailRegex.test(emailInput.value)) {
    showError(emailInput, emailError, "El correo electrónico no es válido.");
    isValid = false;
  } else {
    clearError(emailInput, emailError); // Limpiar error si es válido
  }

  // Validación de la contraseña
  if (passwordInput.value.trim() === "") {
    showError(passwordInput, passwordError, "El campo no puede estar vacío.");
    isValid = false;
  } else if (
    passwordInput.value.length < 6 ||
    passwordInput.value.length > 12
  ) {
    showError(
      passwordInput,
      passwordError,
      "La contraseña debe tener entre 6 y 12 caracteres."
    );
    isValid = false;
  } else {
    clearError(passwordInput, passwordError); // Limpiar error si es válido
  }

  // Validación de la confirmación de la contraseña
  if (confirmPasswordInput.value.trim() === "") {
    showError(
      confirmPasswordInput,
      confirmPasswordError,
      "El campo no puede estar vacío."
    );
    isValid = false;
  } else if (passwordInput.value !== confirmPasswordInput.value) {
    showError(
      confirmPasswordInput,
      confirmPasswordError,
      "Las contraseñas no coinciden."
    );
    isValid = false;
  } else {
    clearError(confirmPasswordInput, confirmPasswordError); // Limpiar error si es válido
  }

  // Si todos los campos son válidos, mostrar un mensaje de éxito
  if (isValid) {
    alert("Formulario enviado correctamente.");
  }
});
