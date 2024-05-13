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