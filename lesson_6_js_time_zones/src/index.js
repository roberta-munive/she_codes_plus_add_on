// challenge 2

let honoluluDateLocator = document.querySelector("#current-date");
let honoluluDate = moment().tz("Pacific/Honolulu");
let formattedHonoluluDate = honoluluDate.format("dddd, MMMM D, YYYY h:mm A");
honoluluDateLocator.innerHTML = `It is ${formattedHonoluluDate} in Honolulu, Hawaii`;

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
