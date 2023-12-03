function alertPrimaryColor(event) {
  if (event.target.value.length > 0) {
    if (event.target.value === "red") {
      alert("❤️");
    } else if (event.target.value === "blue") {
      alert("💙");
    } else if (event.target.value === "yellow") {
      alert("💛");
    }
  }
}

let primaryColorsSelectLocator = document.querySelector(
  "#primary-colors-select"
);

primaryColorsSelectLocator.addEventListener("change", alertPrimaryColor);
