var n = Math.random();
// membuat angka random dengan math.random
// n*6 adlah variable n akan memunculkan angka random 0-5 
// tidak sampai angka 6
n = n * 6;
// +1 adalah dalam artian jika ingin mendapatkan angka random antara 0-6 
n = Math.floor(n) + 1;
console.log(n);

