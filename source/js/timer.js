/**
 * Created by BogdanKootz on 18.03.17.
 */

var decCache = [],
	decCases = [2, 0, 1, 1, 1, 2];
function decOfNum(number, titles) {
	if (!decCache[number]) decCache[number] = number % 100 > 4 && number % 100 < 20 ? 2 : decCases[Math.min(number % 10, 5)];
	
	return titles[decCache[number]];
}

function getTimeRemaining(endtime) {
	var t = Date.parse(endtime) - Date.parse(new Date());
	var seconds = Math.floor((t / 1000) % 60);
	var minutes = Math.floor((t / 1000 / 60) % 60);
	var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
	var days = Math.floor(t / (1000 * 60 * 60 * 24));


    if (t >= 0 ) {
        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    } else {
        $("body").addClass("contest-end");
        return {
            'total': 0,
            'days': 0,
            'hours': 0,
            'minutes': 0,
            'seconds': 0
        };
    }

}

function initializeClock(id, endtime) {
	var clock = document.getElementById(id);
	var daysSpan = clock.querySelector('.days');
	var hoursSpan = clock.querySelector('.hours');
	var minutesSpan = clock.querySelector('.minutes');
	var secondsSpan = clock.querySelector('.seconds');
	
	function updateClock() {
		var t = getTimeRemaining(endtime);
		
		daysSpan.innerHTML = t.days;
		hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
		minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
		secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
		
		var daysText = document.getElementById("days-text");
		var hoursText = document.getElementById("hours-text");
		var minutesText = document.getElementById("minutes-text");
		var secondsText = document.getElementById("seconds-text");


		daysText.innerHTML = decOfNum(t.days, ["day", "days", "days"]);
		hoursText.innerHTML = decOfNum(t.hours, ["hour", "hours", "hours"]);
		minutesText.innerHTML = decOfNum(t.minutes, ["minute", "minutes", "minutes"]);
		secondsText.innerHTML = decOfNum(t.seconds, ["second", "seconds", "seconds"]);

		if (t.total <= 0) {
			clearInterval(timeinterval);
		}
	}
	
	updateClock();
	var timeinterval = setInterval(updateClock, 1000);
}

var deadline = new Date(2018, 2, 8, 22, 0, 0);
console.log(deadline);
//TODO::change id of timer block
initializeClock('js-timer', deadline);