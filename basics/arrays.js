let cars = ["bmw", "mercedes", "ferrari"];

// access array on index
console.log(cars[0]);

// re-assign values
cars[0] = "skoda";

// get the length of an array
console.log(cars.length);

// add an element
cars.push("fiat");

// add an element at index 0
cars.unshift("mini");

// remove the last element
cars.pop();

// remove first element
cars.shift();

// find index of an element
console.log(cars.indexOf("ferrari"));

// check if variable is an array
console.log(Array.isArray(cars));

