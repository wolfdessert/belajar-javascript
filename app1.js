function getMilk(money, costPerBottle) {
    console.log("buy " + calcbottles(money, costPerBottle) + " bottle of milk");
    return calcChange(money, costPerBottle);

}

function calcbottles(startingMoney, costPerBottle) {
    var numberOfBottles = Math.floor(startingMoney / costPerBottle);
    return numberOfBottles;

}

function calcChange(startAmount, costPerBottle) {
    var change = startAmount % costPerBottle;
    return change;
}

console.log("hello master her is your " + getMilk(5, 1.5) + " Change");
// getMilk money 5 dan costPerBottle 1.5