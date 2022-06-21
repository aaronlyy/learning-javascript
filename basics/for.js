// for

for (let i = 0; i < 10; i++) {
    if (i === 3) {
        continue;
    }
    else if (i === 7) {
        break;
    }
    console.log(i);
}


// for in

let person = {
    name: "aaron",
    age: 20,
    location: "earth"
}

for (let i in person) {
    console.log(`${i}: ${person[i]}`);
}