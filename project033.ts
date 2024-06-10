var nums : number[] = [1,2,3,4,5,6,7,8,9]

for (var num of nums) {
    if (num === 1) {
        console.log(`${num}st`);
    }
    if (num === 2) {
        console.log(`${num}nd`);
    }
    if (num === 3) {
        console.log(`${num}rd`);
    }
    if (num === 4 || num == 5 || num == 6 || num == 7 || num == 8 || num == 9) {
        console.log(`${num}th`);
    }
}