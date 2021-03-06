// Copy the challenges into your JavaScript file. Comment out the instructions and code the solution to each problem beneath the prompt. Each solution requires pseudocode. Test your functions with multiple function calls.
//
// Write a function named marco that returns "polo".
//
// const marco = () => {
//   return "Polo"
// }
// console.log(marco())

// Write a function named greeting that takes a name as an argument and returns "Welcome, <person's name here>!"
// const greeting = (name) => {
//     return `Welcome, ${name}`
// }
// console.log(greeting("Steve"))
// Write a function named oddOrEven that takes a number as an argument and returns whether the number is odd or even.
// const oddOrEven = (number) => {
//   if (number % 2 === 0) {
//     return "Number is even"
//   } else {
//     return "Number is odd"
//   }
// }
// console.log(oddOrEven(8))
// console.log(oddOrEven(7))
// Write a function named triple that takes a number as an argument and returns the result of that number multiplied by 3.
// const triple = (number) => {
//   return number * 3
// }
// console.log(triple(3))
// Write a function named multiply that takes two numbers as arguments and returns the result of the numbers multiplied together.
// const multiply = (num1, num2) => {
//   return num1 * num2
// }
// console.log(multiply(3, 4))
// Write a function named divisibleBy that takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs "10 is evenly divisible by 5".
// const divisibleBy = (num1, num2) => {
//   if (num1 % num2 === 0) {
//     return `${num1} is evenly divisible by ${num2}.`
//   } else {
//   return "Not evenly divisible."
//   }
// }
// console.log(divisibleBy(11,5))
// Write a function named assignGrade that takes a number score as an argument and returns the letter grade for the score.
// const assignGrade = (num) => {
//   if(num > 51 ){
//     return "A"
// } else {
//   return "f"
// }}
// console.log(assignGrade(60))
// console.log(assignGrade(20))
// Write a function named isLonger that takes two strings as arguments and returns the string that contains the most characters.
// const isLonger = (str1, str2) => {
//   if(str1.length > str2.length){
//   return `${str1} is longer than ${str2}`
// } else {
//   return `${str2} is longer than ${str1}`
// }}
// console.log(isLonger("hello","dog"))
// console.log(isLonger("sk","jdjdjdj"));

// Write a function named greaterNum that takes two numbers as arguments and returns whichever number is the greater (higher) number.
// const greaterNum = (num1, num2) => {
//   if(num1 > num2){
//     return num1
//   } else{
//     return num2
//   }
// }
// console.log(greaterNum(5,2))
// console.log(greaterNum(2,5))
// Write a function named yelling that takes a string as an argument and return the string in all uppercase case letters.
const yelling = (str) => {
  return str
}
console.log(yelling("hello").toUpperCase())
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
//
