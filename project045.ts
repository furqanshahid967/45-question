interface Car {
    manufacturer : string
    role : string
    [key: string] : any
}

function _car(Manufacturer : string , Role : string , aditional_info : { [Key : string] : any}) {
     let car : Car = {
        Manufacturer : "Tesla",
        Role : "Ford Mustang",
        aditional_info : undefined
     };

     return car;
}

var my_car = _car('Toyota', 'Corolla', { color: 'Red', transmission: 'Automatic' });

console.log(my_car);
