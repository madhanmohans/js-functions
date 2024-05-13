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