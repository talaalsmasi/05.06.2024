/*
1
Correct the syntax error
 [ 1,7  9  45, ]

 [ 1, 7, 9, 45]


 ["Str" "alex","moh"

 ["Str", "alex","moh"]

 'the','fox' 'over' lazy, 'dog',  ]

 ['the','fox', 'over', lazy, 'dog' ]

*/

/*
2
What the index of "Banana","Tomato"
var fruits=["Tomato","Banana","Watermelon"]

index of "Banana" : 1
index of "Tomato" : 2

*/

/*
3
Create an array represents your:
1- Favorite Food (5)
food : ["maqloubeh" , "mansaf" , "burger" , "pizza" , "spuggetii" ]
2- Favorite Sport (3)
sport : ["swimming" , "tinnes" , "basketball"]
3- Favorite Movie (4)
movie : []
*/

/*
4
Create a function called firstOfArray
that take an array as a parameter
and return the first element in an array

Ex: firstOfArray([1,4,5]) => 1
Ex: firstOfArray(["t","u","g","x"]) => "t"
*/
function firstofarray(arr) {
  let first = arr[0];
  console.log(first);
}
firstofarray([1, 4, 5]);
firstofarray(["t", "u", "g", "x"]);

/*
5
Create a function called lastOfArray
that take an array as a parameter
and return the last element in an array

Ex: lastOfArray([1,4,5]) => 5
Ex: lastOfArray(["t","u","g","x"]) => "x"
*/
function lastofarray(arr) {
  let last = arr[arr.length - 1];
  console.log(last);
}
lastofarray([1, 4, 5]);
lastofarray(["t", "u", "g", "x"]);

/*
6
Using console make this array to be like this one (push, unshift, shift, pop)   shift : remove from left / pop :remove from right / push :add from right / unshift : add from right

var array = [0,5,7,9]
=> [1,3,4,6,8,9,10]
*/
let array = [0, 5, 7, 9];
let updated = array.shift();
array.shift;
array.shift();
array.shift;
array.shift();
array.shift();
array.push(1);
array.push(3);
array.push(4);
array.push(6);
array.push(8);
array.push(9);
array.push(10);

console.log(array);

/*
7
Using the console try to figure out what the thing thats (push, unshift, shift, pop) return to you

var array2 = [5,9,-7,3.5]
*/
let array1 = [0, 5, 7, 9];
let updated1 = array1.shift();
array1.shift();
array1.push(5);
console.log(array1);

/*
8
Create a function called middleOfArray
that take an array as a parameter
and return the middle element in an array if it is have an odd elemnets
and return the two middle elemnt in an array if it is have an even elemnets

Ex: middleOfArray([1,4,5]) => 4
Ex: middleOfArray(["t","u","g","x"]) =>"u and g"
*/

function middleOfArray(array2) {
  let arrl = array2.length;
  if (arrl % 2 == 0) {
    console.log(array2[arrl / 2 - 1], array2[arrl / 2]);
  } else {
    console.log(array2[(arrl - 1) / 2]);
  }
}
middleOfArray([1, 4, 5]);
middleOfArray(["t", "u", "g", "x"]);

/*
9
Using assignment operator (=)
make the animals array have these animals
var animals = ['cat', 'ele', 'bird']
animals; => ['zebra', 'elephant']
** hint: animals[0]=something


var nums= [1,2,3,8,9]
nums => [5,-22,3.5,44,98,44]
*/
let animals = ["cat", "ele", "bird"];
let updated3 = animals.pop();
animals[0] = "zebra";
animals[1] = "elephant";
console.log(animals)

/*
10
Create a function called indexOfArray
that accept an array and index
and return what this array have in this index

var nums= [1,2,3,8,9]
Ex: indexOfArray(nums,3) => 8
Ex: indexOfArray(nums,1) => 2
Ex: indexOfArray(nums,4) => 9

**try more cases by your self   
*/
let arraynums = [1,2,3,8,9];
console.log(arraynums[3])
/*
11
Create a function called arrayExceptLast
that accept an array
and return the entire array except the last elemnt
** hint: search abou the function that will cut the array on MDN
var nums= [1,2,3,8,9]
Ex: arrayExceptLast(nums) =>  [1,2,3,8]

**try more cases by your self
*/

   let nums= [1,2,3,8,9];
   var slicedArray1 = nums.slice(0, 3); 
  console.log(slicedArray1);
  




/*
12
Create a function called addToEnd
that accept an array and value
and return the entire array with add this value to the end of this array

var nums= [1,2,3,8,9]
Ex: addToEnd(nums,55) =>  [1,2,3,8,55]

**try more cases by your self
*/
var nums1= [1,2,3,8,9];
nums1.push(55);
console.log(nums1)


