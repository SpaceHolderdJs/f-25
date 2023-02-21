// new 
// class Person {
//     constructor (name, age, city) {
//         this.name = name;
//         this.age = age;
//         this.city = city;

//         return this;
//     }

//     showInfo () {
//         console.log(`Hi, my name is ${this.name} I am ${this.age}`);
//     }

//     getName () {
//         return this.name;
//     }

//     setName (newName) {
//         this.name = newName;
//     }


// }

// // old
// function PersonFn (name, age) {
//     this.name = name;
//     this.age = age;

//     this.showInfo = function () {
//         console.log(`Hi, my name is ${this.name} I am ${this.age}`);
//     }

//     this.setName = function (newName) {
//         this.name = newName;
//     }

//     return this;
// }

// const person1 = new Person("Igor", 23, "Kyiv");
// person1.showInfo();
// person1.setName("Yula");
// console.log(person1.getName(), "new name");
// person1.showInfo();

// const person2 = new PersonFn("Oleg", 50);
// person2.showInfo();

// написати свій класс Car з трьома аргументами та додати до класу метод що виводить про нього інформацію та створити екземпляр класу, використати метод  

class Ford {

    static isFord (car) {
        return car instanceof Ford
    }

    static keys (car) {
        const result = [];

        for (let key in car) {
            result[result.length] = key;
        }

        return result;
    }

    constructor (price, color, model, speed) {
        this.price = price;
        this.color = color;
        this.model = model;
        this.speed = speed;

        return this;
    }

    info () {
        console.table(this);
    }

    ride () {
        console.log(`I am riding with speed ${this.speed}`);
    }
}

class Mustang extends Ford {
    constructor (price, color, model, speed, turbo) {
        super(price, color, model, speed);

        this.turbo = turbo;

        return this;
    }

    speedyRide () {
        console.log(`I am riding speedy with speed ${this.speed}`);
    }
}

const mondeo = new Ford(10000, "black", "mondeo", 200);
mondeo.info();
mondeo.ride();

const mustang = new Mustang(50000, "blue", "mustang", 300, true);
mustang.info();
mustang.speedyRide();

class MustangGT extends Mustang {
    constructor (price, color, model, speed, turbo, isGt) {
        super(price, color, model, speed, turbo);

        this.isGt = isGt;

        return this;
    }

    nitro () {
        this.speed = this.speed + 50;
        console.log(`I am using nitro with speed ${this.speed}`);
    }

    info () {
        console.log(this, "THIS IS MUSTANG GT");
    }
}

const mustangGT = new MustangGT(70000, "red", "mustangGT", 400, true, true);

mustangGT.speedyRide();
mustangGT.nitro();
mustangGT.ride();
mustangGT.info();

console.log(Ford.isFord({}), "isFord");
console.log(Ford.keys(mustangGT), "keys of mustang gt");
console.log(Object.keys(mustangGT), "default keys");


// Створити класс з 2 праметрами та 2 методами, що змінюють кожен з параметрів


Array.prototype.reduce2 = function (fn, acc = 0) {
    
    for(let i = 0; i < this.length; i++) {
       acc = fn(acc, this[i], i, this);
    }

    return acc;
}

// console.log([1, 2, 3, 4].reduce2((acc, el) => acc = acc.push(el * 10), []), "reduce");
console.log([1, 2, 3, 4].reduce((acc, el, i) => acc[i] = (el * 10), []), "reduce original");