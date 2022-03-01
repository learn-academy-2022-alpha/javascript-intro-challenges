var groceryList = ['chip', 'dip','cookies']

// Write the code that will add "soda" to the end of the original array.

console.log(groceryList.push('soda'))
console.log(groceryList)

// Write the code that will add "granola" to the end of array without altering the original array.

console.log(groceryList.concat('granola'))
console.log(groceryList)

// Write the code that will return a subset of the array containing only "chips" and "dip".

console.log(groceryList.slice(0,2))

var subsetList = groceryList.slice(0,2)
console.log(subsetList)


// Write the code that will add "beans" to the "chips" and "dip" array.

console.log(subsetList.concat('Beans'))

// Write the code that will add the number 0 to the beginning of the array.
var numbers = [2, 4, 6 , 8, 10]
console.log(numbers.unshift(0))
// Write the code that will add the number 12 to the end of the array.
console.log(numbers.push(12))
console.log(numbers)
// Write the code that will remove the first number from the array.
console.log(numbers.shift())
console.log(numbers)
// Write the code that will add the number 0 to the beginning of the array without altering the original array. HINT: it's not .unshift You'll have to get creative! ;)
var zero = 0
var subset = (numbers.concat(zero))
console.log(subset.reverse())
