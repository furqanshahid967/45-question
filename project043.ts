var magicians : string[] = ["Harry Houdini","David Copperfield","Penn & Teller","Criss Angel","Derren Brown "]
var great_magicians : string[] = ["David Copperfield","Derren Brown","Shin Lim","Dai Vernon","Ricky Jay"]

function make_magician(_magicians : string[]) {
    for (var _magician of _magicians) {
        console.log(`\n Great magician : ${_magician}`);
    }
}

function show_magician(_magicians : string[]) {
    for (var _magician of _magicians) {
        console.log(`\n magician : ${_magician}`);
    }
}


show_magician(magicians);
make_magician(magicians);