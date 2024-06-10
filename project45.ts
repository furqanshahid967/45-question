// Define an interface for the Car with manufacturer and model as mandatory properties
interface Car {
    manufacturer: string;
    model: string;
    [key: string]: any; // Allow additional arbitrary properties
}

// Create a function that constructs a car object with required and additional info
function createCar(manufacturer: string, model: string, additionalInfo: { [key: string]: any } = {}): Car {
    // Create a base object with mandatory properties
    const car: Car = {
        manufacturer,
        model,
    };

    return car;
}
// Call the function with manufacturer, model, and additional keyword arguments
const myCar = createCar('Toyota', 'Corolla', { color: 'Red', transmission: 'Automatic' });

// Print the returned object to verify its content
console.log(myCar);