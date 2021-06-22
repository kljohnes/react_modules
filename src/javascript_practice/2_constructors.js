class User {
    constructor(first, last, e) {
        this.f = first;
        this.l = last;
        this.email = e;
    }
}

let userOne = new User("Paul", "O'Connor", "poconnor@elevenfifty.org");
console.log(userOne.first); //undefined
console.log(userOne.f); // Paul
console.log(userOne.l); // O'Connor
console.log(userOne); // User {f: "Paul", l: "O'Connor", email: "poconnor@elevenfifty.org"}

class Cat {
    constructor(name, breed, color) {
        this.n = name;
        this.b = breed;
        this.c = color;
    }
}
let kitty = new Cat("Luna", "domestic shorthair", "calico");
console.log(kitty)
console.log(kitty.n, kitty.b, kitty.c)