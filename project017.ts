var invite_peoples : string[] = ["Asim shakeel","Ataullah khan","Asim muneer"]


invite_peoples.pop()
invite_peoples.pop()
invite_peoples.pop()

invite_peoples.push("Saim Anees")
invite_peoples.push("Atif Sameer")
invite_peoples.push("Nady ali")

invite_peoples.push("khizar danish")
invite_peoples.push("Haseed naseem")
invite_peoples.push("Yasir Khan")

for(var invite_people of invite_peoples){
    console.log(`\n \t Dear ${invite_people} ,I would like to invite you on Dinner\n \t`);
}


console.log("\n \t sorry , I just found out my Dinner can't arrive,So, my new table can have only two members");

invite_peoples.pop()
invite_peoples.pop()
invite_peoples.pop()
invite_peoples.pop()

for(var invite_people of invite_peoples){
    console.log(`\n \tDear ${invite_people} ,You are still invited for Dinner\n \t `);
}

for (let i = 0; i <= 0; i++) {
    var not_invite : string[] = ["Yasir Khan","Haseed naseem","khizar danish","Nady ali"];
    console.log(`\n \t Sorry,${not_invite} are not invited \t`);    
}