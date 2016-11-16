//==================================================================
//Roman Numerals

function convertToRoman(num) {
  var rom = [];
  var code = ['I','V','X','L','C','D','M'];
 
  //Fetch all the roman factors
  var romf = [];
  var div =10;
  while(num !== 0){
    var rem = num%div;
    romf.unshift(rem);
    num = num - rem;
    div = div*10;
  }
  return rom;
}

convertToRoman(36);
//==================================================================
//Diff Two Arrays

function diffArray(arr1, arr2) {
  var newArr = [];
  // Same, same; but different.
  
  var f1 = arr1.filter(function(a){
    return this.indexOf(a) === -1;
  }, arr2);
  
  
  var f2 = arr2.filter(function(a){
    return this.indexOf(a) === -1;
  }, arr1);
  //Filter elements whose count is 1
  newArr = newArr.concat(f1).concat(f2);
  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

//==================================================================
//Sum All Numbers in a Range 


function sumAll(arr) {
  var max = Math.max.apply(null,arr);
  var min = Math.min.apply(null,arr);
  var arrList = [];
  for(var i = min; i<= max; i++){
    arrList.push(i);
  }
  var res = arrList.reduce(function(a,b){
    return a+b;
  },0);
  return res;
}

sumAll([1, 4]);
