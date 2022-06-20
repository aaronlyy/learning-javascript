let person = {
    name: "aaron",
    age: 20,
    location: "earth",
    greet() {
        console.log("Hello " + this.name + "!");
    },
    bye() {
        console.log("Bye " + this.name + "!");
    }
}

person.greet();
person.bye();