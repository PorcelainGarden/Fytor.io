const addBox = document.querySelector(".loginbttn"),
popupBox = document.querySelector(".popup-box"),
closeIcon = popupBox.querySelector("header button");

addBox.addEventListener("click", () => {
    popupBox.classList.add("show");
  });
  
  closeIcon.addEventListener("click", () => {
    popupBox.classList.remove("show");
  });