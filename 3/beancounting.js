const countBs = function(s){
  let numberOfBs = 0
  for (let i=0;i<s.length;i++) {
    if (s[i]=="B") {
      numberOfBs ++
    }
  }
  return numberOfBs
}

console.log(countBs("BarBaCUE"),countBs("SUPERBBB"));

const countChar = function(s,char){
  let numberOfChars = 0
  for (let i=0;i<s.length;i++) {
    if (s[i]==char) {
      numberOfChars ++
    }
  }
  return numberOfChars
}

console.log(countChar('Jamon','J'),countChar('KKK','K'),countChar('papepipopu','p'))
