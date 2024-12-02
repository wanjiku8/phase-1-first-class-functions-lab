// Function to return the first two drivers
const returnFirstTwoDrivers = function (drivers) {
    return drivers.slice(0, 2);
};

// Function to return the last two drivers
const returnLastTwoDrivers = function (drivers) {
    return drivers.slice(-2);
};

// Array containing the two functions
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

// Higher-order function to create a fare multiplier
function createFareMultiplier(multiplier) {
    return function (fare) {
        return fare * multiplier;
    };
}

// Function that doubles the fare
const fareDoubler = createFareMultiplier(2);

// Function that triples the fare
const fareTripler = createFareMultiplier(3);

// Function that selects different drivers based on the passed function
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const selectDifferentDrivers = function(drivers, selectFunction) {
    return selectFunction(drivers);
};

// Call the functions and log the output
console.log(selectDifferentDrivers(drivers, returnFirstTwoDrivers)); 
console.log(selectDifferentDrivers(drivers, returnLastTwoDrivers)); 
