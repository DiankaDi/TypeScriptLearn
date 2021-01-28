function addAndHandle(n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
}
addAndHandle(10, 20, function (result) {
    console.log(result);
});
var combineValues = function (a, b) {
    return 8 + 8;
};
console.log(combineValues);
