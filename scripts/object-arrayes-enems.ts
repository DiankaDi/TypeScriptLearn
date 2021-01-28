
enum Job {ADMIN,READ_ONLY,AUTHOR};

const person: {
    name: string,
    age :number,
    hobbies: string[],
    role: [number, string]
    job
} = {
    name:'Max',
    age: 18,
    hobbies: ['Sports, Cooking'],//Array
    role: [10,'Author'],//Tuple
    job: Job.ADMIN //Enum
};
console.log(person.name);//Max
console.log(person.role);//10, Author

for (const hobby of person.hobbies){
    console.log(hobby); //Sports, Cooking
};

if (person.job === Job.ADMIN){
    console.log('I am in Admin');//I am in Admin
};
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
