/*
The map() function is used to transform each element 
of an array by applying a provided function to it. 
It creates a new array with the transformed elements, 
while leaving the original array unchanged.
*/

function customMap(arr, callbackFn) {
    const newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(callbackFn(arr[i], i, arr));
    }
    return newArr;
}

const numbers = [5, 4, 3, 2, 1];
const doubledNumbers = customMap(numbers, (num) => num * 2);
console.log(doubledNumbers)

/*
The filter() function is used to create a new array with all 
elements that pass the test implemented by the provided function.
*/
function customFilter(arr, callbackFn) {
    const filteredArr = [];
    for (let i = 0; i < arr.length; i++) {
        if(callbackFn(arr[i], i, arr)) {
            filteredArr.push(arr[i]);
        }
    }
    return filteredArr;
}

const oddNumbers = customFilter(numbers, (num) => num % 2 != 0);
console.log(oddNumbers);