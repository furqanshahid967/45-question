var age = 10;
if (age < 2) {
    console.log("person is a baby");
}
if (function (age) { return 2 && age < 4; }) {
    console.log("person is a toddler");
}
if (function (age) { return 4 && age < 13; }) {
    console.log("person is a kid");
}
if (age == 13 && age < 20) {
    console.log("person is a teenager");
}
if (age == 20 && age < 65) {
    console.log("person is a adult");
}
if (age > 65) {
    console.log("person is a older");
}
