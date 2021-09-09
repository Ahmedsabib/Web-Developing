setInterval(startClock, 1000);
function startClock() {
    const d = new Date();
    let hour = d.getHours();
    let minute = d.getMinutes();
    let second = d.getSeconds();
    let clockHour, clockMinute, clockSecond;
    if (hour < 10) {
        clockHour = `0${hour}`;
    }
    else {
        clockHour = hour;
    }
    if (minute < 10) {
        clockMinute = `0${minute}`;
    }
    else {
        clockMinute = minute;
    }
    if (second < 10) {
        clockSecond = `0${second}`;
    }
    else {
        clockSecond = second;
    }
    let format;
    if ((clockHour >= 00 && clockMinute >= 00 && clockMinute && clockSecond >= 00) && (clockHour <= 11 && clockMinute <= 59 && clockSecond <= 59)) {
        format = "AM";
    }
    else {
        format = "PM";
    }
    let timing = `${clockHour}:${clockMinute}:${clockSecond}`
    document.getElementById("time").innerHTML = timing + ' ' + format;
}
startClock();