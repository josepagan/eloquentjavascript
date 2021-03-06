// Write a range function that takes two arguments, start and end, and returns an array containing all the numbers from start up to (and including) end.
//
// Next, write a sum function that takes an array of numbers and returns the sum of these numbers. Run the example program and see whether it does indeed return 55.
//
// // As a bonus assignment, modify your range function to take an optional third argument that indicates the “step” value used when building the array. If no step is given, the elements go up by increments of one, corresponding to the old behavior. The function call range(1, 10, 2) should return [1, 3, 5, 7, 9]. Make sure it also works with negative step values so that range(5, 2, -1) produces [5, 4, 3, 2].

const range = function(start, end, range) {
  var array = [];

  //we branch out into 2 different loops the first for positive steps the second for negative, (not very elegat but it works) the conditional is not perfect it might require exrtra work
  if (start < end) {
    for (let i = start; i < end + 1; i += range) {
        array.push(i);
      }
    } else {
      for (let i = start; i > end -1 ; i += range) {
        array.push(i);
    }
  }
  return array
}

console.log(range(5, 2, -1));


const sum = function(array) {
  let suma = 0
  for (let element of array) {
    suma += element;
  }
  return suma;
}
// console.log(sum([1,2,3,4]))
