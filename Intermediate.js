//==================================================================
//Roman Numerals

function getLowest(arr, num){
  var cd;
 for(var i =0; i<arr.length; i++){
 	if(num>=arr[i])
	  cd = arr[i];
    else
	  break;          
 }
 return cd;
}

function convertToRoman(num){
 var rom = [];
  var code= [1,4,5,9,10,40,50,90,100,500,900,1000];
  var codeMap = {"1":"I","4":"IV","5":"V","9":"IX","10":"X","40":"XL","50":"L","90":"XC","100":"C","400":"CD","500":"D","900":"CM","1000":"M"};
  var i=0;
  while(num!==0){
      var cd = getLowest(code,num);
      num = num - cd;
      rom.push(cd);
  }
  rom = rom.map(function(a){
	return codeMap[a];
	}).join('');
  return rom;
}

convertToRoman(146);
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
