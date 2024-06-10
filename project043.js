var magicians = ["Harry Houdini", "David Copperfield", "Penn & Teller", "Criss Angel", "Derren Brown "];
var great_magicians = ["David Copperfield", "Derren Brown", "Shin Lim", "Dai Vernon", "Ricky Jay"];
function make_magician(_magicians) {
    for (var _i = 0, _magicians_1 = _magicians; _i < _magicians_1.length; _i++) {
        var _magician = _magicians_1[_i];
        console.log("\n Great magician : ".concat(_magician));
    }
}
function show_magician(_magicians) {
    for (var _i = 0, _magicians_2 = _magicians; _i < _magicians_2.length; _i++) {
        var _magician = _magicians_2[_i];
        console.log("\n magician : ".concat(_magician));
    }
}
show_magician(magicians);
make_magician(magicians);
