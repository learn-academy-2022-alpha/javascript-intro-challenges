// Write a statement that takes a variable of item and logs "in budget" if a price is $100 or less.
var eggs = 10
if(eggs <= 100){
  console.log("in budget")
} else {
  console.log("not within budget")
}

// Write a statement that takes a variable of hungry and logs "eat food" if you are hungry and "keep coding" if you are not hungry.
var isHungry = "Hungry"
if(isHungry === "Hungry"){
  console.log("eat food")
} else {
  console.log("keep coding")
}
// Write a statement that takes a variable of trafficLight and logs "go" if the light is green, "slow down" if the light is yellow and "stop" if the light is red.
var trafficLight = "turquoise"
if(trafficLight === "green"){
  console.log("go")
} else if(trafficLight === "yellow"){
  console.log("slow down")
} else if(trafficLight === "red"){
  console.log("stop")
} else{
  console.log("Traffic light is broken.")
}
// Write a statement that takes two variables that are numbers and outputs the larger number. If the numbers are equal, output "the numbers are the same".
var firstNum = 8
var secondNum = 2
if(firstNum > secondNum){
  console.log(firstNum)
} else if(firstNum === secondNum){
  console.log("The numbers are the same.")
} else{
  console.log(secondNum)
}
// Write a statement that takes a variable of a number and logs whether the number is odd, even, or zero.
var num = 2
if(num === 0){
  console.log("The number is zero")
} else if(num%2 === 0){
  console.log("The number is even")
} else if(num%2 > 0){
  console.log("The number is odd")
}

// Write a statement that takes a variable of a grade percentage and logs the letter grade for that percentage, if the grade is 100% log "perfect score", if the grade is zero log "no grade available."
var gradePercent = 54
if(gradePercent === 100){
  console.log("Perfect Score")
} else if(gradePercent > 89 && gradePercent < 100){
  console.log("A")
} else if(gradePercent > 79 && gradePercent <= 89){
  console.log("B")
} else if(gradePercent > 69 && gradePercent <= 79){
  console.log("C")
} else if(gradePercent > 59 && gradePercent <= 69){
  console.log("D")
} else if(gradePercent === 0){
  console.log("No grade available")
} else if(gradePercent <= 59){
  console.log("F")
}
// Write a statement that takes a variable of a boolean, number, or string data type and logs the data type of the variable. HINT: Check out the JavaScript typeof operator.

// Create a password checker using a single conditional statement. If a user inputs a password with 12 or more characters AND the password includes !, then log "That is a mighty strong password!" If the user’s password is 8 or more characters OR includes !, then log "That password is strong enough." Log "That is not a valid password." for every other input.
