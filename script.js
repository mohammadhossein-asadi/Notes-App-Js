const addBox = document.querySelector(".add-box"),
  popupBox = document.querySelector(".popup-box"),
  closeIcon = popupBox.querySelector("header i"),
  addBtn = popupBox.querySelector("button");

addBox.addEventListener("click", () => {
  popupBox.classList.add("show");
});

closeIcon.addEventListener("click", () => {
  popupBox.classList.remove("show");
});

addBtn.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("Button click");
});
