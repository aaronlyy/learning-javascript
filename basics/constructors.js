function Person(name, age, location) {

    if (!new.target) {
        // safe user from using constructor without the new keyword.
        return new Person(name, age, location);
    }

    this.name = name;
    this.age = age;
    this.location = location;

    this.full = () => {
        return this.name + ", " + this.age + ", " + this.location;
    };
}

let p1 = new Person("aaron", 20, "earth");

console.log(p1.name);

f = p1.full()
console.log(f);