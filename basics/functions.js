// normal functions

function add(a, b) {
    return a + b;
}

function say(name, phrase="hello") {
    return phrase + " " + name + "!";
}

x = add(17, 17);
console.log(x);

console.log(say("aaron"));

// anonymous functions

let before = function () {
    console.log("before ES6");
}

let after = (n=1) => {
    for (let i = 0; i < n; i++) {
        console.log("after ES6");
    }
}

before();
after(3);