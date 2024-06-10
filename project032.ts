var current_users : string[] =  ["usman","nadir","SAMEER","saim","JHON"]

var new_users : string[] =  ["USMAN","nadir","same","haroon","IBRAHIM"]

for (var current_user of current_users) {
    for (var new_user of new_users) {
        if (new_user === current_user) {
            console.log(`${new_user} will need to enter a new username`);
        }
        else{
            console.log(`${new_user} username is available`);
        }
    }
}