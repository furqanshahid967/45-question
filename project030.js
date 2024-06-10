var users = ["Adil", "Atif", "Fahad", "Bilal", "Login"];
for (var _i = 0, users_1 = users; _i < users_1.length; _i++) {
    var user = users_1[_i];
    if (user == "Login") {
        console.log("Hello Login, would you like to see Reports");
    }
    else {
        console.log("Hello ".concat(user, ", thanks for login again"));
    }
}