/*

// all the exercises below should solved 2 times: 1- for loop 2- while lopp
/*
13
Create a function called sumArray
that accept an array
and return the summation of all elemnt in this array

var nums= [1,2,3,8,9]
Ex: sumArray(nums) => 23

** solve it one time using for loop and another using while loop
**try more cases by your self
*/  
/*for*/
var array13= [1,2,3,8,9]
  let sum = 0;
  for (let i = 0; i < array13.length; i++) {
    sum += array13[i];
  }
  console.log(sum)

/*while*/
   let array13a = [1, 2, 3, 8, 9];
let suma = 0;
let i = 0;
while (i < array13a.length) {
  suma += array13a[i];
  i++;
}

console.log(suma);


/*
14
Create a function called minInArray
that accept an array
and return the minimum value inside this array

var nums= [1,2,3,8,9]
Ex: minInArray(nums) => 1

** solve it one time using for loop and another using while loop
**try more cases by your self

var array14 = [1,2,3,8,9];
let minValue = Math.min(...array14);
console.log(minValue);
*/
function minInArrayForLoop(arr) {
  if (arr.length === 0) return undefined; 
  
  let minValue = arr[0];
  
  for (let i = 1; i < arr.length; i++) {
      if (arr[i] < minValue) {
          minValue = arr[i];
      }
  }
  
  return minValue;
}

/*


15
Create a function called removeFromArray
that accept an array and elemnt to remove
and return the array after remove this elemnt from it

var nums= [1,2,3,8,9]
Ex: minInArray(nums,8) => [1,2,3,9]

** solve it one time using for loop and another using while loop
**try more cases by your self
let array15= [1,2,3,8,9];
array15.shift(array14[4]);
console.log(array15)
*/


function removeFromArrayForLoop(arr, elementToRemove) {
  let resultArray = [];
  
  for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== elementToRemove) {
          resultArray.push(arr[i]);
      }
  }
  
  return resultArray;
}


/*
16
Create a function called oddArray
that accept an array
and return an array have only the odd elemnts

var nums= [1,2,3,8,9]
Ex: oddArray(nums) => [1,3,9]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
function oddArrayForLoop(arr) {
  let resultArray = [];
  
  for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 !== 0) {
          resultArray.push(arr[i]);
      }
  }
  
  return resultArray;
}
/*
17
Create a function called aveArray
that accept an array
and return the average of the numbers inside this array

var nums= [1,2,3,8,9]
Ex: aveArray(nums) => 4.6

var nums2= [1,2,3,8,9,77]
Ex: aveArray(nums) => 16.6

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
function aveArray(arr) {
  if (arr.length === 0) return 0; 
  
  let sum = arr.reduce((acc, cur) => acc + cur, 0);
  return sum / arr.length;
}


/*
18
Create a function called shorterInArray
that accept an array of strings
and return the shortest string inside this array (first)

var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: shorterInArray(strings) => "alex"

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
function shorterInArrayForLoop(arr) {
  if (arr.length === 0) return ""; // Handling empty array case
  
  let shortest = arr[0];
  
  for (let i = 1; i < arr.length; i++) {
      if (arr[i].length < shortest.length) {
          shortest = arr[i];
      }
  }
  
  return shortest;
}
/*
19
Create a function called repeatChar
that accept a string and char
and return the times that this char repeat inside this string

var string= "alex mercer madrasa rashed2 emad hala"
Ex: repeatChar(string,"a") => 6
Ex: repeatChar(string,"z") => 0

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
function repeatCharForLoop(str, char) {
  let count = 0;
  
  for (let i = 0; i < str.length; i++) {
      if (str[i] === char) {
          count++;
      }
  }
  
  return count;
}


/*
20
Create a function called evenIndexOddLength
that accept an array of strings
and return a new array that have the string with odd length in even index

var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: evenIndexOddLength(strings) => ["madrasa"]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
function evenIndexOddLengthForLoop(arr) {
  let resultArray = [];
  
  for (let i = 0; i < arr.length; i += 2) {
      if (arr[i].length % 2 !== 0) {
          resultArray.push(arr[i]);
      }
  }
  
  return resultArray;
}

/*
21
Create a function called powerElementIndex
that accept an array of number
and return a new array that have the elemnt power by the index of it self

var nums= [44, 5, 4, 3, 2, 10]
Ex: powerElementIndex(nums) => [0, 5, 16, 27, 16, 100000]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
function powerElementIndexForLoop(arr) {
  let resultArray = [];
  
  for (let i = 0; i < arr.length; i++) {
      resultArray.push(Math.pow(arr[i], i));
  }
  
  return resultArray;
}

/*
22
Create a function called evenNumberEvenIndex
that accept an array of nums
and return a new array that have the even number in even index

var nums= [5,2,2,1,8,66,55,77,34,9,55,1]
Ex: evenNumberEvenIndex(nums) => [2,8,34]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
function evenNumberEvenIndexForLoop(arr) {
  let resultArray = [];
  
  for (let i = 0; i < arr.length; i += 2) {
      if (arr[i] % 2 === 0) {
          resultArray.push(arr[i]);
      }
  }
  
  return resultArray;
}
