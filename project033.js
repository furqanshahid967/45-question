var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var _i = 0, nums_1 = nums; _i < nums_1.length; _i++) {
    var num = nums_1[_i];
    if (num === 1) {
        console.log("".concat(num, "st"));
    }
    if (num === 2) {
        console.log("".concat(num, "nd"));
    }
    if (num === 3) {
        console.log("".concat(num, "rd"));
    }
    if (num === 4 || num == 5 || num == 6 || num == 7 || num == 8 || num == 9) {
        console.log("".concat(num, "th"));
    }
}
