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

// class Ford {

//     static isFord (car) {
//         return car instanceof Ford
//     }

//     static keys (car) {
//         const result = [];

//         for (let key in car) {
//             result[result.length] = key;
//         }

//         return result;
//     }

//     constructor (price, color, model, speed) {
//         this.price = price;
//         this.color = color;
//         this.model = model;
//         this.speed = speed;

//         return this;
//     }

//     info () {
//         console.table(this);
//     }

//     ride () {
//         console.log(`I am riding with speed ${this.speed}`);
//     }
// }

// class Mustang extends Ford {
//     constructor (price, color, model, speed, turbo) {
//         super(price, color, model, speed);

//         this.turbo = turbo;

//         return this;
//     }

//     speedyRide () {
//         console.log(`I am riding speedy with speed ${this.speed}`);
//     }
// }

// const mondeo = new Ford(10000, "black", "mondeo", 200);
// mondeo.info();
// mondeo.ride();

// const mustang = new Mustang(50000, "blue", "mustang", 300, true);
// mustang.info();
// mustang.speedyRide();

// class MustangGT extends Mustang {
//     constructor (price, color, model, speed, turbo, isGt) {
//         super(price, color, model, speed, turbo);

//         this.isGt = isGt;

//         return this;
//     }

//     nitro () {
//         this.speed = this.speed + 50;
//         console.log(`I am using nitro with speed ${this.speed}`);
//     }

//     info () {
//         console.log(this, "THIS IS MUSTANG GT");
//     }
// }

// const mustangGT = new MustangGT(70000, "red", "mustangGT", 400, true, true);

// mustangGT.speedyRide();
// mustangGT.nitro();
// mustangGT.ride();
// mustangGT.info();

// console.log(Ford.isFord({}), "isFord");
// console.log(Ford.keys(mustangGT), "keys of mustang gt");
// console.log(Object.keys(mustangGT), "default keys");


// Створити класс з 2 праметрами та 2 методами, що змінюють кожен з параметрів


// Array.prototype.reduce2 = function (fn, acc = 0) {
    
//     for(let i = 0; i < this.length; i++) {
//        acc = fn(acc, this[i], i, this);
//     }

//     return acc;
// }

// // console.log([1, 2, 3, 4].reduce2((acc, el) => acc = acc.push(el * 10), []), "reduce");
// console.log([1, 2, 3, 4].reduce((acc, el, i) => acc[i] = (el * 10), []), "reduce original");

// const fn = function (f1, f2) {
// 	return {
// 			result1: f1(),
// 			result2: f2()
//    }
// }

// const result = fn(() => "res1", () => "res2");

// console.log(result, "!!!");

// function fn (classToCheck, objectsArray) {
//     return objectsArray.filter((object) => object instanceof classToCheck);
// }

// console.log(fn(Ford, [mustang, mustangGT, mondeo, {}, {name: "Hello"}]), "result !!!");

class Person {

    #age = Date.now();

    constructor(name) {
        this.name = name;
    }

    getDate (date) {
        return date - this.#age;
    }

    get age () {
        return this.#age;
    } 

    set age (newAge) {
        this.#age = newAge;
    }

}

const person = new Person("Igor", 23);

// 
person.age = 100; //setter
person.age //getter

person.name = "Oleg";

console.log(person, "person", window);

// 1. Створити свій клас з приватним полем, написати гетер та сетер для цього поля, що дозволить з ним працювати

// Array.prototype.showInfo = function () {
//     console.table(this);
// }

// const arr = [1,2,3,4,5];

// arr.showInfo();


class SuperArray extends Array {
    constructor (arr) {
        super(arr);
    }

    showInfo () {
        console.table(this);  
    }

    push (el) {
        this[this.length] = el;
        return this.flat();
    }

    at (index) {
        console.log(this, "this");
        return {
            element: this[0][index],
            array: this
        }
    }

}

const myArray = new SuperArray(["Hello", "World"]);


console.log(myArray.at(1), "element!!!!");

// 2. Створити аналог класу Object з доданим методом copy. Метод має повертати нову незалежну копію вашого object


class SuperObject extends Object {
    constructor (obj) {
        super(obj);

        for (let key in obj) {
            this[key] = obj[key];
        }
    }

    copy () {
        return {...this}
    }
}

SuperObject.prototype.copy = function () {
    return null;
}

const obj10 = new SuperObject({name: "Oleksandr", age: 100});

const anotherObj = obj10.copy();
obj10.name = "Igor";

console.log(anotherObj, obj10, "log");
