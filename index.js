const timeContainer = document.querySelector(".time"),
    // nowHour = timeContainer.querySelector("#hour"),
    // nowMin = timeContainer.querySelector("#minutes"),
    // nowSec = timeContainer.querySelector("#seconds"),
    nowAmpm = timeContainer.querySelector("#period");

// const dayContainer = document.querySelector(".date"),
//     nowDay = dayContainer.querySelector("#dayname"),
//     nowMonth = dayContainer.querySelector("#month"),
//     nowDate = dayContainer.querySelector("#daynum"),
//     nowYear = dayContainer.querySelector("#year");

function getTime() {
    const now = new Date();
    let minutes = now.getMinutes();
    let hours = now.getHours();
    let seconds = now.getSeconds();


    if (hours >= 12) {
        nowAmpm.innerText = "PM"

    }
    if (hours == 0) {
        hours = 12;
    }
    if (hours > 12) {
        hours = hours - 12;
    }

    hours = hours < 10 ? `0${hours}` : hours;
    minutes = minutes < 10 ? `0${minutes}` : minutes;
    seconds = seconds < 10 ? `0${seconds}` : seconds;

    // nowHour.innerText = hours < 10 ? `0${hours}`:hours;
    // nowMin.innerText = minutes < 10 ? `0${minutes}`:minutes;
    // nowSec.innerText = seconds < 10 ? `0${seconds}`:seconds;

    let ids = ['hour', 'minutes', 'seconds'];
    let values = [hours, minutes, seconds];
    
    for (let i = 0; i < ids.length; i++){
        document.getElementById(ids[i]).firstChild.nodeValue = values[i];
    }

}

function getCalender() {
    const now = new Date();
    const day = now.getDay(); // 요일
    const month = now.getMonth(); // 월
    let date = now.getDate(); // 일
    const year = now.getFullYear(); // 년

    
    let week = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Saturday',
    ];

    let months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ];

    // nowDay.innerText = week[day];
    // nowMonth.innerText = months[month];
    // nowDate.innerText = date < 10 ? `0${date}` : date;
    // nowYear.innerText = year;

    date = date < 10 ? `0${date}` : date;

    let ids = ['dayname', 'month', 'daynum', 'year'];
    let values = [week[day],months[month],date,year];
    for (let i = 0; i < ids.length; i++){
        document.getElementById(ids[i]).firstChild.nodeValue = values[i];
    }
}

function init() {
    getTime();
    setInterval(getTime, 100);
    getCalender();
}
init();