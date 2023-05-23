document.addEventListener("DOMContentLoaded", () => {
  const date = new Date();
  console.log(date);
  const submitButton = document.querySelector("#submit");
  const name = document.querySelector("#subject");
  submitButton.addEventListener("click", () => {
    alert(`Submit Successfully! Thanks for contacting, ${name.value}`);
  });
});
