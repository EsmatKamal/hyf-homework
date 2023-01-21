const seriesDurations = [
    {
      title: "Game of thrones",
      days: 3,
      hours: 1,
      minutes: 0,
    },
    {
      title: "Breaking Bad",
      days: 4,
      hours: 23,
      minutes: 30,
    },
    {
      title: "House",
      days: 10,
      hours: 9,
      minutes: 18,
    },
  ];
const eightyYearsInDays = 80*365;
const onePercentInMinutes = ((eightyYearsInDays/100)*24)*60;
function logOutSeriesText() {
    function logOutFirstSerie() {
        const firstSeriesDuration = ((seriesDurations[0].days*24)*60)+(seriesDurations[0].hours*60)+seriesDurations[0].minutes;
        const firstSeriesPercent = firstSeriesDuration / onePercentInMinutes;
        console.log(`Game of thrones took ${firstSeriesPercent.toFixed(3)}% of my life`);
        return firstSeriesPercent;
    }
    function logOutSecondSerie() {
        const secondSeriesDuration = ((seriesDurations[1].days*24)*60)+(seriesDurations[1].hours*60)+seriesDurations[1].minutes;
        const secondSeriesPercent = secondSeriesDuration / onePercentInMinutes;
        console.log(`Breaking Bad took ${secondSeriesPercent.toFixed(3)}% of my life`);
        return secondSeriesPercent;
    }
    function logOutThirdSerie() {
        const thirdSeriesDuration = ((seriesDurations[2].days*24)*60)+(seriesDurations[2].hours*60)+seriesDurations[2].minutes;
        const thirdSeriesPercent = thirdSeriesDuration / onePercentInMinutes;
        console.log(`House took ${thirdSeriesPercent.toFixed(3)}% of my life`);
        return thirdSeriesPercent;
    }
    // return logOutFirstSerie();
    let x = logOutFirstSerie();
    let y = logOutSecondSerie();
    let z = logOutThirdSerie();
    function logOutTotalTime() {
        const totalPercent = x + y + z;
        return totalPercent;
    }
    totalTime = `In total that is ${logOutTotalTime().toFixed(3)}% of my life`;
    console.log(" ");
    console.log(totalTime);
    return totalTime;  
}
logOutSeriesText();