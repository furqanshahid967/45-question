function _car(Manufacturer, Role, aditional_info) {
    var car = {
        Manufacturer: "Tesla",
        Role: "Ford Mustang",
        aditional_info: undefined
    };
    return car;
}
var my_car = _car('Toyota', 'Corolla', { color: 'Red', transmission: 'Automatic' });
console.log(my_car);
