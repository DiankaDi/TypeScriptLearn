type Combinable = number | string;

function combine(
    input1: Combinable,//Union types
    input2: Combinable,//Union types
    resultConversion:'as-number' |'as-text'//Literal types
 ) {
    let result;
    if (typeof input1 ==='number' && typeof input2 === 'number' || resultConversion === 'as-number'){
        result = +input1 + +input2;
    } else {
        result = input1.toString() + input2.toString();
    }
    return result;
}


const combinedNames = combine('Max', 'Max', 'as-text');
console.log(combinedNames);//MaxMax

const resultConversion = combine(30, 40, 'as-number');
console.log(resultConversion);