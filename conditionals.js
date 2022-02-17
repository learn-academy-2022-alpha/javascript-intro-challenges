//Challenges
//Copy the challenges into your JavaScript file. Comment out the instructions and code the solution to each problem beneath the prompt.
//Make sure you try different options and change the variables to ensure properly working code.
//Write a statement that takes a variable of item and logs "in budget" if a price is $100 or less.
var price = 50
if (price <= 100) {
    console.log("in budget")
} else {
    console.log("over budget")
}
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

var number3 = 2
if (number3 === 0) {
    console.log("zero")
} else if (number3 % 2 == 0) {
    console.log("even")
} else {
    console.log("odd")
}

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
