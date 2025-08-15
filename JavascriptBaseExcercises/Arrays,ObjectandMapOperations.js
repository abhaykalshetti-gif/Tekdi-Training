
// --- ARRAYS ---
// Arrays are ordered collections of values.
console.log('\n--- Arrays Demo ---');
const colors = ['red', 'green', 'blue'];
console.log(`Second color in the array: ${colors[1]}`); // Access by index
console.log(`Array length: ${colors.length}`);
colors.push('yellow'); // Add a new element to the end
console.log(`Updated array: ${colors}`);

// --- OBJECTS ---
// Objects are collections of key-value pairs.
console.log('\n--- Objects Demo ---');
const car = {
    make: 'Honda',
    model: 'Civic',
    year: 2020
};
console.log(`Car model: ${car.model}`); // Access a value using dot notation
console.log(`Car make: ${car['make']}`); // Access a value using bracket notation

// Array of Objects
console.log('\n--- Array of Objects Demo ---');
const students = [
    { name: 'Alice', age: 22 },
    { name: 'Bob', age: 24 },
    { name: 'Charlie', age: 23 }
];
console.log(`First student's name: ${students[0].name}`);

// --- MAPS ---
// Maps are collections of key-value pairs, where the keys can be of any data type.
console.log('\n--- Maps Demo ---');
const userRoles = new Map();
userRoles.set('Alice', 'Admin');
userRoles.set('Bob', 'Editor');
console.log(`Role of Alice: ${userRoles.get('Alice')}`);
console.log(`Map size: ${userRoles.size}`);
userRoles.delete('Bob');
console.log(`Is Bob in the map? ${userRoles.has('Bob')}`);
