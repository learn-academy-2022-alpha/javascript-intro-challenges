
// Write a statement that takes a variable of item and logs "in budget" if a price is $100 or less.

var item = "bread"
var price = 23

if(price > 0 && price <= 100){
console.log(`${item} is in budget`)
} else if(price > 100){
    console.log(`${item} is not in budget`)
 } else {
    console.log("Please enter item quantity")
 }

 // Write a statement that takes a variable of hungry and logs "eat food" if you are hungry and "keep coding" if you are not hungry.

 var hungry = false
 if(hungry === true){
  console.log("eat food")
 } else {
   console.log("keep coding")
}

// Write a statement that takes a variable of trafficLight and logs "go" if the light is green, "slow down" if the light is yellow and "stop" if the light is red.

var trafficLight = "green"

 if(trafficLight === "green") {
    console.log("go")
} else if(trafficLight === "yellow") {
          console.log("slow down") 
} else if(trafficLight === "red"){
                    console.log("stop")
 } else {
 console.log("type traffic light color")
 }


 // Write a statement that takes two variables that are numbers and outputs the larger number. If the numbers are equal, output "the numbers are the same".

var mynum1 = 5
 var mynum2 = 4

if(mynum1 > mynum2) {
   console.log(mynum1)
} else if(mynum1 < mynum2){
    console.log(mynum2)
} else if(mynum1 === mynum2){
    console.log("the numbers are the same")
}


// Write a statement that takes a variable of a number and logs whether the number is odd, even, or zero.

 var mynum3 = 0

 if(mynum3 === 0){
   console.log("zero")
} else if(mynum3 % 2 === 0){
   console.log("even")
} else if(mynum3 % 2 === 1){
    console.log("odd")
} else {
   console.log("enter a number")
 }


 // Write a statement that takes a variable of a grade percentage and logs the letter grade for that percentage, if the grade is 100% log "perfect score", if the grade is zero log "no grade available."

 var gradePercentage = 1

 if(gradePercentage === 100){
    console.log("perfect score")
} else if(gradePercentage === 0){
   console.log("no grade available")
}else if(gradePercentage >= 90 && gradePercentage <100){
    console.log("A")
 }else if(gradePercentage >= 80 && gradePercentage < 90){
   console.log("B")
}else if(gradePercentage >= 70 && gradePercentage < 80){
     console.log("C")
} else if(gradePercentage >= 60 && gradePercentage < 70){
    console.log("D")
} else if(gradePercentage >= 50 && gradePercentage < 60){
console.log("F")
} else {
    console.log("enter grade from 50 to 100")
 }


// Write a statement that takes a variable of a boolean, number, or string data type and logs the data type of the variable. HINT: Check out the JavaScript typeof operator.

var dataType = 42

console.log(typeof dataType)


// Create a password checker using a single conditional statement. If a user inputs a password with 12 or more characters AND the password includes !, then log "That is a mighty strong password!" If the user’s password is 8 or more characters OR includes !, then log "That password is strong enough." Log "That is not a valid password." for every other input.

var password = "12345678901234"

if(password.length >= 12 && password.includes("!")) {
    console.log("That is a mighty strong password!")
} else if(password.length >= 8 || password.includes("!")) {
    console.log("that password is strong enough.")
} else {
console.log("that is not a valid password.")
}