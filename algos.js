// Array diffs
// - Create a function that takes two arrays of integers (`arr1` and `arr2`) and checks for the unique (non-shared) integers between them.
// The output should return an array with all the unique numbers (the numbers that are **not** in both arrays).

//ARRAY DIFFERENCES

const arrayDiffs = (arr1, arr2) => {
  //establishes array to return
  let myArray = [];

  //for loop to iterate over elements in arr1
  for (let i=0; i < arr1.length; i+=1) {
    if (!arr2.includes(arr1[i])) {
      myArray.push(arr1[i])
    }
    if (!arr1.includes(arr2[i])) {
      myArray.push(arr2[i])
    }
  }
  console.log(myArray)
  return myArray.sort(function(a,b) {return b-a})
};

console.log(arrayDiffs([1, 44, 2, 3, 5], [33, 1, 2, 3, 4, 5]));


// Does include 
// - Check if a given parameter (`x`) exists in a given array or string (`data`) **without using a for or while loop**.
// - The output should either return `true` or `false` depending on the test case.

const doesInclude = (data, x) => {
  return data.includes(x)
}

// Odds from Evens 
// - Create an algorithm which takes a given array of integers (arr) and separates the odds from the evens.
// - The output should be a new array which has all even integers (ordered from lowest to highest) followed by all odd integers (ordered from highest to lowest).

// > i.e.:
// > input => `[0,1,2,3,4,5,6,7,8,9]`
// > output => `[0,2,4,6,8,9,7,5,3,1]`

const oddsFromEvens = (arr) => {
  // 2 arrays: one to take evens, one to take odds
  let odds = [];
  let evens = [];


  // iterate over original array (arr) to extract evens/odds
  arr.forEach(number => {
    // push evens to even array
    if(number % 2 === 0){
      evens.push(number);
    } else {
      // push odds to odd array
      odds.push(number);
    }
  })
  // console.log(odds);
  // console.log(evens);
  
  
  // sort evens from lowest to highest
  evens.sort((a, b) => a - b);
  console.log(evens);


  // sort odds from highest to lowest
  odds.sort((a, b) => b - a);
  console.log(odds);


  // combine evens and odds in new array


}
// used this link to figure out how to sort numbers
// https://www.w3schools.com/jsref/jsref_sort.asp

console.log(oddsFromEvens([423, 322, 918, 45, 6, 79, 55]))
