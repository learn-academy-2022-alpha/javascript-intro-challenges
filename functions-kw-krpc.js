// Challenges
// Copy the challenges into your JavaScript file. Comment out the instructions and code the solution to each problem beneath the prompt. Each solution requires pseudocode. Test your functions with multiple function calls.
//
// Write a function named marco that returns "polo".
// const marco = () => {
//   return "polo"
// }
// console.log(marco())
// Write a function named greeting that takes a name as an argument and returns "Welcome, <person's name here>!"
// const greeting = (personsName) => {
//   return `Welcome, ${personsName}!`
// }
// console.log(greeting("Keelan"))
// Write a function named oddOrEven that takes a number as an argument and returns whether the number is odd or even.
// const oddOrEven = (numberInput) => {
//   if (numberInput % 2 === 0){
//     return `${numberInput} is even.`
//   } else if (numberInput % 2 !== 0){
//     return `${numberInput} is odd.`
//   }
// }
// console.log(oddOrEven(6))
// Write a function named triple that takes a number as an argument and returns the result of that number multiplied by 3.
// const triple = (number) => {
//   return number * 3
// }
// console.log(triple(100))
// Write a function named multiply that takes two numbers as arguments and returns the result of the numbers multiplied together.
// const multiply = (numberOne, numberTwo) => {
//   return numberOne * numberTwo
// }
// console.log(multiply(2,4))
// Write a function named divisibleBy that takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs "10 is evenly divisible by 5".
// const divisibleBy = (n1,n2) => {
//   if (n1 % n2 === 0){
//     return `${n1} is evenly divisible by ${n2}.`
//   } else {
//     return `${n1} is not evenly divisible by ${n2}.`
//   }
// }
// console.log(divisibleBy(20,11))
// Write a function named assignGrade that takes a number score as an argument and returns the letter grade for the score.
const assignGrade = (score) => {
  if (score >= 90) {
    return `${score} would be an A!`
  } if else (score >= 80) {
    return `${score} would be a B.`
  } if else (score >= 70) {
    return `${score} would be a C..`
  } if else (score >= 60) {
      return `${score} would be a D...`
  } else {
        return "You fail...."
}

console.log(assignGrade(77))
// Write a function named isLonger that takes two strings as arguments and returns the string that contains the most characters.
//
// Write a function named greaterNum that takes two numbers as arguments and returns whichever number is the greater (higher) number.
//
// Write a function named yelling that takes a string as an argument and return the string in all uppercase case letters.
//
// STRETCH Challenges
// The World Translator
// (a) Write a function named helloWorld that takes a language code (e.g. "es", "de", "en") as an argument and returns "Hello World!" in the given language. Ensure you function works for at least 5 languages.
// (b) Have your function default to returning English.
//
// The Pluralizer
// (a) Write a function named pluralizer that takes a number and a singular noun as arguments and returns the number and pluralized form of the noun, if necessary.
//
// pluralizer(5, "cat")
// // expected output: "5 cats"
//
// pluralizer(1, "dog")
// // expected output: "1 dog"
// (b) Enhance your function so it can handle a few collective nouns like "sheep", "goose", "child", "person" and "species".
