//Challenges
//Logging values with for loops
//Write a for loop that logs each number from 1 - 20.
// for (let i = 1; i < 21; i++) {
//     console.log(i)
// }
//Write a for loop that logs the result of each number from 1 - 20 tripled.
// for (let i = 1; i < 21; i++) {
//     console.log(i * 3)
// }
//Create a for loop that logs each even number from 1-20, and in the place of every odd number, returns the word "ODD" Expected output --> ODD, 2, ODD, 4, ODD, 6 ...etc
// for (let i = 1; i < 21; i += 2) {
//     console.log(i)
//     console.log("odd")
// }


// var nums = [3, 57, -9, 20, 67]
// var largest = 0;
// var smallest = 0;

// Create a loop that will log the highest number from the array. Expected output --> 67
// for (let i = 0; i < nums.length; i++){
//     if (nums[i]>largest){
//         largest = nums[i]
//     }
// }
// console.log(largest);
// Create a loop that will log the lowest number from the array Expected output --> -9
// for (let i = 0; i < nums.length; i++){
//     if (nums[i]< smallest){
//         smallest = nums[i]
//     }
// }
// console.log(smallest);





// Create a loop that will log the remainder of each number when divided by 2. Expected output --> 1, 1, -1, 0, 1
// for (let i = 0; i < nums.length; i++){
//     console.log(nums[i]%2);
// }



// Write the code that will log the number of times the letter "e" occurs in the string. Expected output --> 2
var myString = "learn student"
var count = 0
for (let i = 0; i < myString.length; i++){
    if(myString[i] === "e"){
        count += 1
    }

}
console.log(count);