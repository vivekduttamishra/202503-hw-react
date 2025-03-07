
const sanjay = {
    name: 'Sanjay',
    age: 30,
}

const shivanshi = {
    name: 'Shivanshi',
    age: 28,
}

function eat(person, food){
    console.log(`${person.name} is eating ${food.name} with calories ${food.calories}`);
}

sanjay.eat=eat;
shivanshi.eat=eat;



//who is eating here!
shivanshi.eat(sanjay, {name:'chicken', calories:450});