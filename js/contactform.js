
// Form validation
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");

  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const message = document.getElementById("message");

  const submitBtn = document.getElementById("submitBtn");
  const formMessage = document.getElementById("formMessage");

  function validateName() {
    return toggle(name, name.value.trim().length >= 3);
  }

  function validateEmail() {
    const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim());
    return toggle(email, valid);
  }

  function validateMessage() {
    return toggle(message, message.value.trim().length >= 10);
  }

  function toggle(input, valid) {
    input.classList.toggle("is-valid", valid);
    input.classList.toggle("is-invalid", !valid);
    return valid;
  }

  function checkForm() {
    const valid =
      validateName() &&
      validateEmail() &&
      validateMessage();

    submitBtn.disabled = !valid;
  }

  [name, email, message].forEach(input =>
    input.addEventListener("input", checkForm)
  );

  form.addEventListener("submit", e => {
    e.preventDefault();

    if (submitBtn.disabled) return;

    formMessage.innerText = "Message sent successfully!";
    formMessage.className = "text-success";

    form.reset();
    submitBtn.disabled = true;

    document.querySelectorAll(".form-control").forEach(input =>
      input.classList.remove("is-valid")
    );
  });
});