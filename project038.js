function describe_cities(city, country) {
    if (city === void 0) { city = "Karachi"; }
    if (country === void 0) { country = "Pakistan"; }
    console.log("\n \t".concat(city, " is in ").concat(country, " \n \t"));
}
describe_cities();
describe_cities("Istanbol", "Turkey");
describe_cities("New York", "US");
