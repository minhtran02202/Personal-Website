document.addEventListener("DOMContentLoaded", () => {
  const date = new Date();
  console.log(date);
  const submitButton = document.querySelector("#submit");
  const name = document.querySelector("#subject");
  submitButton.addEventListener("click", () => {
    alert(`Submit Successfully! Thanks for contacting, ${name.value}`);
  });

  const toDoBtn = document.querySelector("#toDoBtn");
  toDoBtn.addEventListener("click", () => {
    window.location.href =
      "https://minhtran02202.github.io/pure-no-framework-to-do/";
  });
  const musicCardBtn = document.querySelector("#musicCardBtn");
  musicCardBtn.addEventListener("click", () => {
    window.location.href = "https://minhtran02202.github.io/Music-Card/";
  });
});
