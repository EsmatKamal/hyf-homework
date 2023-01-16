const clothesToWear = whatTemperature(-15);
console.log(clothesToWear);
function whatTemperature(i) {
    if (i >= -15 && i <=0) {
        return "Keep yourself warm, it is cold out here!";
    }
    else if (i >= 1 && i <= 10) {
        return "Find something thick and wrap yourself in it";
    }
    else if (i >= 11 && i <= 20) {
        return "You can put on your simple cloths";
    }
    else if (i >= 21 && i <= 35) {
        return "You've to wear shorts and t-shirt";
    }
    else {
        return "It hot out here, use sunscreen cream!"
    }
}