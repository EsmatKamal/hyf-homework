todayDay = 4; // .   0-Monday, 2-Tuesday, 3-Wednesday, etc.
weekDay = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
function getEventWeekday(i) {
    n = todayDay + (i % 7);
    if (n > 7) {       n = n - 7;
    }
    return weekDay[n];
}
console.log(getEventWeekday(100));