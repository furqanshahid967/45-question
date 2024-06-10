var users : string[] = ["Adil","Atif","Fahad","Bilal","Login"]

for( var user of users) {
    if (user == "Login") {
        console.log("Hello Login, would you like to see Reports");
    }
    else 
    {
        console.log(`Hello ${user}, thanks for login again`);
    }
}