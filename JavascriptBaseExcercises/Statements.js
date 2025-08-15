
// IF/ELSE statement
// This is used to execute a block of code if a condition is true.
let temperature = 25;
if (temperature > 30) {
    console.log("It's a hot day!");
} else if (temperature > 20) {
    console.log("It's a pleasant day.");
} else {
    console.log("It's a bit chilly.");
}

console.log('---');

// SWITCH statement
// This is used to perform different actions based on different conditions.
let day = "Monday";
switch (day) {
    case "Monday":
        console.log("Start of the work week.");
        break;
    case "Friday":
        console.log("Almost the weekend!");
        break;
    default:
        console.log("It's a regular weekday.");
        break;
}

// --- LOOPS and CONTROL STATEMENTS ---

// FOR loop
// This loop iterates a specific number of times.
console.log('\n--- FOR loop demo ---');
for (let i = 0; i < 3; i++) {
    console.log(`The number is ${i}`);
}

// WHILE loop
// This loop continues as long as a condition is true.
console.log('\n--- WHILE loop demo ---');
let count = 0;
while (count < 3) {
    console.log(`Count is ${count}`);
    count++;
}

// forEach loop with an array
// This is a common way to iterate over array elements.
console.log('\n--- forEach loop demo ---');
const fruits = ['apple', 'banana', 'cherry'];
fruits.forEach(function(fruit) {
    console.log(`I have a ${fruit}`);
});

// The 'continue' statement
// This skips the current iteration of the loop and continues to the next.
console.log('\n--- continue statement demo ---');
for (let i = 0; i < 5; i++) {
    if (i === 2) {
        continue; // Skips the rest of the code for this iteration
    }
    console.log(`The number is ${i}`);
}

// The 'break' statement
// This terminates the loop entirely.
console.log('\n--- break statement demo ---');
for (let i = 0; i < 5; i++) {
    if (i === 3) {
        break; // Exits the loop completely
    }
    console.log(`The number is ${i}`);
}
