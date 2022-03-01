// Challenges
// Write the code that will log the outcome of 34 added to 71.
console.log(34 + 71)
// Write the code that will log the outcome of 67 subtracted from 123.
console.log(123 - 67)
// Write the code that will log the outcome of 56 multiplied by 23.
console.log(56 * 23)
// Write the code that will log the outcome of 45 divided by 5.
console.log(45 / 5)
// Write the code that will log the outcome of 5 to the power of 7.
console.log(5 ** 7)
// Write the code that will log the whole number remainder of 33 divided by 6.
console.log(33 % 6)
// Write the code that will log the length of a string containing your name.
console.log("jose".length)
// Write the code that will log whether your string includes the letter "e"?
console.log("jose".indexOf("e"))
// Write the code that will log the character at the first index of the string.
console.log("jose"[0])
// Write the code that will log the string in all uppercase letters.
console.log("jose".toUpperCase())

// Write the code that will log true or false for the following:
// Is 34 divided by 3 greater than 67 divided by 2?
console.log(34 / 3 > 67 / 2)
// Does 5 evaluate to the same as "5"?
console.log(5 == "5");
// Does 5 strictly equal "5"?
console.log(5 === "5");
// Does !3 strictly equal 3?
console.log(!3 === 3);
// Does "LEARN".length strictly equal 5 AND "Student".length strictly equal 7?
console.log(("LEARN".length === 5) && ("Student".length === 7);
// Does "LEARN".length strictly equal 5 OR "Student".length strictly equal 10?
console.log(("LEARN".length === 5) || ("Student".length === 10);
// Does "LEARN" contain the subset "RN"?
console.log("LEARN".includes("RN"));
// Does "LEARN" contain the subset "rn"?
console.log("LEARN".includes("rn"));
// Does "LEARN"[0] strictly equal "l"?
console.log("LEARN"[0] === "l");
// Modify the code from the previous question to return true.
console.log("LEARN"[0] === "L");
// Consider the variables:
//
// var theQuestion = "life, the universe, and everything"
// var theAnswer = 42
// Write the code that will log theAnswer divided by 2.
// Write the code that will log the length of theQuestion.
// Write the code that will log the index of the character "f" in the theQuestion.
// Write the code that will log the concatenation of the two variables.
// Write the code that will log "the universe".
// Write the code that will log the character "l" from theQuestion.
// Write the code that will log whether theQuestion.length is greater than theAnswer.

//-------------- Conditional challenges ------------//
// Write a statement that takes a variable of item and logs "in budget" if a price is $100 or less.
var budget = 101

if (budget <= 100) {
  console.log("In budget!")
} else {
  console.log("Not in budget")
}
// Write a statement that takes a variable of hungry and logs "eat food" if you are hungry and "keep coding" if you are not hungry.
var hungry = false

if (hungry === true) {
  console.log("Eat food")
} else {
  console.log("Keep coding")
}

// Write a statement that takes a variable of trafficLight and logs "go" if the light is green, "slow down" if the light is yellow and "stop" if the light is red.
var trafficLight = "red"

if (trafficLight === "green") {
  console.log("Go!")
} else if (trafficLight === "yellow") {
  console.log("Slow down!")
} else if (trafficLight === "red") {
  console.log("Stop!")
} else {
  console.log("Enter a color")
}

// Write a statement that takes two variables that are numbers and outputs the larger number. If the numbers are equal, output "the numbers are the same".
var numOne = 2
var numTwo = 5

if (numOne > numTwo){
  console.log(numOne)
} else if (numTwo > numOne) {
  console.log(numTwo)
} else if (numOne === numTwo) {
  console.log("The numbers are the same")
} else {
  console.log("Enter a number")
}


// Write a statement that takes a variable of a number and logs whether the number is odd, even, or zero.
var num = 25

if (num === 0) {
  console.log("Your number is zero.")
} else if (num % 2 === 0) {
  console.log("Number is even.")
} else if (num % 2 !== 0){
  console.log("Number is odd.")
} else {
  console.log("Enter a number!")
}


// STRETCH Challenges
// Write a statement that takes a variable of a grade percentage and logs the letter grade for that percentage, if the grade is 100% log "perfect score", if the grade is zero log "no grade available."
var grade = 80

if (grade === 100) {
  console.log("Perfect Score!")
} else if (grade >= 90) {
  console.log("You got an A.")
} else if (grade >= 80) {
  console.log("You got an B.")
} else if (grade >= 70) {
  console.log("You got an C.")
} else if (grade >= 60) {
  console.log("You got an D.")
} else if (grade >= 50) {
  console.log("You got an F.")
} else {
  console.log("Enter a number")
}

// Write a statement that takes a variable of a boolean, number, or string data type and logs the data type of the variable. HINT: Check out the JavaScript typeof operator.
var whatType = "yooooo"

console.log(typeof whatType)

// Create a password checker using a single conditional statement. If a user inputs a password with 12 or more characters AND the password includes !, then log "That is a mighty strong password!" If the user’s password is 8 or more characters OR includes !, then log "That password is strong enough." Log "That is not a valid password." for every other input.
var password = "learn academy!"

if (password.includes("!") && password.length >= 12) {
  console.log("This is a mighty strong password!")
} else if (password.length >= 8 || password.includes("!")) {
  console.log("This password is strong enough.")
} else {
  console.log("That is not a valid password.")
}
