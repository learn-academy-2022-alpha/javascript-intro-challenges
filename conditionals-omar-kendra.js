//Write a statement that takes a variable of item and logs "in budget" if a price is $100 or less.

let item = 101
if (item <= 100) {
  console.log("in budget")
} else {
  console.log("out of budget")
}

// Write a statement that takes a variable of hungry and logs "eat food" if you are hungry and "keep coding" if you are not hungry.

var hungry = "no"
if (hungry === "yes"){
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

var firstNumber = 5
var secondNumber = 10
if (firstNumber > secondNumber) {
  console.log(firstNumber)
} else if (secondNumber > firstNumber) {
  console.log(secondNumber)
} else {
  console.log("the numbers are the same")
}

// var num1 = 5
// var num2 = 8
//   while (num1 < num2){
//   num1 += 1
// } while ( num1 > num2 ){
//   num1 -= 1
// } if ( num1 === num2 ){
//   console.log ("The different numbers have been made the same!")
// }

// Write a statement that takes a variable of a number and logs whether the number is odd, even, or zero.

var finalNumber = 20
if (finalNumber === 0) {
  console.log ("The number is zero")
} else if (finalNumber % 2 === 0) {
  console.log ("The number is even")
} else {
  console.log ("The number is odd")
}
