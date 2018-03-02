//Write a program that uses console.log to print all the numbers from 1 to 100
//3 exeptions:
//for numbers divisible by 3 it should return Fizz instead of the number
//for numbers divisible by 5 it should return Buzz instead of the number
//for numbers divisible by 3 and 5 it should return FizzBuzz instead of the number

for (var counter = 1;counter<101;counter ++){
  if (counter % 3 == 0 && counter % 5 == 0){
    console.log('FizzBuzz');
  }
  else if (counter % 3 == 0) {
    console.log('Fizz');
  }
  else if (counter % 5 == 0){
    console.log('Buzz');
  }
  else {
    console.log(counter);
  }
}
