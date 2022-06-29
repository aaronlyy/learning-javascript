class Person {
    constructor(name, age, location) {
        this.name = name;
        this.age = age;
        this.location = location;
    }

    get name() {
        return this._name;
    }

    set name(newName) {
        if (newName.length > 0) {
            this._name = newName;
        }
    }

    printAll() {
        return `${this.name}, ${this.age}, ${this.location}`;
    }
}

let p1 = new Person("aaron", 20, "earth");
console.log(p1.name);

// check if object is instance of a specific class
console.log(p1 instanceof Person);


// class expressions
let Car = class {
    constructor(manufact) {
        this.manufact = manufact;
    }

   get manufact() {
        return this._manufact;
    }

    set manufact(manufact) {
        this._manufact = manufact;
    }
}

let m2 = new Car("bmw");
console.log(car.manufact);