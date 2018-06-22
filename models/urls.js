let urlMap = new Map();

exports.storeShorthandURL = function(original_url, shorthand) {
    console.info('Storing Url/Shorthand Pair in Memory');
    shorthand = shorthand || generateRandomString(8);
    urlMap.set(shorthand, original_url);
    console.info('Finished Storing Url/Shorthand Pair in Memory');
    return shorthand;
}

exports.getOriginalUrl = function(shorthand) {
    console.info('Fetching Original URL from Memory');
    if(urlMap.has(shorthand)){
      console.log('Found Shorthand in Memory');
      return urlMap.get(shorthand);
    } else {
      console.log('Didn\'t Find Shorthand in Memory');
      return null;
    }
}

function generateRandomString(length){
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
