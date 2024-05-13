/*
The map() function is used to transform each element 
of an array by applying a provided function to it. 
It creates a new array with the transformed elements, 
while leaving the original array unchanged.
*/

Array.prototype.customMap = function (callbackFn) {
    const newArr = [];
    for (let i = 0; i < this.length; i++) {
        newArr.push(callbackFn(this[i], i, this));
    }
    return newArr;
};

/*
The filter() function is used to create a new array with all 
elements that pass the test implemented by the provided function.
*/

Array.prototype.customFilter = function (callbackFn) {
    const filteredArr = [];
    for (let i = 0; i < this.length; i++) {
        if(callbackFn(this[i], i, this)) {
            filteredArr.push(this[i]);
        }
    }
    return filteredArr;
}

/* 
The reduce() function is used to apply a function of two arguments 
(accumulator and current value) against a sequence of elements to reduce 
the sequence to a single value.
 */

Array.prototype.customReduce = function (callbackFn, initialValue) {
    let accumulator = initialValue !== undefined ? initialValue : this[0];
    for(let i = initialValue !== undefined? 0: 1; i < this.length; i++) {
        accumulator = callbackFn(accumulator, this[i], i, this);
    }
    return accumulator;
}

/* The forEach() function is used to execute a provided function 
once for each element of the array.
*/

Array.prototype.customForEach = function (callbackFn) {
    for (let i = 0; i < this.length; i++) {
        callbackFn(this[i], i, this);
    }
}