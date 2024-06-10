var magicians : string[] = ["Harry Houdini","David Copperfield","Penn & Teller","Criss Angel","Derren Brown "]

function show_magicians(_magicians : string[]) {
    for (var _magician of _magicians) {
        console.log(`\n magician : ${_magician}`);
    }
}

show_magicians(magicians);