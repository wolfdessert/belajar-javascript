
// membuat bootle 
var numberOfBottles = 99
// while numbottle lebih besar atau = 0 maka muncul tulisan bootle
// jika numbottle ===1 maka muncul tulisan bootles
while (numberOfBottles >= 0) {
    var bottleWord = "bottle";
    if (numberOfBottles === 1) {
        bottleWord = "bottles";
    }
    console.log(numberOfBottles + " " + bottleWord + " of beer on the wall");
    console.log(numberOfBottles + " " + bottleWord + " of beer,");
    console.log("Take one down, pass it around,");
    numberOfBottles--;
    console.log(numberOfBottles + " " + bottleWord + " of beer on the wall.");
}