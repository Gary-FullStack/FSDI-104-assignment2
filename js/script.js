
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

// register pet to the HTML form
function register() {



}

function init() {
    let Jake = new Pet('Jake', 'dog', '13', 'male', 'lab', 'calm', 'outgoing');
    let Ivy = new Pet('Ivy', 'dog', '3', 'female', 'mix', 'hyper', 'guarded');
    let Penny = new Pet('Penny', 'dog', '10', 'female', 'Australian Cattle', 'loving', 'beautiful soul');
    PetsRus.pets.push(Jake, Ivy, Penny);
    console.log(PetsRus.pets[0].name);
    console.log(PetsRus.pets[1].name);
    console.log(PetsRus.pets[2].name);

}
window.onload = init;