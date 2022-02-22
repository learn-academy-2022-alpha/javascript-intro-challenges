// Logging values with for loops
   
// -Write a for loop that logs each number from 1 - 20.
    for(let i=1; i<21; i++){
      console.log(i)
    }
// -Write a for loop that logs the result of each number from 1 - 20 tripled.
    var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

    for(let i=0; i<arr.length; i++){
        console.log(arr[i] * 3)
      }
// -Create a for loop that logs each even number from 1-20, and in the place of every odd number, returns the word "ODD" Expected output --> ODD, 2, ODD, 4, ODD, 6 ...etc
    // var arr = [0, "ODD", 2, "ODD", 4, "ODD", 6, "ODD", 8, "ODD", 10, "ODD", 12, "ODD", 14, "ODD", 16, "ODD", 18, "ODD", 20]

    for(let i=1; i<21; i++){
      if(arr[i] !== (0)){
        console.log(arr[i])
      }      
    }
// Looping over an array. Consider this variable:
    var nums = [3, 57, -9, 20, 67]
// Create a loop that will log the highest number from the array. Expected output --> 67
    
// Create a loop that will log the lowest number from the array Expected output --> -9

// Create a loop that will log the remainder of each number when divided by 2. Expected output --> 1, 1, -1, 0, 1
    
// Looping over a string. Consider this variable:
// var myString = "learn student"

// Write the code that will log the number of times the letter "e" occurs in the string. Expected output --> 2




// STRETCH Challenges
// Even or Odd: Write a for loop that iterates from 0 to 15. For each iteration, it will check if the current number is odd or even, and display the appropriate outcome. Expected output --> "0 is even" "1 is odd" "2 is even" ...etc
// Fizz Buzz: Use a for loop to log all numbers from 1-100. If a number is a multiple of 3, replace it with the word fizz. If a number is a multiple of five, replace it with the word buzz. If a number is a multiple of both 3 and 5, replace it with fizzbuzz. Expected output --> 1, 2, "fizz", 4, "buzz", "fizz", 7, 8, "fizz", "buzz", 11, "fizz", 13, 14, "fizzbuzz" ...etc
