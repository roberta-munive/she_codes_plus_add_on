// challenge 2

let honoluluCurrentDateLocator = document.querySelector("#current-date");
let honoluluCurrentDate = moment().tz("Pacific/Honolulu");
let formattedHonoluluCurrentDate = honoluluCurrentDate.format(
  "dddd, MMMM D, YYYY h:mm A"
);
honoluluCurrentDateLocator.innerHTML = `It is ${formattedHonoluluCurrentDate} in Honolulu, Hawaii`;

// challenge 3

let parisFutureDateLocator = document.querySelector("#future-date");
let parisFutureDate = moment().tz("Europe/Paris").add(10, "years");
let formattedParisFutureDate = parisFutureDate.format(
  "dddd, MMMM D, YYYY h:mm A"
);
parisFutureDateLocator.innerHTML = `10 years from now, it will be ${formattedParisFutureDate} in Paris, France`;

// challenge 4
let localTimeZoneLocator = document.querySelector("#local-time-zone");
let localTimeZone = moment.tz.guess();
localTimeZoneLocator.innerHTML = localTimeZone;
