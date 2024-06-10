function make_album(artist : string , Title : string , Tracks?:number) {
   var Album : {} = {
        artist : artist,
        title : Title
    }
    if (Tracks !== undefined) {
        Album["tracks"] = Tracks
    }
    return Album
}

console.log(make_album("The Beatles" ," Pepper's Lonely Hearts Club Band"));
console.log(make_album("Fleetwood Mac", "Rumours"));
console.log(make_album("Beyoncé ", "Lemonade" , 12));
