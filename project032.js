var current_users = ["usman", "nadir", "SAMEER", "saim", "JHON"];
var new_users = ["USMAN", "nadir", "same", "haroon", "IBRAHIM"];
for (var _i = 0, current_users_1 = current_users; _i < current_users_1.length; _i++) {
    var current_user = current_users_1[_i];
    for (var _a = 0, new_users_1 = new_users; _a < new_users_1.length; _a++) {
        var new_user = new_users_1[_a];
        if (new_user === current_user) {
            console.log("".concat(new_user, " will need to enter a new username"));
        }
        else {
            console.log("".concat(new_user, " username is available"));
        }
    }
}
