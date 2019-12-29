// membuat prompt atau inputan kedalam mengggunakan prompt
prompt("masukan nama  orang ke 1 ");
prompt("masukan nama  orang ke 2 ");

// membuat variabel baru dengan nama lovescore yang berisi 
// math random untuk mengacak angka 
var loveScore = Math.random() * 100;
// dan dalam loveScore terdapat mathfloor untuk membuat angka tidak desimal
loveScore = Math.floor(loveScore) + 1;
// dan hasilkan dengan alert 
alert("your love score is " + loveScore + "%");