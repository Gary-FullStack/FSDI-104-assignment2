
let PetsRus = {
    name: 'Pets R Us',

    address: {
        location: '123 Street',
        city: 'PetVillage',
        State: 'Stateasota',
        zip: '12345'
    },

    contactUs: {
        email: 'petsrus@pets.com',
        Phone: '123 - 456 - 7890',
        twitter: '@PetsRUs'
    },

    hours: {
        open: '0800',
        close: '1600'
    },
    pets: []
}


function Pet(name, type, age, gender, breed, temperament, demeanor) {
    this.name = name;
    this.type = type;
    this.age = age;
    this.gender = gender;
    this.breed = breed;
    this.temperament = temperament;
    this.demeanor = demeanor;

}

let Jake = new Pet('Jake', 'dog', '13', 'male', 'lab', 'calm', 'outgoing');
PetsRus.pets.push(Jake);


function displayInfo() {

}

function init() {
    console.log(PetsRus.pets[0].name);
}
window.onload = init;