var invite_peoples : string[] = ["Asim shakeel","Ataullah khan","Asim muneer"]

for(var invite_people of invite_peoples){
    console.log(`Dear ${invite_people} , I would like to invite you on Dinner`);
}

console.log(`\n \t ${invite_peoples[0]} , ${invite_peoples[1]} , ${invite_peoples[2]} cannot come ,Due to some reasons\n`);


invite_peoples.pop()
invite_peoples.pop()
invite_peoples.pop()
invite_peoples.push("Saim Anees")
invite_peoples.push("Atif Sameer")
invite_peoples.push("Nady ali")

for(var invite_peopl of invite_peoples){
    console.log(`Dear ${invite_peopl} , I would like to invite you on Dinner`);
}
