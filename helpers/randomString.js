exports.generateRandomString= function(length){
  possibleChars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ01234567890";
  stringAccumelator = '';
  for(let i=0; i<length; i++){
    stringAccumelator = stringAccumelator + possibleChars[getRandomNumberBetween(0,possibleChars.length)];
  }
  return stringAccumelator;
}

function getRandomNumberBetween(start, end){
  let randomNumber = Math.floor((Math.random() * end) + start);
  return randomNumber;
}
