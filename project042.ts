var magicians : string[] = ["Harry Houdini","David Copperfield","Penn & Teller","Criss Angel","Derren Brown "]

function make_magician(_magicians : string[]) {
    for (var _magician of _magicians) {
        console.log(`\n Great magician : ${_magician}`);
    }
}

make_magician(magicians);