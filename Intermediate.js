//==================================================================
//Steamroller

function steamrollArray(arr) {
  // I'm a steamroller, baby
  return arr.reduce(function(ac,cv){
    if(Array.isArray(cv)){
      return ac.concat(steamrollArray(cv));
    }
    else    return ac.concat(cv);
  },[]);
}

steamrollArray([1, [2], [3, [[4]]]]);
//==================================================================
//Drop it
function dropElements(arr, func) {
  // Drop them elements.
  while(arr.length>0){
    if(func(arr[0])){
      break;
    }
    else{
       arr.shift();
    }
  }
  return arr;
}

dropElements([1, 2, 3,4], function(n) {return n >= 3; });
//==================================================================
//Finder keepers
function findElement(arr, func) {
  var num = 0;
  arr = arr.filter(func);
  return arr[0];
}

findElement([1, 3, 5, 8, 9, 10], function(num){ return num % 2 === 0; });
//==================================================================
//Smallest Common Multiple
function gcd(a,b){
  if(a==b){
    return a;
  }
  else if(a>b){
    return gcd(a-b,b);
  }
  else{
    return gcd(a,b-a);
  }
}

function lcm(a,b){
  return (a*b/gcd(a,b));
}

function smallestCommons(arr) {
  arr.sort(function(a,b){ return a-b;});
  var numArr = [];
  var mul = 1;
  for(var i=arr[0];i<=arr[1];i++){
    numArr.push(i);
  }
  //mul = numArr.reduce(function(ac,cv){ return ac*cv;},1);
  return numArr.reduce(lcm);
}

smallestCommons([1,5]);
//==================================================================
//Sum all primes
function sieve(num){
  var arr = [];
  if(num == 1){
    return undefined;
  }
  else{
    //Create array
    for(var i=2;i<=num;i++){
      arr.push(i);
    }
    //Filter the array
    var limit = Math.floor(Math.sqrt(num));
    console.log(limit);
    for(var j=2;j<=limit;j++){
      for(var k=0;k<=arr.length;k++){
        if(arr[k] !== j && arr[k]%j === 0 ){
          arr[k] = 0;
        }
      }
    }
  }
  return arr.reduce( function (acc,cv){return acc+cv;},0);
}

function sumPrimes(num) {
  return sieve(num);
}

sumPrimes(10);

//==================================================================
//Sum All Odd Fibonacci Numbers
function fib(num){
  var arr = [];
  var a0=1; var a1=1;
  arr.push(a0);
  arr.push(a1);
  var an = a0 + a1;
  while(an<=num){
    arr.push(an);
    a0 = a1;
    a1 = an;
    an = a0 + a1;
  }
  return arr;
}

function sumFibs(num) {
  var arr = fib(num);
  var sum = 0;
  for(var i=0;i<arr.length;i++){
    if(arr[i]%2 !== 0){
      sum = sum + arr[i];
    }
  }
  return sum;
}
sumFibs(4);
//==================================================================
//Spinal Tap Case
function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
  return str.replace(/[^A-Za-z]/g, ' ')// for removing the _
    .replace(/([A-Za-z])(?=[A-Z])/g,function(c){return c+' ';})
    .replace(/[A-Z]/g,function(c){return c.toLowerCase();})//for lowering case
    .replace(/\s/g,'-');
  
}

spinalCase('The_Andy_Griffith_Show');
//==================================================================
//Convert HTML Entities
function convertHTML(str) {
  // &colon;&rpar;
 return str.replace(/['"=<>\&]/g,function(c){
		return '&'+ (entityTable[c.charCodeAt(0)] || '#'+c.charCodeAt(0))+';';
	});
}
entityTable = {
            34 : 'quot', 
            38 : 'amp', 
            39 : 'apos', 
            60 : 'lt',
	    61 : 'equal', 
            62 : 'gt', 
            160 : 'nbsp', 
	};
convertHTML("Dolce & Gabbana");
//==================================================================
//Sorted union

function uniteUnique(arr) {
  var uniq =[] ;
  for(var i=0; i<arguments.length; i++){
    arguments[i].reduce(function(acc, cur){
      if(acc.indexOf(cur) ==  -1){
        acc.push(cur);
      }
      return acc;
    }, uniq);
  }
  return uniq;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);

//==================================================================
//Boo who

function booWho(bool) {
  // What is the new fad diet for ghost developers? The Boolean.
  if(bool === Boolean(bool)){
    return true;
  }
  else
    return false;
}

booWho(null);
//==================================================================
//Missing letters

function fearNotLetter(str) {
  var arr = str.split('');
  arr = arr.map(function(a){
    return a.charCodeAt(0);
  });
  var j = arr[0];
  var res;
  for(var i=0; i< arr.length; i++){
      if(j != arr[i]){
        res = String.fromCharCode(j);
        break;
      }
      j++;
  }
  return res;
}

fearNotLetter("abcdefghjklmno");

//==================================================================
//DNA pairing
function pairElement(str) {
  var strand = str.split('');
  //console.log(strand);
  var res = [];
  for(var i =0; i< strand.length; i++){
    var pair = [];
    pair.push(strand[i]);
    if(strand[i] == 'G'){
      pair.push('C');
    }
    if(strand[i] == 'C'){
      pair.push('G');
    }
    if(strand[i] == 'T'){
      pair.push('A');
    }
    if(strand[i] == 'A'){
      pair.push('T');
    }
    res.push(pair);
  }
  //console.log(res);
  return res;
}

pairElement("GCG");

//==================================================================
//Pig Latin
function translatePigLatin(str) {
  var vowel = ['a','e','i','o','u'];
  var i;
  var pigLat = [];
  var strSplit = str.split('');
  //console.log(strSplit);
  for(i=0;i<strSplit.length; i++){
    if(vowel.includes(strSplit[i])){
      break;
    }
    else{
      pigLat.push(strSplit[i]);
    }
  }
  if(i>0){
    str = str.substr(i)+pigLat.join('')+"ay";
  }
  else{
    str = str.substr(i)+pigLat.join('')+"way";
  }
  
  return str;
}

translatePigLatin("consonant");

//==================================================================
//Search and Replace
function myReplace(str, before, after) {
  //console.log(str);
  if(before[0] == before[0].toUpperCase()){
    after = after[0].toUpperCase()+after.slice(1);
  }
  str = str.replace(before,after);
  //console.log(str);
  return str;
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");

//==================================================================
// Wherefore art thou
function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line
  var ob;
  var srcKeys = Object.keys(source);
    var allPrsnt = false;
    collection.forEach(function(b){
      srcKeys.forEach(function(a){
        if(b.hasOwnProperty(a) && source[a] == b[a]){
          allPrsnt = true;
        }
        else{
         allPrsnt = false;
        }
      });
      if(allPrsnt){
        arr.push(b);
      } 
    });
    
  // Only change code above this line
  return arr;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });

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
