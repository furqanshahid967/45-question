interface person {
    earning ?: Number
    Name : string
    gender : string
}

interface books {
    price : Number
    Name : string
    genre : string
}

interface car {
    price : Number
    model : string
    features : string[]
}

var Fahad : person = {
    earning : 20000,
    Name : "fahad ahmed",
    gender : "Male"
}

var the_48_laws : books = {
    price : 2000,
    Name : "The 48 Laws of Power",
    genre : "psychology"
}

var BMW : car = {
    price : 150000000,
    model : "X1 (F48)",
    features : ["Display","Connectivity","Air Condition"]
}

console.log(Fahad);
console.log(the_48_laws);
console.log(BMW);
