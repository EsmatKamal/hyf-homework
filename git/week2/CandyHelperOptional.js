const boughtCandyPrices = [];
let sweet,
chocolate, 
    toffee, 
    chewingGum,
    totalPrice;

const amountToSpend = Math.random() * 100; 
function addCandy(candyType,weight) {
    if (candyType === sweet) {
        boughtCandyPrices.push(weight * 0.4);       
    }
    else if (candyType === chocolate) {
        boughtCandyPrices.push(weight * 0.6);   
    }
    else if (candyType === toffee) {
        boughtCandyPrices.push(weight * 1.2);   
    }
    else if (candyType === chewingGum) {
        boughtCandyPrices.push(weight * 0.02);   
    }
    else {
        console.log(`Please enter valid candy name`);
    }
}
addCandy(sweet,20);
addCandy(chocolate,60);
addCandy(toffee,15);
addCandy(chewingGum,45);
function boughtSum(boughtCandyPrices) {
    totalPrice = 0;
    for (let i = 0; i < boughtCandyPrices.length; i++) {
        totalPrice += boughtCandyPrices[i];
    }
    console.log(totalPrice);

}
function canBuyMoreCandy() {
    if (totalPrice >= amountToSpend) {
        console.log("Enough candy for you!");
    }
    else {
        console.log("You can buy more, so please buy!");
    }
}
console.log(boughtCandyPrices);
console.log(amountToSpend);
boughtSum(boughtCandyPrices);
canBuyMoreCandy();
//I need to add it again
