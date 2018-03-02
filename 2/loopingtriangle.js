//write a loop that makes seven calls to console.log to output the following triangle:
// #
// ##
// ###
// ####
// #####
// ######
// #######
for (var line = 0;line<8;line++){
  var row = 0;
  var hashString = "";
  while (row<line){
    hashString += "#";
    row ++;

  }
  console.log(hashString)
};
