function Scooter(year, color, model) {
    this.year = year;
    this.color = color;
    this.model = model;
}

function Driver(name, age, experience) {
    this.name = name;
    this.age = age;
    this.experience = experience;
}

function PickupLocation(address, city) {
    this.address = address;
    this.city = city;
}




// function User(name, email) {
//     this.name = name;
//     this.email = email;
//     this.sayHello = function() {
//         console.log(`Hello everybody, my name is ${this.name} whom you've been
// mailing at ${this.email}!`);
//     };
// }

// let lauren = new User('lauren', 'lauren@example.com');
// lauren.sayHello(); //=> Hello everybody, my name is lauren whom you've been mailing at lauren@example.com!