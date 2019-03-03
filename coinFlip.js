function flip() {
  return Math.random() >= 0.5;
}

/*
formats seed to reach atleast 4 characters long, 
then changes to string to reach exactly 8 characters.
Return string of 8 characters
*/
function seedFormat(seed){
  while (seed < 9999)
    seed = seed * seed;
  
  let numStr = seed.toString();

  while (numStr.length < 8)
  numStr = "0" + numStr;

  return numStr;
}

/*
pulls substring to generate a new seed for new random number
*/
function newRandNum (seed){
  let formatSeed = seedFormat(seed); // 00250000,06250000
  let subStr = formatSeed.substring(1,6);  //2500,0025
  
  //mitigates when subStr = 0 (ie: 1,000,000)
  if (seed === 0)
    seed = new Date().getSeconds();

  return parseInt(subStr)
}

// PRNG MIDDLE-SQUARE METHOD
function randomNumber(n) {
  if (n < 1 || n >1000000)
    throw "Error: enter number between 0-1,000,000"
  if (n === 1){
    return console.log("0");
  }
 
  let result = newRandNum(n);

  
  if (result>n){
    do{
      result = newRandNum(result);
    } while(result > n)
  }
 if (flip())
    randomNumber(result);
  else
     console.log(result);  
}

randomNumber(1234);