// Write a function named marco that returns "polo".
const marco = () => {
  return "polo"
}
console.log(marco())
// Write a function named greeting that takes a name as an argument and returns "Welcome, <person's name here>!"
const greeting = (userName) => {
  return `Welcome, ${userName}!`
}
console.log(greeting("Alex"))
// Write a function named oddOrEven that takes a number as an argument and returns whether the number is odd or even.
const oddOrEven = (num) => {
  if(num % 2 === 0){
    return `${num} is an even number`
  } else {
    return `${num} is an odd number`
  }
}
console.log(oddOrEven(3))
// Write a function named triple that takes a number as an argument and returns the result of that number multiplied by 3.
const triple = (number) => {
  return `${number * 3}`
}
console.log(triple(3))
// Write a function named multiply that takes two numbers as arguments and returns the result of the numbers multiplied together.
const multiply = (num1, num2) => {
  return `${num1 * num2}`
}
console.log(multiply(2,3))
// Write a function named divisibleBy that takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs "10 is evenly divisible by 5".
const divisibleBy = (number1, number2) => {
  if(number1 % number2 === 0){
    return `${number1} is evenly divisible by ${number2}`
  }
   else {
    return `${number1} is not evenly divisible by ${number2}`
  }
}
console.log(divisibleBy(50,5))
// Write a function named assignGrade that takes a number score as an argument and returns the letter grade for the score.
const assignGrade = (numScore) => {
  if(numScore >= 90) {
    return "A"
  } else if(numScore >= 80){
    return "B"
  } else if(numScore >= 70){
    return "C"
  } else if(numScore >= 60){
    return "D"
  } else{
    return "F"
  }
}
console.log(assignGrade(55))
// Write a function named isLonger that takes two strings as arguments and returns the string that contains the most characters.
const isLonger = (string1, string2) => {
  if(string1.length > string2.length){
    return `${string1}`
  } else {
    return `${string2}`
  }
  }
console.log(isLonger("egg", "alex"))
// Write a function named greaterNum that takes two numbers as arguments and returns whichever number is the greater (higher) number.
const greaterNum = (n1, n2) => {
  if(n1 > n2){
    return `${n1}`
  }
  else {
    return `${n2}`
  }
}
console.log(greaterNum(7,3))
// Write a function named yelling that takes a string as an argument and return the string in all uppercase case letters.
const yelling = (s1) => {
  return s1.toUpperCase()
}
console.log(yelling("hello world"))
// STRETCH Challenges
// The World Translator
// (a) Write a function named helloWorld that takes a language code (e.g. "es", "de", "en") as an argument and returns "Hello World!" in the given language. Ensure you function works for at least 5 languages.
const helloWorld = (languageCode) => {
  if(languageCode === "es"){
    return "Hola Mundo"
  } else if(languageCode === "jpn"){
    return "Konnichiwa Sekai"
  } else if(languageCode === "fr"){
    return "Bonjour le monde"
  } else if(languageCode === "kor"){
    return "Annyeonghaseyo Segye"
  } else{
    return "Hello World"
  }
}
console.log(helloWorld("en"))
// (b) Have your function default to returning English.

// The Pluralizer
// (a) Write a function named pluralizer that takes a number and a singular noun as arguments and returns the number and pluralized form of the noun, if necessary.
const pluralizer = (amount, noun) => {
  if(amount > 1){
    return `${amount} ${noun}s`
  } else if(amount === 1){
    return `${amount} ${noun}`
  } else{
    return "To pluarlize, please enter a number greater than 0."
  }
}
console.log(pluralizer(5, "dog"))
// pluralizer(5, "cat")
// // expected output: "5 cats"

// pluralizer(1, "dog")
// // expected output: "1 dog"
// (b) Enhance your function so it can handle a few collective nouns like "sheep", "goose", "child", "person" and "species".
