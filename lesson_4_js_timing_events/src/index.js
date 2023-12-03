function displayCurrentDate(){
    let currentDate = new Date();
    let currentDateLocator = document.querySelector("#date");
    currentDateLocator.innerHTML = currentDate;
}

function displayCurrentMilliseconds(){
    let currentDate = new Date();
    let currentMilliseconds = currentDate.getMilliseconds();
    let currentMillisecondsLocator = document.querySelector("#milliseconds");
    currentMillisecondsLocator.innerHTML = currentMilliseconds;
}

setTimeout(displayCurrentDate, 5000);

// setInterval(displayCurrentMilliseconds, 1);