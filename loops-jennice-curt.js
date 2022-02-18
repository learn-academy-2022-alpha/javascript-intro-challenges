// Logging values with for loops
// Write a for loop that logs each number from 1 - 20.
// for(let i = 0; i < 21; i++){
//   console.log(i)
// }

// Write a for loop that logs the result of each number from 1 - 20 tripled.
// for(let i = 0; i < 21; i++){
//   console.log(i * 3)
// }

// Create a for loop that logs each even number from 1-20, and in the place of every odd number, returns the word "ODD" Expected output --> ODD, 2, ODD, 4, ODD, 6 ...etc
// for(let i = 0; i < 21; i++){
//   if(i % 2 == 0){
//     console.log(i)
//   } else{
//     console.log("ODD")
//   }
// }
// Looping over an array. Consider this variable:
// let nums = [3, 57, -9, 20, 67]
// Create a loop that will log the highest number from the array. Expected output --> 67
//  var largest = 0
// for(let i = 0; i < nums.length; i++){
// if(largest < nums[i]){
//  largest = nums[i]
// }
// console.log(largest)
// }

// let nums = [3, 57, -9, 20, 67]
// let highest = nums[0]
// for(let i = 0; i < nums.length; i++){
//   if (nums[i] > highest){
//      highest = nums[i]
//   }
// }
// console.log(highest)

// Create a loop that will log the lowest number from the array Expected output --> -9
// let nums = [3, 57, -9, 20, 67]
// let lowest = nums[0]
// for(let i = 0; i < nums.length; i++){
//   if (nums[i] < lowest){
//      lowest = nums[i]
//   }
// }
// console.log(lowest)


// Create a loop that will log the remainder of each number when divided by 2. Expected output --> 1, 1, -1, 0, 1
let nums = [3, 57, -9, 20, 67]
for(let i = 0; i < nums.length; i++){
    console.log(nums[i] % 2)
}

// Looping over a string. Consider this variable:
// var myString = "learn student"
// Write the code that will log the number of times the letter "e" occurs in the string. Expected output --> 2
