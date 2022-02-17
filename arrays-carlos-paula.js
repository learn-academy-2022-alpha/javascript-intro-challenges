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

var number = [2,4,6,8,10]
var zero = 0
console.log(zero.concat(number))