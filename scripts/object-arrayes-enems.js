//Object
var Job;
(function (Job) {
    Job[Job["ADMIN"] = 0] = "ADMIN";
    Job[Job["READ_ONLY"] = 1] = "READ_ONLY";
    Job[Job["AUTHOR"] = 2] = "AUTHOR";
})(Job || (Job = {}));
;
var person = {
    name: 'Max',
    age: 18,
    hobbies: ['Sports, Cooking'],
    role: [10, 'Author'],
    job: Job.ADMIN //Enum
};
console.log(person.name); //Max
console.log(person.role); //10, Author
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby); //Sports, Cooking
}
;
if (person.job === Job.ADMIN) {
    console.log('I am in Admin'); //I am in Admin
}
;
//Arrays
//let listOne: string[] = ['a', 'b', 'c'];
//console.log(listOne); //a,b,c
//const list: Array<number> = [1,2,3];
//console.log(list); //1,2,3
//Tuple
//let roles: [string, number, number];
//roles = ['hello', 5, 82];
//console.log(roles);
//enum Color {Red = 1, Green, Blue,}
//let colorName: string = Color[2];
//console.log(colorName);// Displays 'Green'
