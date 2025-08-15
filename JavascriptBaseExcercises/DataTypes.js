/**
 * script.js
 *
 * This script demonstrates the use of the 'typeof' operator in JavaScript,
 * which is used to check the data type of a value.
 */

// Function to run the demo and display the output
function runTypeofDemo() {
    // A plain object to hold the output, as there's no DOM to update
    let output = "--- typeof Operator Demo ---\n";

    // --- Primitive Data Types ---
    const myNumber = 42;
    const myBigInt = 9007199254740991n; // Note the 'n' for BigInt
    const myString = "Hello, world!";
    const myBoolean = true;
    const myNull = null;
    let myUndefined; // Declared but not assigned

    // --- Complex and Special Data Types ---
    const myObject = {};
    const mySymbol = Symbol("demo"); // A unique identifier
    const myFunction = () => {};

    // Use the typeof operator on each variable
    output += `typeof myNumber: ${typeof myNumber}\n`;
    output += `typeof myBigInt: ${typeof myBigInt}\n`;
    output += `typeof myString: ${typeof myString}\n`;
    output += `typeof myBoolean: ${typeof myBoolean}\n`;
    output += `typeof myNull: ${typeof myNull} (note: this is a historical bug)\n`;
    output += `typeof myUndefined: ${typeof myUndefined}\n`;
    output += `typeof myObject: ${typeof myObject}\n`;
    output += `typeof mySymbol: ${typeof mySymbol}\n`;
    output += `typeof myFunction: ${typeof myFunction}\n`;
    output += `typeof alert: ${typeof alert} (Note: a function is a type of object)\n`;

    // Log the output to the console
    console.log(output);
}

// Call the function to run the demonstration
runTypeofDemo();