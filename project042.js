var magicians = ["Harry Houdini", "David Copperfield", "Penn & Teller", "Criss Angel", "Derren Brown "];
function make_magician(_magicians) {
    for (var _i = 0, _magicians_1 = _magicians; _i < _magicians_1.length; _i++) {
        var _magician = _magicians_1[_i];
        console.log("\n Great magician : ".concat(_magician));
    }
}
make_magician(magicians);
