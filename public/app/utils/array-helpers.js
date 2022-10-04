/* Adding a new method to the Array prototype. */
if (!Array.prototype.$flatMap) {

/* A function that takes a callback function as an argument. It then maps
    the array to the callback function and then reduces the array to a
    single array. */
    Array.prototype.$flatMap = function(cb) {
        return this.map(cb).reduce((destArray, array) =>
        destArray.concat(array), [])
    }
}