var invite_peoples : string[] = ["Asim shakeel","Ataullah khan","Asim muneer"]


invite_peoples.pop()
invite_peoples.pop()
invite_peoples.pop()

invite_peoples.push("Saim Anees")
invite_peoples.push("Atif Sameer")
invite_peoples.push("Nady ali")

invite_peoples.push("khizar danish")
invite_peoples.push("Haseed naseem")
invite_peoples.push("Yasir Khan")   // Sorry sir append() cannot be run

for(var invite_people of invite_peoples){
    console.log(`Dear ${invite_people} , I would like to invite you on Dinner`);
}