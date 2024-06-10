var invite_peoples = ["Asim shakeel", "Ataullah khan", "Asim muneer"];
invite_peoples.pop();
invite_peoples.pop();
invite_peoples.pop();
invite_peoples.push("Saim Anees");
invite_peoples.push("Atif Sameer");
invite_peoples.push("Nady ali");
invite_peoples.push("khizar danish");
invite_peoples.append("Haseed naseem");
invite_peoples.push("Yasir Khan");
for (var _i = 0, invite_peoples_1 = invite_peoples; _i < invite_peoples_1.length; _i++) {
    var invite_people = invite_peoples_1[_i];
    console.log("Dear ".concat(invite_people, " , I would like to invite you on Dinner"));
}
