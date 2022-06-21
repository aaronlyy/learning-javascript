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