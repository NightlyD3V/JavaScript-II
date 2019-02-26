// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum', 'Gum'];

/* 

  //Given this problem: 
  
  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // Potential Solution:

  // Higher order function using "cb" as the call back
  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  // Function invocation 
  firstItem(items, function(first) {
    console.log(first)
  });

*/


function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  return cb(arr.length);
}
  // Invocation 
getLength(items, function(length) {
  console.log(length);
});

function last(arr, cb) {
  // last passes the last item of the array into the callback.
  return cb(arr.length - 1);
}
  // Invocation
last(items, function(last) {
  console.log(items[last]);
});
function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  return cb(x + y);
}
sumNums(6, 13, function(add) {
  console.log(add);
});
function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  return cb(x * y);
}
multiplyNums(3, 6, function(multiply) {
  console.log(multiply);
}); 

function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  return cb(list.includes(item));
}

contains('Gum', items, function(exists) {
  console.log(exists);
});

/* STRETCH PROBLEM */
const newArray = [];
function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  return array.filter(cb);
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
}
removeDuplicates(items, function(item, index) {
  if (items.indexOf(item) !== index) {
  newArray.pop(item);
  } else if (items.indexOf(item) === index) {
    newArray.push(item);
  }
});
console.log(newArray);
console.log(items);