let person = {
    name: "aaron",
    age: 20,
    location: "earth"
};

// access properties
console.log(person.name);
console.log(person["age"]);

// add property
person.eyecolor = "brown";
console.log(person.eyecolor);

// change property value
person.name = "ben";
console.log(person.name);

// delete property
delete person.location
console.log(person);

// check if a property exists
if ("name" in person) {
    console.log("Property 'name' exists!");
}

// object destructuring
let {eyecolor: eye, age: age} = person;
console.log(eye, age);