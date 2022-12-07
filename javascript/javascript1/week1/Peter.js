Formula: housePrice = volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300;
// Peter's House Price //
let houseWidth = 8;
let houseDepth = 10;
let houseHight = 10;
let gardenSizeInM2 = 100;
const petersVolumeInMeters = houseWidth * houseDepth * houseHight; 
const petersHousePrice = petersVolumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300;
if (petersHousePrice >= 2500000) {
    console.log("Peter does not pay much money");
}
else if (petersHousePrice < 2500000) {
    console.log("Peter pays much money");
}
//  Julia's House Price //
houseWidth = 5;
houseDepth = 11;
houseHight = 8;
gardenSizeInM2 = 70;
const juliasVolumeInMeters = houseWidth * houseDepth * houseHight; 
const juliasHousePrice = juliasVolumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300;
if (juliasHousePrice >= 1000000) {
    console.log("Julia does not pay a lot of money");
}
else if (juliasHousePrice < 1000000) {
    console.log("Julia pays a lot of money");
}