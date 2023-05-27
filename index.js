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

  function removeImg() {
    const sm_screen = window.matchMedia("(max-width: 1023px)");
    const toDoImg = document.getElementById("toDoImg");
    const musicCardImg = document.getElementById("musicCardImg");
    if (sm_screen.matches) {
      toDoImg.style.display = "none";
      musicCardImg.style.display = "none";
    } else {
      toDoImg.style.display = "block";
      musicCardImg.style.display = "block";
    }
  }

  window.addEventListener("resize", removeImg);
});
