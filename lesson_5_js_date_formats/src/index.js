let currentDate = moment().format("[Today is] dddd, MMMM D, YYYY");
let currentDateLocator = document.querySelector("#current-date");
currentDateLocator.innerHTML = currentDate;

let futureDate = moment()
  .add(10, "year")
  .format("[10 years from now, it will be] dddd, MMMM D, YYYY h:mm:ss A");
let futureDateSelector = document.querySelector("#future-date");
futureDateSelector.innerHTML = futureDate;
