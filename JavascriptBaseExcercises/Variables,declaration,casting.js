let oldStyleVariable = "I am function-scoped.";

let reassignableVariable = "This is the initial value.";
console.log(reassignableVariable);
reassignableVariable = "This is the new value.";
console.log(reassignableVariable);

const PI = 3.14159;
console.log(`The value of PI is: ${PI}`);

const integer = 100;
const float = 3.14;
const specialNumber = Infinity;
const notANumber = NaN;
console.log(`Number examples: ${integer}, ${float}, ${specialNumber}, ${notANumber}`);

const bigNumber = 9007199254740991n;
console.log(`BigInt example: ${bigNumber}`);

const singleQuoteString = 'Hello World';
const doubleQuoteString = "JavaScript";
const templateLiteral = `The current year is ${new Date().getFullYear()}`;
console.log(`String examples: ${singleQuoteString}, ${doubleQuoteString}`);
console.log(`Template literal example: ${templateLiteral}`);

const isUserLoggedIn = true;
const hasAdminRights = false;
console.log(`Boolean examples: ${isUserLoggedIn}, ${hasAdminRights}`);

let myAge = null;
console.log(`Null example: ${myAge}`);

let myHobby;
console.log(`Undefined example: ${myHobby}`);

const id = Symbol('userId');
console.log(`Symbol example: ${String(id)}`);

const stringValue = "5";
const numberValue = 10;
const result = stringValue + numberValue;
console.log(`Implicit coercion result: ${result} (string)`);

const strNumber = "123";
const castNumber = Number(strNumber);
console.log(`Casting a string to a number: ${castNumber} (type: ${typeof castNumber})`);

const num = 456;
const castString = String(num);
console.log(`Casting a number to a string: ${castString} (type: ${typeof castString})`);

const nonZeroNumber = 1;
const zeroNumber = 0;
const emptyString = "";
const castBoolean1 = Boolean(nonZeroNumber);
const castBoolean2 = Boolean(zeroNumber);
const castBoolean3 = Boolean(emptyString);
console.log(`Casting to boolean: ${castBoolean1}, ${castBoolean2}, ${castBoolean3}`);

const priceText = "19.99";
const parsedPrice = parseFloat(priceText);
console.log(`Parsing a float from a string: ${parsedPrice} (type: ${typeof parsedPrice})`);

console.log("\n--- Demo Summary ---");
console.log("Variables are declared with 'let', 'const', or 'var'.");
console.log("Data types include Number, String, Boolean, and more.");
console.log("Type coercion can happen automatically or be done manually.");
