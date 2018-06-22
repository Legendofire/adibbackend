let urlMap = new Map();

exports.storeShorthandURL = function(original_url, shorthand) {
    console.info('Started Storing Shorthand URL');
    if(shorthand){
      if(urlMap.has(shorthand)){
        console.log('Shorthand Already Exsists');
        return null;
      }else{
        urlMap.set(shorthand, original_url);
        console.log('Shorthand Stored Successfully');
        return shorthand;
      }
    }else{
      console.log('Generating Shorthand for URL');
      while(true){
        let shorthand = generateRandomString(8);
        if(!urlMap.has(shorthand)){
          urlMap.set(shorthand, original_url);
          return shorthand;
        }
        console.log('Generated Shorthand Clashed, Retrying');
      }
    }
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
