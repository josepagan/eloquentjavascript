//Write a program that creates a string that represents an 8x8 grid, using new line character to separate lines.
//At each position of the grid there is either a space or a "#" character. The characters should form a chess board.

var size = 8;
var boardString = "";
for (var line = 0; line < size; line++) {  //main loop that is executed for each line
var boardLine = "";
  while (boardLine.length < size) {  //loop keeps adding spaces and hush until necesary lenth
    if (line % 2 == 0) {
      boardLine += "# ";
    } else {
      boardLine += " #"
    }
  }
  boardLine += "\n";
  boardString += boardLine;
}
console.log(boardString) //for numbers divisible by 3 it should return Fizz instead of the numbe
