// membuat array kosong
var output = [];
// membuat count =1
var count = 1;

// membuat fungsi fizzbuzz
function fizzbuzz() {
    // jika count di bagi 3 dan dibagi 5 sama dengan 0 maka akan mengeluarkan fizzbuzz
    // tetapi jika count di bagi 3 sama dengan 0 maka akan mengeluarkan fizz
    // tetapi jika count di bagi 5 sama dengan 0 maka akan mengeluarkan buzz
    // tetapi jika tidak keduanya maka count ditambah 1;
    while (count <= 100) {


        if (count % 3 === 0 && count % 5 === 0) {
            output.push("fizzbuzz");
        }
        else if (count % 3 === 0) {
            output.push("fizz");
        }
        else if (count % 5 === 0) {
            output.push("buzz");
        } else {
            output.push(count);
        }
        count++;
    }
    console.log(output);

}