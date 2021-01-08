window.addEventListener('DOMContentLoaded', function() {
    'use strict';

    //timer 
    let deadline = '2020-12-31';

    function getTimeRemaining(endtime) {
        let t = Date.parse(endtime) - Date.parse(new Date()),
            seconds = Math.floor((t/1000)%60),
            minutes = Math.floor((t/1000/60)%60),
            hours = Math.floor((t/1000/60/60)%24),
            days = Math.floor(t/1000/60/60/24);

        return {
            'total' : t,
            'hours' : hours,
            'minutes' : minutes,
            'seconds' : seconds,
            'days' : days
        };
    }

    function setClock(id, endtime) {
        let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            days = timer.querySelector('.days'),
            timeInterval = setInterval(updateClock, 1000);
            
            function updateClock() {
                let t = getTimeRemaining(endtime);
                days.textContent = t.days;
                hours.textContent = addZero(t.hours);
                minutes.textContent = addZero(t.minutes);
                seconds.textContent = addZero(t.seconds);

                if(t.total <= 0) {
                    clearInterval(timeInterval);
                }
            }

            function addZero(time) {
                if (time < 10) {
                    return '0' + time;
                } else {
                    return time;
                };
            }
    }

    setClock('timer', deadline);
});