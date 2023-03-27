// Firs solution: For iof loop.
// This type of loop iterates over the elements in an array.

function getTemperatureReport(cities) {
  const statements = [];
  for (const city of cities) {
    const degrees = temperatureService(city);
    const statement =
      "The temperature in " + city + " is " + degrees + " degrees ";
    statements.push(statement);
    console.log(statements);
  }
  statements;
}

// The second version: Normal for loop.
// This type of loop iterates from a number (in our case 0) to another number (in our case, the length of the array)

function getTemperatureReport(cities) {
  const statements = [];
  for (let i = 0; i < cities.length; i++) {
    const degrees = temperatureService(cities[i]);
    const statement =
      "The temperature in " + cities[i] + " is " + degrees + " degrees ";
    statements.push(statement);
  }
  statements;
}

// The third way we looked at using the map function on an array.
// We create a function that will get passed an element of the array (getStatement)
// We then pass this function to the map function which we call on the array.

function getStatement(city) {
  const degrees = temperatureService(city);
  const statement =
    "The temperature in " + city + " is " + degrees + " degrees ";
  return statement;
}

function getTemperatureReport(cities) {
  return cities.map(getStatement);
}

// The final way was by passing the other function directly into the map function.
// This is exactly the same way as above.

function getTemperatureReport(cities) {
  return cities.map(function (city) {
    const degrees = temperatureService(city);
    const statement =
      "The temperature in " + city + " is " + degrees + " degrees ";
  });
}

// Round a number to 2 decimal places

// Version 1
const num = 12.45673467;
const rounded = Math.round(num * 100) / 100;

// Version 2 (Be careful with this one as it will only work if the variable is a number as a string)
const strNum = "12.45";
const convertedToNumber = Number(strNum);
console.log(typeof num); // this will return "number"
