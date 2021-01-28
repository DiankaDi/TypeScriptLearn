function combine(input1, input2, resultConversion) {
    var result;
    if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
var combinedNames = combine('Max', 'Max', 'as-text');
console.log(combinedNames); //MaxMax
var resultConversion = combine(30, 40, 'as-number');
console.log(resultConversion);
