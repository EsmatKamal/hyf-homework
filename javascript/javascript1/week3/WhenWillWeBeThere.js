const travelInformation = {
    speed: 60,
    destinationDistance: 233,
  };
  function countTravelTime(travelInformation){
    const kmMin = travelInformation.speed/60;
    const travelTimeInMin = travelInformation.destinationDistance/kmMin;
    let minutes = travelTimeInMin%60;
    const hours = (travelTimeInMin - minutes)/60;
    minutes = Math.round(minutes);
    return `${hours} hours and ${minutes} minutes`}
    const travelTime = countTravelTime(travelInformation); 
    console.log(travelTime);