// Write the code that will log the outcome of 34 added to 71.
console.log(34 + 71)

//Write the code that will log the outcome of 67 subtracted from 123.
console.log(123 - 67)

//Write the code that will log the outcome of 56 multiplied by 23.
console.log(56 * 23)

//Write the code that will log the outcome of 45 divided by 5.
console.log(45 / 5)

//Write the code that will log the outcome of 5 to the power of 7.
console.log(5 ** 7)

//Write the code that will log the whole number remainder of 33 divided by 6.
console.log(33 / 6 - .5)

//Write the code that will log the length of a string containing your name.
console.log("Michael".length)

//Write the code that will log whether your string includes the letter "e" ?
var string1 = "Michael"
console.log(string1.includes("e"))

//Write the code that will log the character at the first index of the string.
console.log("Michael"[0])

//Write the code that will log the string in all uppercase letters.
var string1 = "Michael"
console.log(string1.toUpperCase())

//Write the code that will log true or false for the following:
//Is 34 divided by 3 greater than 67 divided by 2?
console.log(34 / 3 > 67 / 2)

//Does 5 evaluate to the same as "5"?
console.log(5 == "5")

//Does 5 strictly equal "5"?
console.log(5 === "5")

//Does !3 strictly equal 3?
console.log(!3 === 3)

//Does "LEARN".length strictly equal 5 AND "Student".length strictly equal 7 ?
console.log((("LEARN".length) === 5) && (("Student".length) === 7))

//Does "LEARN".length strictly equal 5 OR "Student".length strictly equal 10 ?
console.log((("LEARN".length) === 5) || (("Student".length) === 10))

//Does "LEARN" contain the subset "RN" ?
console.log("LEARN".includes("RN"))

//Does "LEARN" contain the subset "rn" ?
console.log("LEARN".includes("rn"))

//Does "LEARN"[0] strictly equal "l" ?
console.log(("LEARN"[0]) === "l")

//Modify the code from the previous question to return true.
console.log(("LEARN"[0]) === "L")

//Consider the variables:
var theQuestion = "life, the universe, and everything"
var theAnswer = 42

//Write the code that will log theAnswer divided by 2.
console.log(theAnswer / 2)

//Write the code that will log the length of theQuestion.
console.log(theQuestion.length)

//Write the code that will log the index of the character "f" in the theQuestion.
console.log(theQuestion.indexOf("f"))

//Write the code that will log the concatenation of the two variables.
console.log(theQuestion + theAnswer)

//Write the code that will log "the universe".
console.log(theQuestion.slice(6, 18))

//Write the code that will log the character "l" from theQuestion.
console.log(theQuestion.charAt(0))

//Write the code that will log whether theQuestion.length is greater than theAnswer.
console.log(theQuestion.length > theAnswer)

//Challenges
//Copy the challenges into your JavaScript file. Comment out the instructions and code the solution to each problem beneath the prompt.
//Make sure you try different options and change the variables to ensure properly working code.
//Write a statement that takes a variable of item and logs "in budget" if a price is $100 or less.

//Write a statement that takes a variable of hungry and logs "eat food" if you are hungry and "keep coding" if you are not hungry.

var hungry = "yes"
if (hungry === "yes") {
    console.log("eat food")
} else {
    console.log("keep coding")
}

//Write a statement that takes a variable of trafficLight and logs "go" if the light is green, "slow down" if the light is yellow and "stop" if the light is red.

var trafficLight = "green"
if (trafficLight === "green") {
    console.log("go")
} else if (trafficLight === "yellow") {
    console.log("slowdown")
} else if (trafficLight === "red") {
    console.log("stop")
}


//Write a statement that takes two variables that are numbers and outputs the larger number. If the numbers are equal, output "the numbers are the same".

var number1 = 4
var number2 = 4
if (number1 > number2) {
    console.log(number1)
} else if (number1 === number2) {
    console.log("the numbers are the same")
} else {
    console.log(number2)
}

//Write a statement that takes a variable of a number and logs whether the number is odd, even, or zero.

var number3 = 3
if (number3)

    //STRETCH Challenges
    //Write a statement that takes a variable of a grade percentage and logs the letter grade for that percentage, if the grade is 100% log "perfect score", if the grade is zero log "no grade available."
    var grade = 77
if (grade >= 90 && grade < 100) {
    console.log("A")
} else if (grade >= 80 && grade < 90) {
    console.log("B")
} else if (grade >= 70 && grade < 80) {
    console.log("C")
} else if (grade >= 60 && grade < 70) {
    console.log("D")
} else if (grade > 0 && grade < 60) {
    console.log("F")
} else if (grade = 0) {
    console.log("no grade available")
} else if (grade = 100) {
    console.log("perfect score")
}
//Write a statement that takes a variable of a boolean, number, or string data type and logs the data type of the variable. HINT: Check out the JavaScript typeof operator.

//Create a password checker using a single conditional statement. If a user inputs a password with 12 or more characters AND the password includes !, then log "That is a mighty strong password!" If the user’s password is 8 or more characters OR includes !, then log "That password is strong enough." Log "That is not a valid password." for every other input.
