// Write a statement that takes a variable of item and logs "in budget" if a price is $100 or less.
var item = 50
if (item <= 100) {
    console.log("in budget")
}
// Write a statement that takes a variable of hungry and logs "eat food" if you are hungry and "keep coding" if you are not hungry.
var hungry = "hungry"
if (hungry) {
    console.log("eat food")
} else {
    console.log("keep coding")
}
// Write a statement that takes a variable of trafficLight and logs "go" if the light is green, "slow down" if the light is yellow and "stop" if the light is red.
var trafficLight = "green"
if (trafficLight === "green") {
    console.log("go")
} else if (trafficLight === "yellow") {
    console.log("slow down")
} else {
    console.log("stop")
}
// Write a statement that takes two variables that are numbers and outputs the larger number. If the numbers are equal, output "the numbers are the same".
var small = 15
var big = 15
if (small === big) {
    console.log("the numbers are the same")
} else if (small > big) {
    console.log(small + " is bigger than " + big)
} else {
    console.log(big + " is bigger than " + small)
}
// Write a statement that takes a variable of a number and logs whether the number is odd, even, or zero.
var num = 5;
if (num % 2 === 0) {
    console.log("even")
} else if (num % 2 === 1) {
    console.log("odd")
} else {
    console.log("zero")
}



// Write a statement that takes a variable of a grade percentage and logs the letter grade for that percentage, if the grade is 100% log "perfect score", if the grade is zero log "no grade available."
var grade = 100
if (grade === 100){
    console.log("perfect score")
}else console.log("no grade available")
// Write a statement that takes a variable of a boolean, number, or string data type and logs the data type of the variable. HINT: Check out the JavaScript typeof operator.
var dataType = 42
if (typeof dataType === "boolean"){
    console.log("Boolean")
}else if (typeof dataType === "string"){
    console.log("string")
}else if (typeof dataType === "number"){
    console.log("number")
}
    

// Create a password checker using a single conditional statement. If a user inputs a password with 12 or more characters AND the password includes !, then log "That is a mighty strong password!" If the user’s password is 8 or more characters OR includes !, then log "That password is strong enough." Log "That is not a valid password." for every other input.

var password = "lksjdflaskdjfks!"
if(password.length() >= 12 && password.includes("!")){
    console.log("That is a mighty strong password!")
}