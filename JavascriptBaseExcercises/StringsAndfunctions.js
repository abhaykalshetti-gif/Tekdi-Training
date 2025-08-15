// SECTION 1: STRINGS AND STRING FUNCTIONS
const myString = "Hello, JavaScript!";
console.log(`The original string is: "${myString}"`);
console.log(`String length: ${myString.length}`);

// Case conversion functions
console.log(`Lowercase version: ${myString.toLowerCase()}`);
console.log(`Uppercase version: ${myString.toUpperCase()}`);

// Searching for substrings
console.log(`Index of 'Java': ${myString.indexOf('Java')}`);
console.log(`Does it include 'Script'? ${myString.includes('Script')}`);
console.log(`Does it start with 'Hello'? ${myString.startsWith('Hello')}`);
console.log(`Does it end with '!'? ${myString.endsWith('!')}`);

// Slicing and replacing
console.log(`Substring from index 7: ${myString.slice(7)}`);
console.log(`Replacing 'JavaScript' with 'World': ${myString.replace('JavaScript', 'World')}`);

// Concatenation and trimming
const str1 = "  Hello  ";
const str2 = " World ";
console.log(`Concatenating and trimming: "${str1.trim() + str2.trim()}"`);
console.log(`Trimmed string: "${str1.trim()}"`);

// Splitting a string into an array
const sentence = "The quick brown fox";
const words = sentence.split(" ");
console.log(`Splitting a sentence:`, words);

// Repeating a string
const myRepeatString = "Ha";
console.log(`Repeating 'Ha' 3 times: ${myRepeatString.repeat(3)}`);
