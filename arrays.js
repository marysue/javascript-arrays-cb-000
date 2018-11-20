function addElementToBeginningOfArray(arr, elt){
  //add an elt to the beginning of the array
  //return a new array with the elt added
  // use the ... function
  return [elt, ...arr]
}

function destructivelyAddElementToBeginningOfArray(arr, elt)
{
  //add elt to the array -- modifying the array content
  //return the array
  arr.unshift( elt );
  return arr;
}

<<<<<<< HEAD
function addElementToEndOfArray(arr, elt){
=======
function addElementToendOfArray(arr, elt){
>>>>>>> fa78a02aff67b8117531819f9ea2ff0f863080d2
  //do NOT alter the original array
  //add the elt to the end of the array
  return [...arr, elt]

}

<<<<<<< HEAD
function destructivelyAddElementToEndOfArray (arr, elt)
=======
function destructivelyAddElementToendOfArray (arr, elt)
>>>>>>> fa78a02aff67b8117531819f9ea2ff0f863080d2
{
  //alter the original array
  //push - add elt to end of array - destructively
  arr.push(elt);
<<<<<<< HEAD
  return arr;
=======
  return arr
>>>>>>> fa78a02aff67b8117531819f9ea2ff0f863080d2
}
function accessElementInArray(arr, idx)
{
  return arr[idx];  //returns elt at that index
}

function destructivelyRemoveElementFromBeginningOfArray(arr)
{
  //takes an array as only argument
  //removes the first element
  //return the entire array : mutated
  // use slice method slice(elt#) where 1 = first elt of array :
<<<<<<< HEAD
  arr.shift();
  return arr;
}

function destructivelyRemoveElementFromEndOfArray(arr) {
  arr.pop();
  return arr;
}

function removeElementFromEndOfArray(arr){
  return arr.slice(0, arr.length-1)
}

function removeElementFromBeginningOfArray(arr) {
  return arr.slice(1);
}

var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];
=======
  arr = arr.slice(1);
  return arr;
}
>>>>>>> fa78a02aff67b8117531819f9ea2ff0f863080d2
