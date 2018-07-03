exports.generateRandomString= function(length){
  console.info('Generating Random String');
  possibleChars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ01234567890";
  stringAccumelator = '';
  for(let i=0; i<length; i++){
    stringAccumelator = stringAccumelator + possibleChars[getRandomNumberBetween(0,possibleChars.length)];
  }
  console.info('Finished Generating Random String');
  return stringAccumelator;
}

function getRandomNumberBetween(start, end){
  console.info('Generating Random Number');
  let randomNumber = Math.floor((Math.random() * end) + start);
  console.info('Finished Generating Random Number');
  return randomNumber;
}
