interface IUser {
    id: number,
    name: string,
    getFullName(surname: string): string;
}

class User implements IUser{
    id: number;
    name: string;
    age: number;
    constructor(userId: number, userName: string, userAge: number) {
        this.id = userId;
        this.name = userName;
        this.age = userAge;
    }
    getFullName(surname: string): string {
        return this.name + '' + surname;
    }
}


let tom = new User(1, 'Tom ', 20);
console.log(tom.getFullName('Simpson'));
console.log(tom.age);


interface IMovable {
    speed: number;
    move(): void;
}
interface ICar extends IMovable{
    fill(): void;
}

class Car implements ICar {
    speed: number;
    move(): void {
        console.log(this.speed)
    }
    fill(): void {
        console.log("fill a car")
    }
}


let auto = new Car();
auto.speed = 60;
auto.fill();
auto.move();


