// --- NULL and UNDEFINED VALUES ---

// The 'undefined' value means a variable has been declared but not assigned a value.
let myHobby;
console.log(`The value of myHobby is: ${myHobby}`); // Output: undefined
console.log(`The type of myHobby is: ${typeof myHobby}`); // Output: undefined

console.log('---');

// You can explicitly assign 'undefined' but it is not recommended.
let city = "New York";
city = undefined;
console.log(`The value of city is: ${city}`); // Output: undefined

console.log('---');

// The 'null' value represents the intentional absence of any value.
let myAge = null;
console.log(`The value of myAge is: ${myAge}`); // Output: null
console.log(`The type of myAge is: ${typeof myAge}`); // Output: object (This is a historical bug in JavaScript)

// Type c=Coersion

//implicit
let x = "5" + 5; // The number 5 is coerced to a string "5"
console.log(x);  // "55"

let y = 10 * "2"; // The string "2" is coerced to a number 2
console.log(y); // 20

// explicit
let strNumber = "123";
let num = Number(strNumber); // Explicitly converts the string to a number
console.log(num);           // 123

let myNumber = 456;
let str = String(myNumber); // Explicitly converts the number to a string
console.log(str);           // "456"