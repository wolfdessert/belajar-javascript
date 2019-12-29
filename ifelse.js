prompt("masukan nama  orang ke 1 ");
prompt("masukan nama  orang ke 2 ");

var loveScore = Math.random() * 100;
loveScore = Math.floor(loveScore) + 1;
if (loveScore === 100) {
    alert("your love is true " + loveScore);
} else {
    alert("normal" + loveScore);

}
alert("your love score is " + loveScore + "%");