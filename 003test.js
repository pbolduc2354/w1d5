function mode(arr) {
  var numMapping = {};
  var greatestFreq = 0;
  var mode;

  arr.forEach(function findMode(number){
    numMapping[number] =+ (numMapping[number] || 0) + 1  ;
    // console.log(numMapping)
    if (numMapping[number] > greatestFreq) {
      greatestFreq = numMapping[number];
      mode = number
    }
  });
  return mode;
}

mode([1,5,2,6,3,5])// === 5:
mode([0,1,5,2,6,2,5,0,0]) //=== 0: