// Create a function that constructs a car object with required and additional info
function createCar(manufacturer, model, additionalInfo) {
    if (additionalInfo === void 0) { additionalInfo = {}; }
    // Create a base object with mandatory properties
    var car = {
        manufacturer: manufacturer,
        model: model,
    };
    return car;
}
// Call the function with manufacturer, model, and additional keyword arguments
var myCar = createCar('Toyota', 'Corolla', { color: 'Red', transmission: 'Automatic' });
// Print the returned object to verify its content
console.log(myCar);
