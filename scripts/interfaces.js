var User = /** @class */ (function () {
    function User(userId, userName, userAge) {
        this.id = userId;
        this.name = userName;
        this.age = userAge;
    }
    User.prototype.getFullName = function (surname) {
        return this.name + '' + surname;
    };
    return User;
}());
var tom = new User(1, 'Tom ', 20);
console.log(tom.getFullName('Simpson'));
console.log(tom.age);
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.move = function () {
        console.log(this.speed);
    };
    Car.prototype.fill = function () {
        console.log("fill a car");
    };
    return Car;
}());
var auto = new Car();
auto.speed = 60;
auto.fill();
auto.move();
