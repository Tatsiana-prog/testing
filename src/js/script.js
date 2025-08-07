function updateFileName() {
  const fileInput = document.getElementById("file-upload");
  const label = document.querySelector(".file-upload-label");
  const fileName =
    fileInput.files.length > 0 ? fileInput.files[0].name : "Прикрепить файл";
  label.textContent = fileName;
}

const customSelect = document.getElementById("custom-select");
const options = document.getElementById("options");
const arrow = document.querySelector(".arrow");
const path = arrow.querySelector("path");
const selectedText = document.querySelector(".selected-text");

customSelect.addEventListener("click", (event) => {
  event.stopPropagation();
  options.style.display = options.style.display === "block" ? "none" : "block";
  arrow.style.transform =
    options.style.display === "block" ? "rotate(180deg)" : "rotate(0deg)";
  customSelect.classList.add("active");
  path.classList.add("icon-active");
});

document.querySelectorAll(".option").forEach((option) => {
  option.addEventListener("click", (event) => {
    event.stopPropagation();
    selectedText.textContent = option.textContent;
    options.style.display = "none";
    arrow.style.transform = "rotate(0deg)";
    path.classList.remove("icon-active");
    customSelect.classList.remove("active");
  });
});

document.addEventListener("click", () => {
  options.style.display = "none";
  arrow.style.transform = "rotate(0deg)";
});
