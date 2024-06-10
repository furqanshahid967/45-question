var invite_peoples = ["Asim shakeel", "Ataullah khan", "Asim muneer"];
invite_peoples.pop();
invite_peoples.pop();
invite_peoples.pop();
invite_peoples.push("Saim Anees");
invite_peoples.push("Atif Sameer");
invite_peoples.push("Nady ali");
invite_peoples.push("khizar danish");
invite_peoples.push("Haseed naseem");
invite_peoples.push("Yasir Khan");
for (var _i = 0, invite_peoples_1 = invite_peoples; _i < invite_peoples_1.length; _i++) {
    var invite_people = invite_peoples_1[_i];
    console.log("\n \t Dear ".concat(invite_people, " ,I would like to invite you on Dinner\n \t"));
}
console.log("\n \t sorry , I just found out my Dinner can't arrive,So, my new table can have only two members");
invite_peoples.pop();
invite_peoples.pop();
invite_peoples.pop();
invite_peoples.pop();
for (var _a = 0, invite_peoples_2 = invite_peoples; _a < invite_peoples_2.length; _a++) {
    var invite_people = invite_peoples_2[_a];
    console.log("\n \tDear ".concat(invite_people, " ,You are still invited for Dinner\n \t "));
}
for (var i = 0; i <= 0; i++) {
    var not_invite = ["Yasir Khan", "Haseed naseem", "khizar danish", "Nady ali"];
    console.log("\n \t Sorry,".concat(not_invite, " are not invited \t"));
}
