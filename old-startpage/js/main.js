/**
 * Interval which the clock will be updated (in milliseconds).
 */
const clockInterval = 100;

/**
 * Search engine query url
 */
const searchEngineUrl = 'https://duckduckgo.com/?q=';

const tabKeyCode = 9;
const enterKeyCode = 13;
const escapeKeyCode = 27;
const searchBarElement = document.getElementById('search-bar');
const clockElement = document.getElementById('clock');
const formElement = document.getElementById('search-form');

/**
 * Return a string containing the formatted current date and time.
 */
function getDateTime() {
    const dateTime = new Date();
    let day = dateTime.getDate();
    let month = dateTime.getMonth();
    let hour = dateTime.getHours();
    let minutes = dateTime.getMinutes();
    let seconds = dateTime.getSeconds();

    if (hour < 0) {
        hour = 24 + hour;
    }

    let date = (day < 10 ? '0' + day : day) + '/' + (month < 10 ? '0' + month : month) + '/' + dateTime.getFullYear();
    let time = (hour < 10 ? '0' + hour : hour) + ':' + (minutes < 10 ? '0' + minutes : minutes) + ':' + (seconds < 10 ? '0' + seconds : seconds);

    return date + '\n' + time;

    // var currentTime = new Date();

    // var currentHours = currentTime.getHours() + 4;
    // var currentMinutes = currentTime.getMinutes();
    // var currentSeconds = currentTime.getSeconds();
    // var currentDay = currentTime.getDate() - 1;
    // var currentMonth = currentTime.getMonth();
    // var currentYear = currentTime.getFullYear();


    // // Pad the minutes and seconds with leading zeros, if required
    // currentMinutes = (currentMinutes < 10 ? "0" : "") + currentMinutes;
    // currentSeconds = (currentSeconds < 10 ? "0" : "") + currentSeconds;

    // // Choose either "AM" or "PM" as appropriate
    // var timeOfDay = (currentHours < 12) ? "PM" : "AM";

    // // Convert the hours component to 12-hour format if needed
    // currentHours = (currentHours > 12) ? currentHours - 12 : currentHours;

    // // Convert an hours component of "0" to "12"
    // currentHours = (currentHours == 0) ? 12 : currentHours;

    // // Compose the string for display
    // var currentTimeString = currentHours + ":" + currentMinutes + ":" + currentSeconds + " " + timeOfDay;

    // var myTime = currentHours + ":" + currentMinutes + ":" + currentSeconds + " " + timeOfDay + '\n' + currentMonth + "/" + currentDay + "/" + currentYear;

    //Update the time display
    document.getElementById("clock").firstChild.nodeValue = currentTimeString;

    return myTime;
}

function saveTodo() {
    var todotext = document.getElementById('todobox').value;
    localStorage.setItem("todo", todotext);
}

function populateTodo() {
    // Populate todo box
    var todo = localStorage.getItem("todo");
    document.getElementById('todobox').innerHTML = todo;
}

function xkcd() {
    randomComicId = Math.floor(Math.random() * Math.floor(2349));
    console.log(randomComicId);
    document.getElementById('xkcdFrame').src = `https://xkcd.com/101.html`;
}

function setClock() {
    clockElement.innerText = getDateTime();
}

function search() {
    let value = searchBarElement.value;
    if (!value) {
        return;
    }

    if (value.startsWith('https://') || value.startsWith('http://')) {
        window.location = value;
    } else {
        window.location = searchEngineUrl + encodeURIComponent(value);
    }
}


setClock();

setInterval(() => {
    setClock();
}, clockInterval);

searchBarElement.focus();
searchBarElement.value = '';

formElement.addEventListener('submit', (ev) => {
    ev.preventDefault();
    search();
});

document.addEventListener('keypress', (event) => {
    if (event.keyCode == escapeKeyCode) {
        searchBarElement.blur();
        searchBarElement.value = '';
    } else if (event.keyCode != tabKeyCode && event.keyCode != enterKeyCode) {
        searchBarElement.focus();
    }
});