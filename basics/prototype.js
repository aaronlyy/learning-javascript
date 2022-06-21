function Person(name, age, location) {
    this.name = name;
    this.age = age;
    this.location = location;
}

Person.prototype.greet = function () {
    console.log("Hello " + this.name + "!");
}

p1 = new Person("aaron", 20, "earth");

p1.greet();