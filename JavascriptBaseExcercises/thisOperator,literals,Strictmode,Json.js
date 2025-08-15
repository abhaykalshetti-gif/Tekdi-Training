
// --- 'THIS' OPERATOR ---
// The 'this' keyword refers to the object it belongs to, but its value
// depends on how a function is called.
console.log('\n--- The "this" operator ---');
const person = {
    firstName: "John",
    lastName: "Doe",
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
};
console.log(`Full name from object method: ${person.fullName()}`);

// --- ITERATOR PROTOCOL ---
// An object is an iterator if it can be iterated over.
console.log('\n--- The Iterator Protocol ---');
const myIterable = {
    [Symbol.iterator]: function* () {
        yield 1;
        yield 2;
        yield 3;
    }
};

for (const value of myIterable) {
    console.log(`Iterating: ${value}`);
}

// --- TEMPLATE LITERALS ---
// Template literals provide a way to create strings with embedded expressions.
console.log('\n--- Template Literals ---');
const name = "Alice";
const greeting = `Hello, ${name}!`;
console.log(`Template literal example: ${greeting}`);

// --- STRICT MODE ---
// Strict mode adds a set of restrictions to make JavaScript safer.
// It can be applied to a script or a function.
console.log('\n--- Strict Mode ---');
"use strict";
// In strict mode, you cannot use an undeclared variable.
try {
    // someVariable = 10; // This would cause an error in strict mode
    console.log('Strict mode is active.');
} catch (e) {
    console.log(e.message);
}


// --- JSON BASICS ---
// JSON (JavaScript Object Notation) is a lightweight data-interchange format.
// It is a text-based format that is completely language independent.
console.log('\n--- JSON Basics ---');

// A JavaScript object
const employee = {
    id: 1,
    name: "Jane Doe",
    isManager: true,
    skills: ["JavaScript", "React", "Node.js"]
};
console.log("Original JavaScript object:");
console.log(employee);

// Convert a JavaScript object to a JSON string
const jsonString = JSON.stringify(employee, null, 2);
console.log("\nJSON string representation:");
console.log(jsonString);

// Convert a JSON string back to a JavaScript object
const parsedObject = JSON.parse(jsonString);
console.log("\nParsed JavaScript object from JSON:");
console.log(parsedObject);

// Note the key differences:
// - JSON property names must be double-quoted strings.
// - JSON values can be strings, numbers, objects, arrays, booleans, or null.
// - JSON does not support comments, functions, or `undefined`.
