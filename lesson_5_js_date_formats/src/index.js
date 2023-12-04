let currentDate = moment();
let formattedCurrentDate = currentDate.format("dddd, MMMM D, YYYY");
let currentDateLocator = document.querySelector("#current-date");
currentDateLocator.innerHTML = `Today is ${formattedCurrentDate}`;

let futureDate = moment().add(10, "year");
let formattedFutureDate = futureDate.format("dddd, MMMM D, YYYY h:mm:ss A");
let futureDateSelector = document.querySelector("#future-date");
futureDateSelector.innerHTML = `10 years from now, it will be ${formattedFutureDate} `;
