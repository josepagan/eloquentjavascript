// Here’s another way to define whether a positive whole number is even or odd:
//
//     Zero is even.
//
//     One is odd.
//
//     For any other number N, its evenness is the same as N - 2.
//
// Define a recursive function isEven corresponding to this description. The function should accept a single parameter (a positive, whole number) and return a Boolean.
//
// Test it on 50 and 75. See how it behaves on -1. Why? Can you think of a way to fix this?
const isEven = function(n){
  if (n == 0) {
    return "even";
  } else if (n == 1) {
    return "odd";
  } else {
    return isEven(n-2);
  }
}

console.log(isEven(0), isEven(1), isEven(2),isEven(3))
