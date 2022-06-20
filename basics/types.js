// javascript has 7 primitive data types: null, undefined, boolean, number, string, symbol & bigint
// it also has 1 complex data type: object

// to get the type of a variable we use the function typeof(variable).
const age = 20;
console.log(typeof (age));

// null == undefined but not null === undefined
const x = null;
const y = undefined;
console.log(x == y);

// there is no difference between integers and floats
const c = 10;
const b = 14.34;
console.log(typeof (c));
console.log(typeof (b));

// we can get the range of numbner like this
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);

// we can use the Infinity & -Infinity to represent infinity
console.log(Infinity);
console.log(Number.MAX_VALUE + Number.MAX_VALUE);
console.log(-Number.MAX_VALUE - Number.MAX_VALUE);

// NaN stands for Not a Number. Any operation wir NaN returns NaN. NaN does not equal any value, including itself.
console.log(NaN / 2);
console.log(NaN == NaN);

// strings are immutable
let str = 'JavaScript';
str = str + ' String';
console.log(str);

// to create a bigint we add "n" at the end of a number
const big = 923456612344556343n;
console.log(typeof(big));

// different numbers
const q = 10; // decimal
const w = 080; // octal
const e = 0o71; // octal
const r = 0x1a; // hexadecimal
const t = 10.34 // float
const z = 3e2; // e notation
const u = 0b100010 // binary

console.log(u);

// an object is a collection of properties
let myObj = {
    name: "aaronlyy",
    age: 20,
    location: "earth"
};
console.log(myObj.name);