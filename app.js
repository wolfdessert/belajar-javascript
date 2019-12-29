function getMilk(money) {
    console.log("buy " + calcbottles(money, 2.5) + " bottle of milk");
    return calcChange(money, 2.5);
    // return calcHange adalah fungsi calChange yang dikembalikan untuk mendapatkan hasil perhitungan
    // modulo atau hasil bagi dari fungsi tersebut
}

// calcbottles adalah fungsi yang ada di dalam fungsi getMilk 
// dimana dalam kurung calcbottles startingMoney adalah respentasi money yang ada di fungsi getMilk
// sementara costPerBottle adalah respentasi dari 2.5 yang ada di dalam fungsi getMilk
function calcbottles(startingMoney, costPerBottle) {
    var numberOfBottles = Math.floor(startingMoney / costPerBottle);
    return numberOfBottles;
    // return numberOfbottles adalah mengembalikan nilai hasil perhitungan 
    // startingMoney dibagi costPerBottle ke dalam variabel numberOfBottles lagi
}

// fungsi calcChange adalah fungsi perhitungan modulo alias hasil bagi yang hasilnya 
// akan ditampilkan ketika fungsi calChange di kembalikan kembali hasil perhitungannya di dalam fungsi getMilk
function calcChange(startAmount, costPerBottle) {
    var change = startAmount % costPerBottle;
    return change;
}

console.log("hello master her is your " + getMilk(5) + " Change");