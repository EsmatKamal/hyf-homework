const dogYearOfBirth = 2010;
const dogYearFuture = 2028;
const dogYear = dogYearFuture - dogYearOfBirth;
const shouldShowResultInDogYears = false;
if (shouldShowResultInDogYears == true) {
    console.log("My dog will be " + dogYear * 7 + " dog years old in 2028.");
}
else if (shouldShowResultInDogYears == false) {
    console.log("My dog will be " + dogYear + " human years old in 2028.");
}
