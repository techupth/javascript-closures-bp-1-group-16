//Exercise#4 : Debugging 2

//Start coding here

function removeDuplicates(array) {
  let uniqueArray = [];
  for (let i = 0; i < array.length; i++) {  //array.length   not array.length - 1
    if (uniqueArray.indexOf(array[i]) === -1) {   // === -1  not === 0
      uniqueArray.push(array[i]);  //push(array[i])  not push(array[0])
    }
  }
  return uniqueArray;
}

let numbers = [1, 2, 2, 3, 4, 4, 5];
console.log(removeDuplicates(numbers));
