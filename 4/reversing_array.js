// Reversing an array
//
// Arrays have a reverse method which changes the array by inverting the order in which its elements appear. For this exercise, write two functions, reverseArray and reverseArrayInPlace. The first, reverseArray, takes an array as argument and produces a new array that has the same elements in the inverse order. The second, reverseArrayInPlace, does what the reverse method does: it modifies the array given as argument by reversing its elements. Neither may use the standard reverse method.
//
// Thinking back to the notes about side effects and pure functions in the previous chapter, which variant do you expect to be useful in more situations? Which one runs faster?

const reverseArray = function(array) {
  let newArray = [];
  for (let i = array.length - 1; i >-1; i--) {
    newArray.push(array[i]);
  }
  return newArray;
}

// console.log('reverseArray:',reverseArray([1,2,3]));

const reverseArrayInPlace = function(array){
  for (let i = array.length - 1; i > -1 ;i--){
    let element = array[i]
    array.splice(i,1);
    array.push(element);
  }
}

let someArray = ['a','b','c','d'];
console.log(someArray);
reverseArrayInPlace(someArray);
console.log(someArray);
