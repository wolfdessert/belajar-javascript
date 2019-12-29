// create function
function bmiCalculator(berat, tinggi) {

    var hitung = Math.floor(berat / (tinggi * tinggi));
    return hitung;



}


// if my weight is 65kg and height 1.8m. i should  be able
//  to call your function like this 

// var bmi =bmiCalculator(65, 1.8);
var bmi = bmiCalculator(65, 1.8);
console.log(bmi);

//  bmi should equal 20 in this chase