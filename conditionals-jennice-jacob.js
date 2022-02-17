//Write a statement that takes a variable of item and logs "in budget" if a price is $100 or less.
// Challenge #1
var item = 50

if (item <= 100) {
    console.log ("Your item is within budget!")
}
//Write a statement that takes a variable of hungry and logs "eat food" if you are hungry and "keep coding" if you are not hungry.
//Challenge #2
var hungry = true

if (hungry === true) {
    console.log("Go cook rice!!!")
    } else
{
    console.log("Keep coding!")
}
//Write a statement that takes a variable of trafficLight and logs "go" if the light is green, "slow down" if the light is yellow and "stop" if the light is red.
//Challenge #3
var light = "yellow"

if  (light === "green" ) {
    console.log("Go!")
}   else if (light === "yellow") {
    console.log("Slow down!")
}
    else if (light === "red") {
    console.log("Stop!")
}
//Write a statement that takes two variables that are numbers and outputs the larger number. If the numbers are equal, output "the numbers are the same".
//Challenge #4
var numberOne = 56
var numberTwo = 1337

if  (numberOne < numberTwo ) {
    console.log(numberTwo)
}   else if (numberOne > numberTwo) {
    console.log(numberOne) }
    else if (numberOne === numberTwo) {
        console.log ("They are both equal!")

}

//Write a statement that takes a variable of a number and logs whether the number is odd, even, or zero.
// Challenge #5
var number = 7

if  (number % 2 === 0 ) {
    console.log("Your number is even")
}   else if (number % 2 === 1) {
    console.log("Your number is odd") }
else if (number === 0) {
    console.log ("Your number is 0")

}


//STRETCH Challenges
//Write a statement that takes a variable of a grade percentage and logs the letter grade for that percentage, if the grade is 100% log "perfect score", if the grade is zero log "no grade available."

//Write a statement that takes a variable of a boolean, number, or string data type and logs the data type of the variable. HINT: Check out the JavaScript typeof operator.


//Create a password checker using a single conditional statement. If a user inputs a password with 12 or more characters AND the password includes !,
// then log "That is a mighty strong password!" If the user’s password is 8 or more characters OR includes !, then log "That password is strong enough." Log "That is not a valid password." for every other input.

