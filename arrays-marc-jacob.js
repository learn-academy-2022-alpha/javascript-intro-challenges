var groceryList = ["chips", "dip", "cookies"]

// Write the code that will add "soda" to the end of the original array.
console.log(groceryList.push("soda"));
// Write the code that will add "granola" to the end of array without altering the original array.
console.log(groceryList.concat("granola"));

// Write the code that will return a subset of the array containing only "chips" and "dip".
var groceryList2 = groceryList.slice(0, 2)
console.log(groceryList2);

// Write the code that will add "beans" to the "chips" and "dip" array.
console.log(groceryList2.push("beans"));

var numbers = [2, 4, 6, 8, 10]
// Write the code that will add the number 0 to the beginning of the array.
console.log(numbers.unshift(0));

// Write the code that will add the number 12 to the end of the array.
console.log(numbers.push(12));

// Write the code that will remove the first number from the array.
console.log(numbers.shift());

// Write the code that will add the number 0 to the beginning of the array without altering the original array. HINT: it's not .unshift You'll have to get creative! ;)
var extra = [0]
console.log(extra.concat(numbers))
console.log(numbers);


var numSet = [2, 13, 6, 8, 4, 2]
// Write the code that finds the index of the first appearance of the number 2.
console.log(numSet.indexOf(2));

// Write the code that finds the index of the last appearance of the number 2.
console.log(numSet.lastIndexOf(2));

// Write the code that returns the number at the third index.
console.log(numSet[3]);

var characters = ["y", "a", "r", "r", "a"]
// Write the code that brings all the letters in the characters array together into a string.
console.log(characters.join(""));

// Write the code that reverses the order of the letters in the characters array and saves it into a variable called charsReversed.
var charsReversed = characters.reverse()

// Write the code that brings all the letters in the charsReversed array together into a string with an asterisk between each letter.
console.log(charsReversed.join("*"));

// Write the code that brings all the letters in the charsReversed array together into a string without separators.
console.log(charsReversed.join(""));

// Create two arrays consisting of three first names of your cohort members in each.
var firstCohort = ["marc", "nico", "jacob"]
var secondCohort = ["paula", "jose", "tiff"]

// Write the code that sorts the names in alphabetical order.
console.log(firstCohort.sort());
console.log(secondCohort.sort());

// Write the code that sorts the names in reverse alphabetical order.
console.log(firstCohort.reverse());
console.log(secondCohort.reverse());

// Write the code that sorts all the names in alphabetical order in a single array.
console.log(firstCohort.concat(secondCohort).sort());

var numbers = [42, 221, 71, 7, 18, 87]
var oddIndexes = []
// Write the code that logs the values from the numbers array that are at odd indexes.
var oddNumbers = numbers.filter((a, b) => {
    return b % 2 === 1}
    )

// Write the code that adds the values from odd indexes into the oddIndexes array.
console.log(oddIndexes.concat(oddNumbers));
