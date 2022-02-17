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