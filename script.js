const addBox = document.querySelector(".add-box"),
  popupBox = document.querySelector(".popup-box"),
  closeIcon = popupBox.querySelector("header i"),
  titleTag = popupBox.querySelector("input"),
  descTag = popupBox.querySelector("textarea"),
  addBtn = popupBox.querySelector("button");

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

addBox.addEventListener("click", () => {
  popupBox.classList.add("show");
});

closeIcon.addEventListener("click", () => {
  popupBox.classList.remove("show");
});

addBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let noteTitle = titleTag.value,
    noteDesc = descTag.value;

  if (noteTitle || noteDesc) {
    // * getiing month, day, year from the current date
    let dateObj = new Date(),
      month = months[dateObj.getMonth()],
      day = dateObj.getDay(),
      year = dateObj.getFullYear();

    let noteInfo = {
      title: noteTitle,
      description: noteDesc,
      date: `${month} ${day} ${year}`,
    };

    console.log(noteInfo);
  }
});
