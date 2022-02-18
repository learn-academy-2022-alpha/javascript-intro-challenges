// 1. Logging values with for loops
// Write a for loop that logs each number from 1-20

for(let i=1; i<21; i++){
  console.log(i)
}
// Write a for loop that logs the result of each number from 1-20 tripled.
for(let i=1; i<21; i++){
    console.log(i * 3)
}
// Create a for loop that logs each even number from 1-20, and in the place of every odd number, returns the word "ODD"
for(let i=1; i<21; i++){
    if(i % 2 !== 0){
        console.log("ODD")
    }else{
        console.log(i)
    }

}
// 2. Looping over an array. Consider this variable:
// Create a loop that will log the highest number from the array. Expected output --> 67

var nums = [3, 57, -9, 20, 67]

for(let i=0; i<1; i++){
    let orderedNums = nums.sort((a,b)=>a-b)
    let highestNumber = nums.length - 1
    console.log(orderedNums[highestNumber])
}
