class Person{
    constructor(name, photo, biography){
        this.name=name;
        this.photo=photo;
        this.biography=biography;
    }

    toString(){
        return `Name: ${this.name}, Photo: ${this.photo}, Biography: ${this.biography}`;
    }
}

let p1 = new Person('John Doe','john_doe.jpg','John Doe is a famous unkown person');

console.log(p1);